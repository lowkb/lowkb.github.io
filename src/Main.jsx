import { Layout } from '@/layouts/Layout.jsx';
import { Profile } from '@/components/Profile.jsx';
import banner from '@/assets/img/banner.gif';
import avatar from '@/assets/img/avatar.png';
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
        bannerUrl={banner}
        avatarUrl={avatar}
        name="low_kb"
        bio="Full-stack developer passionate about clean code, open source, and building performant web apps."
        links={links}
      />
    </Layout>
  );
}
