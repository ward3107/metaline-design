import { RefObject } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from './NavLink';
import { CallButton } from './CallButton';

interface NavItem {
  path: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavItem[];
  onClose: () => void;
  menuRef: RefObject<HTMLDivElement | null>;
  callNowLabel: string;
  phoneNumber: string;
}

export const MobileMenu = ({
  isOpen,
  navItems,
  onClose,
  menuRef,
  callNowLabel,
  phoneNumber,
}: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white dark:bg-slate-800 border-t border-gray-100 dark:border-slate-700 shadow-xl overflow-hidden"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((link) => (
              <NavLink
                key={link.path}
                path={link.path}
                label={link.label}
                scrolled={true}
                onClick={onClose}
                variant="mobile"
              />
            ))}
            <div className="pt-4">
              <CallButton
                label={callNowLabel}
                phoneNumber={phoneNumber}
                variant="mobile"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
