
import "./loading.css"

export default function Loading() {
  return (
    <div className="loading-container">
      <h2 className="loading-title">
        sebentar<span className="dots"></span>
      </h2>
      <p className="loading-sub">aku lagi siapin datanya</p>

      {/* Dots animation */}
      <div className="loading-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
  );
}