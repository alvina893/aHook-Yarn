import { useEffect, useState } from "react";

export const Card = ({ title }) => {
  const [count, setCount] = useState(0);

  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);

  return (
    <div className="card" onClick={() => setCount((count) => count + 1)}>
      <img
        src="/img/crochet-img.jpg"
        alt="PICTURE HERE PLEASE"
        className="text-secondary text-center justify-center rounded-lg"
      />
      <br />
      <h3>
        {title} <br /> {count ? count : null}
      </h3>
      <button onClick={() => setHasLiked((hasLiked) => !hasLiked)}>
        {hasLiked ? "♥️" : "🤍"}
      </button>
    </div>
  );
};
