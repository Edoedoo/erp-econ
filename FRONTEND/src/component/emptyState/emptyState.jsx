import "./emptyState.css";

export default function EmptyState({
  title = "Belum ada data",
  description = "Data akan muncul di sini setelah kamu menambahkannya.",
  actionLabel = "Tambah Data",
  onAction
}) {
  return (
    <div className="es-container">

      {/* ROBOT SVG */}
      <div className="es-robot">
        <svg width="120" height="120" viewBox="0 0 200 200">
          
          {/* head */}
          <rect x="40" y="40" rx="20" ry="20" width="120" height="80"
            fill="var(--color-bg-card)"
            stroke="var(--color-border)"
          />

          {/* eyes (lebih “normal”, bukan sedih) */}
          <circle cx="85" cy="80" r="6" fill="var(--color-primary)" />
          <circle cx="115" cy="80" r="6" fill="var(--color-primary)" />

          {/* mouth (flat / neutral) */}
          <line x1="80" y1="100" x2="120" y2="100"
            stroke="var(--color-text-secondary)"
            strokeWidth="3"
          />

          {/* box icon (represent data kosong) */}
          <rect x="75" y="115" width="50" height="25"
            rx="4"
            fill="var(--color-primary-soft)"
            stroke="var(--color-border)"
          />

          {/* antenna */}
          <line x1="100" y1="40" x2="100" y2="20" stroke="var(--color-border)" />
          <circle cx="100" cy="18" r="4" fill="var(--color-accent)" />

        </svg>
      </div>

      {/* TEXT */}
      <h2 className="es-title">{title}</h2>
      <p className="es-desc">{description}</p>

      {/* ACTION */}
      {onAction && (
        <button className="es-btn" onClick={onAction}>
          {actionLabel}
        </button>
      )}

    </div>
  );
}