import { useState } from "react";
import "./ThemeCard.css";

export default function ThemeCard() {

  const [isDark, setIsDark] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  return (
    <div className={isDark ? "container dark" : "container"}>

      <h2>Theme Toggle</h2>

         <button onClick={() => setIsDark(!isDark)}>
          {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      <div className="card">
 <img
  src="https://media.istockphoto.com/id/171308173/photo/fresh-organic-strawberry.jpg?s=612x612&w=0&k=20&c=7-kCpdxULBQcpFj4rvGaLSJ9ZYZWj7KHIXhHo6M7Rus="
  alt="strawberry bush"
  style={{ width: "100%", borderRadius: "10px" }}
/>
       <div className="like-section">
  <svg
    onClick={() => {
      setLiked(true);
      setLikeCount(prev => prev + 1);
    }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="30"
    height="30"
    className={liked ? "heart liked" : "heart"}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
    2 6 4 4 6.5 4c1.74 0 3.41 1.01 
    4.22 2.09C11.09 5.01 12.76 4 
    14.5 4 17 4 19 6 19 8.5c0 
    3.78-3.4 6.86-8.55 11.54L12 21.35z" />
     </svg>

             <p>Likes: {likeCount}</p>
        </div>
      </div>

    </div>
  );
}


