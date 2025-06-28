import { Banner } from './Banner.jsx';
import { Avatar } from './Avatar.jsx';
import { Username } from './Username.jsx';
import { Bio } from './Bio.jsx';
import { Links } from './Links.jsx';

export function Profile({
  bannerUrl,
  avatarUrl,
  name,
  tag,
  bio,
  links,
}) {
  return (
    <section className="profile" role="region" aria-label={`${name} profile`}>
      <Banner bannerUrl={bannerUrl} />
      <div className="avatar-wrapper">
        <Avatar avatarUrl={avatarUrl} />
      </div>
      <Username name={name} />
      <Bio text={bio} />
      <Links links={links} />
    </section>
  );
}
