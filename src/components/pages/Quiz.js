/* eslint-disable react-hooks/exhaustive-deps */
import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import useQuestions from "../../hooks/useQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

// initialState
const initialState = null;

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);

      questions[action.questionId].options[action.optionIndex].checked =
        action.value;

      return questions;
    default:
      return state;
  }
};

const Quiz = () => {
  const { id } = useParams();
  const { loading, questions, error } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  console.log(data);

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  const handleAnswerChange = (e, index) => {
    dispatch({
      type: "answer",
      questionId: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  // handle next button

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setCurrentQuestion((prev) => (prev = 0));
    }
  };
  // handle previous

  const handlePreviousQuestion = () => {
    if (currentQuestion >= 1 && currentQuestion < questions.length) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const percentage =
    currentQuestion > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  // user info from firebase custom hook
  const { currentUser } = useAuth();

  // submit quiz
  const submit = async () => {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    // write in firebase database
    await set(resultRef, {
      [id]: qna,
    });

    navigate(`/result/${id}`, { state: qna });
  };

  return (
    <>
      {loading && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {!loading && !error && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            input={true}
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            next={handleNextQuestion}
            prev={handlePreviousQuestion}
            progress={percentage}
            submit={submit}
          />
          <MiniPlayer id={id} title={data} />
        </>
      )}
    </>
  );
};

export default Quiz;
