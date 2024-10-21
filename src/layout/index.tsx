import { ReactNode } from 'react';
import Navbar from './navbar';

interface AppShellLayoutProps {
  children: ReactNode;
}

const AppShellLayout = ({ children }: AppShellLayoutProps) => {
  return (
    <main>
      <header>
        <Navbar navLinks={NAV_LINKS} />
      </header>
      <div className="container margin-block-lg">{children}</div>
    </main>
  );
};

const NAV_LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export default AppShellLayout;
