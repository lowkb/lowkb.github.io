export function Card({ name, status, action }) {
  return (
    <div class="card glass">
      <div class="info">
        <h3>{name}</h3>
        <span>{status}</span>
      </div>
      <button class="btn">{action}</button>
    </div>
  );
}
