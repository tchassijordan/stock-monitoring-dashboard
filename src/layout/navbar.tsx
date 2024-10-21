import './navbar.scss';

interface INavbarProps {
  navLinks: INavbarLink[];
}

interface INavbarLink {
  label: string;
  href: string;
}

const Navbar = (props: INavbarProps) => {
  return (
    <nav>
      <div className="container navbar">
        <div className="nav-logo">
          <Logo />
          <span>Track Stocks</span>
        </div>
        <ul className="nav-list">
          {props.navLinks.map((link) => (
            <li key={link.href} className="nav-item">
              <a href={`#${link.href}`} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 10v3" />
    <path d="M6 6v11" />
    <path d="M10 3v18" />
    <path d="M14 8v7" />
    <path d="M18 5v13" />
    <path d="M22 10v3" />
  </svg>
);

export default Navbar;
