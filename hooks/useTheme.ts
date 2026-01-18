/**
 * useTheme Hook
 *
 * Re-exports the useTheme hook from ThemeContext for convenience.
 * This provides access to the full theme system API including:
 * - themeMode: 'light' | 'dark' | 'system'
 * - setThemeMode: Set specific theme mode
 * - resolvedTheme: The actual applied theme ('light' | 'dark')
 * - All accessibility settings
 *
 * @example
 * import { useTheme } from '../hooks/useTheme';
 *
 * function MyComponent() {
 *   const { themeMode, setThemeMode, resolvedTheme } = useTheme();
 *   return <div>Current: {resolvedTheme}</div>;
 * }
 */

// Re-export useTheme from ThemeContext
export { useTheme } from '../context/ThemeContext';
