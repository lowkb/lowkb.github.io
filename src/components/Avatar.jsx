export function Avatar({ avatarUrl }) {

  return (
    <div
      className="avatar"
      style={{ backgroundImage: `url(${avatarUrl})` }}
      role="img"
      aria-label="User avatar"
    />
  );
}
