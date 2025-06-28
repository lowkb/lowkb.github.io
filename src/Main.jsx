import { Layout } from '@/layouts/Layout.jsx';
import { Profile } from '@/components/Profile.jsx';
import '@style/style.css';

const links = [
  { href: 'https://github.com/lowkb', label: 'GitHub' },
  { href: 'https://discord.com/users/1321818069949091862', label: 'Discord' },
  { href: 'instagram', label: 'Instagram' },
];

export default function Main() {
  return (
    <Layout>
      <Profile
        bannerUrl="/src/assets/img/banner.gif"
        avatarUrl="/src/assets/img/avatar.png"
        name="low_kb"
        bio="Full-stack developer passionate about clean code, open source, and building performant web apps."
        links={links}
      />
    </Layout>
  );
}
