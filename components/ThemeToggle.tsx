import React, { useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

type ThemeMode = 'light' | 'dark' | 'system';

/**
 * ThemeToggle Component
 *
 * Simple icon button that cycles through theme modes: Light → Dark → System → Light...
 *
 * Features:
 * - Shows current theme as icon (Sun, Moon, or Monitor)
 * - Single click to cycle to next theme
 * - Works on both desktop and mobile
 * - Keyboard accessible with Enter/Space
 *
 * @example
 * <ThemeToggle />
 */
export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { themeMode, setThemeMode, resolvedTheme } = useTheme();

  // Cycle through themes: light → dark → system → light...
  const cycleTheme = () => {
    const modes: ThemeMode[] = ['light', 'dark', 'system'];
    const currentIndex = modes.indexOf(themeMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setThemeMode(modes[nextIndex]);
  };

  // Get icon based on current mode
  const getIcon = () => {
    switch (themeMode) {
      case 'light':
        return <Sun size={20} />;
      case 'dark':
        return <Moon size={20} />;
      case 'system':
        return <Monitor size={20} />;
    }
  };

  // Get tooltip text
  const getTooltip = () => {
    const systemHint = themeMode === 'system' ? ` (${resolvedTheme})` : '';
    return `${themeMode.charAt(0).toUpperCase() + themeMode.slice(1)}${systemHint}`;
  };

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label={`Theme mode: ${getTooltip()}. Click to cycle through themes.`}
      className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-gray-700 dark:text-gray-300 ${className}`}
      title={getTooltip()}
    >
      {getIcon()}
    </button>
  );
};
