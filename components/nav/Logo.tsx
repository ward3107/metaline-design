import { Link } from 'react-router-dom';

interface LogoProps {
  companyName: string;
  scrolled: boolean;
  spaceClass: string;
  onClick: () => void;
}

export const Logo = ({ companyName, scrolled, spaceClass, onClick }: LogoProps) => {
  return (
    <Link
      to="/"
      className={`flex items-center space-x-2 ${spaceClass}`}
      onClick={onClick}
    >
      <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
        <span className="text-white font-bold text-xl">A</span>
      </div>
      <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-gray-900 dark:text-white' : 'text-gray-900 lg:text-white'}`}>
        {companyName}
      </span>
    </Link>
  );
};
