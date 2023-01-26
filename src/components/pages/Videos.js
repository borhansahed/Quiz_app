import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../../hooks/useVideoList";
import Video from "./Video";

const Videos = () => {
  const [page, setPage] = useState(1);
  const { loading, videos, error, hasMore } = useVideoList(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader="Loading..."
          next={() => setPage(page + 8)}
        >
          {videos.slice(8).map((video) => (
            <Link
              to={`/quiz/${video.youtubeID}`}
              key={video.youtubeID + (Math.random(videos.length * 100) % 100)}
            >
              <Video title={video.title} id={video.youtubeID} noq={video.noq} />
            </Link>
          ))}
        </InfiniteScroll>
      )}

      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error</div>}
      {loading && <div>Loading....</div>}
    </div>
  );
};

export default Videos;
