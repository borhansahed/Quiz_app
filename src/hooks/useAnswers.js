import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswers(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswers() {
      // database connection
      const db = getDatabase();
      const AnswersRef = ref(db, "answers/" + videoID + "/questions");
      const AnswersQuery = query(AnswersRef, orderByKey());

      try {
        setError(false);
        setLoading(true);

        const snapShot = await get(AnswersQuery);
        setLoading(false);
        if (snapShot.exists()) {
          setAnswers((previousAnswers) => [
            ...previousAnswers,
            ...Object.values(snapShot.val()),
          ]);
        }
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    }

    fetchAnswers();
  }, [videoID]);

  return {
    loading,
    answers,
    error,
  };
}
