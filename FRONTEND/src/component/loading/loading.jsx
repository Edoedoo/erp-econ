
import "./loading.css"

export default function Loading({ message= "" }) {
  return (
    <div className="loading-container">
      <h2 className="loading-title">
        Loading<span className="dots"></span>
      </h2>
      <p className="loading-sub">{message}</p>

      {/* Dots animation */}
      <div className="loading-dots"></div>

    </div>
  );
}