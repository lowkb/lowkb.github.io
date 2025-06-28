export function Avatar({ url }) {
  return (
    <div className="avatar-wrapper">
      <div
        className="avatar"
        style={{ backgroundImage: `url(${url})` }}
        role="img"
        aria-label="User avatar"
      />
    </div>
  );
}
