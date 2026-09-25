import { Phone } from 'lucide-react';

interface CallButtonProps {
  label: string;
  phoneNumber: string;
  variant?: 'desktop' | 'mobile';
}

export const CallButton = ({ label, phoneNumber, variant = 'desktop' }: CallButtonProps) => {
  const baseClasses = 'bg-accent hover:bg-accent-hover text-white font-medium transition-colors flex items-center gap-2';

  if (variant === 'mobile') {
    return (
      <a
        href={`tel:${phoneNumber}`}
        className={`w-full px-6 py-3 rounded-lg justify-center ${baseClasses}`}
      >
        <Phone size={20} />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      href={`tel:${phoneNumber}`}
      className={`px-6 py-2 rounded-full ${baseClasses}`}
    >
      <Phone size={18} />
      <span>{label}</span>
    </a>
  );
};
