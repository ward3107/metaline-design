import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  path: string;
  label: string;
  scrolled: boolean;
  onClick?: () => void;
  variant?: 'desktop' | 'mobile';
}

export const NavLink = ({ path, label, scrolled, onClick, variant = 'desktop' }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  if (variant === 'mobile') {
    return (
      <Link
        to={path}
        onClick={onClick}
        className={`block px-3 py-4 text-base font-medium border-b border-gray-50 dark:border-slate-700 ${
          isActive
            ? 'text-accent bg-gray-50 dark:bg-slate-700/50'
            : 'text-gray-600 dark:text-gray-300 hover:text-accent hover:bg-gray-50 dark:hover:bg-slate-700'
        }`}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      to={path}
      className={`text-lg font-medium transition-colors duration-200 ${
        isActive
          ? 'text-accent'
          : 'text-ink-800 dark:text-ink-300 hover:text-accent'
      }`}
    >
      {label}
    </Link>
  );
};
