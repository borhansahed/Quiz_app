import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      // database connection
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoID + "/questions");
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);

        const snapShot = await get(quizQuery);
        setLoading(false);
        if (snapShot.exists()) {
          setQuestions((previousQuestions) => [
            ...previousQuestions,
            ...Object.values(snapShot.val()),
          ]);
        }
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    }

    fetchQuestions();
  }, [videoID]);

  return {
    loading,
    questions,
    error,
  };
}
