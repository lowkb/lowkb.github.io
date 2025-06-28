export function Banner({ bannerUrl }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${bannerUrl})` }}
      role="img"
      aria-label="User banner"
    />
  );
}
