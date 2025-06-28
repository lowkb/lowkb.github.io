export function Banner({ url }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${url})` }}
      role="img"
      aria-label="User banner"
    />
  );
}
