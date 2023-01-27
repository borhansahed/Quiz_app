import lodash from "lodash";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";
const Result = () => {
  const { id } = useParams();
  const location = useLocation();
  const data = location.state;
  const { loading, answers, error } = useAnswers(id);

  // calculate score
  function calculateScore() {
    let score = 0;

    answers.forEach((questions, index1) => {
      let correctIndexes = [],
        checkedIndexes = [];
      questions.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (data[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });

      if (lodash.isEqual(correctIndexes, checkedIndexes)) {
        score += 5;
      }
    });

    return score;
  }

  const userScore = calculateScore();
  console.log(userScore);
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}
      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} score={userScore} />
        </>
      )}
    </>
  );
};

export default Result;
