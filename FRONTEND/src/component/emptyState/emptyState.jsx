
import "./emptyState.css";

export default function EmptyState({ title = "kosong"}) {
  return (
    <div className="es-container">
      <h2 className="es-title">{title}</h2>

    </div>
  );
}