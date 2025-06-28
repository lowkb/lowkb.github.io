import { Layout } from '@/layouts/Layout.jsx';
import { Profile } from '@/components/Profile.jsx';
import '@style/style.css';

const links = [
  { href: 'https://github.com/yourname', label: 'GitHub' },
  { href: 'https://twitter.com/yourname', label: 'Twitter' },
  { href: 'https://linkedin.com/in/yourname', label: 'LinkedIn' },
];

export default function Main() {
  return (
    <Layout>
      <Profile
        bannerUrl="/assets/banner.jpg"
        avatarUrl="/assets/avatar.png"
        name="low_kb"
        bio="Full-stack developer passionate about clean code, open source, and building performant web apps."
        links={links}
      />
    </Layout>
  );
}
