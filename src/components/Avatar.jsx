export function Avatar({ bannerUrl }) {
  return (
    <div className="avatar-wrapper">
      <div
        className="avatar"
        style={{ backgroundImage: `url(${bannerUrl})` }}
        role="img"
        aria-label="User avatar"
      />
    </div>
  );
}
