import "./notfound.css";
export default function NotFound({ error, code, message }) {
  return (
    <div className="nf-container">
      <div className="glassBg">
        <h1 className="nf-title">
          {error}
        </h1>
        <h3 className="nf-subtitle">{code}</h3>
        <p className="nf-sub">{message}</p>
      </div>

    </div>
  );
}