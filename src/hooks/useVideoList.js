import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // database connection
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(
        videoRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );

      try {
        setError(false);
        setLoading(true);

        const snapShot = await get(videoQuery);
        setLoading(false);
        if (snapShot.exists()) {
          setVideos((previousVideos) => [
            ...previousVideos,
            ...Object.values(snapShot.val()),
          ]);
        } else {
          setHasMore(false);
        }
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    }

    fetchData();
  }, [page]);

  return {
    loading,
    videos,
    error,
    hasMore,
  };
}
