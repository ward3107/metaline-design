/**
 * Accessibility Widget
 * Complies with Israel IS 5568 and WCAG 2.0 AA
 *
 * Usage:
 *   <link rel="stylesheet" href="accessibility-widget.css">
 *   <script src="accessibility-widget.js" defer></script>
 *
 * Features:
 *   1. Font Size Control (50%-200%)
 *   2. High Contrast Mode
 *   3. Grayscale Mode
 *   4. Underline Links
 *   5. Readable Font
 *   6. Letter Spacing
 *   7. Line Height
 *   8. Pause Animations
 *   9. Highlight on Hover/Focus
 *   10. Reset All
 */
(function() {
  'use strict';

  // ============================================
  // STATE MANAGEMENT
  // ============================================
  const STORAGE_KEY = 'a11ySettings';
  const DISMISS_KEY = 'a11yDismissed';

  // Default state
  const defaultState = {
    fontPercent: 100,
    contrast: false,
    grayscale: false,
    links: false,
    font: false,
    spacing: false,
    lineHeight: false,
    noAnim: false,
    highlight: false
  };

  // Current state (source of truth)
  let state = { ...defaultState };

  // Panel visibility
  let isPanelOpen = false;

  // Focusable elements in panel for focus trap
  let focusableElements = [];

  // ============================================
  // UTILITY FUNCTIONS
  // ============================================

  /**
   * Convert RGB to Hex color
   */
  function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
      const hex = Math.round(x).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
  }

  /**
   * Convert any color to Hex
   */
  function colorToHex(color) {
    if (!color || color === 'transparent' || color === 'rgba(0, 0, 0, 0)') {
      return null;
    }

    // Already hex
    if (color.startsWith('#')) {
      return color.length === 4
        ? '#' + color[1] + color[1] + color[2] + color[2] + color[3] + color[3]
        : color;
    }

    // RGB/RGBA format
    const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (rgbMatch) {
      return rgbToHex(parseInt(rgbMatch[1]), parseInt(rgbMatch[2]), parseInt(rgbMatch[3]));
    }

    return null;
  }

  /**
   * Calculate relative luminance
   */
  function getLuminance(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return 0;

    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(c => {
      c /= 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  /**
   * Convert hex to RGB
   */
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  /**
   * Calculate saturation from RGB
   */
  function getSaturation(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return 0;

    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;

    if (max === min) return 0;

    const d = max - min;
    return l > 0.5 ? d / (2 - max - min) : d / (max + min);
  }

  /**
   * Darken a hex color by percentage
   */
  function darkenColor(hex, percent) {
    const rgb = hexToRgb(hex);
    if (!rgb) return hex;

    const factor = 1 - (percent / 100);
    return rgbToHex(
      Math.round(rgb.r * factor),
      Math.round(rgb.g * factor),
      Math.round(rgb.b * factor)
    );
  }

  /**
   * Extract RGB values from hex for CSS variable
   */
  function hexToRgbValues(hex) {
    const rgb = hexToRgb(hex);
    return rgb ? `${rgb.r}, ${rgb.g}, ${rgb.b}` : '37, 99, 235';
  }

  // ============================================
  // BRAND COLOR AUTO-DETECTION
  // ============================================
  function detectBrandColor() {
    // Selectors to scan in order
    const selectors = [
      'button:not([class*="a11y"]):not([id*="a11y"])',
      'a:not([class*="a11y"])',
      'header',
      'nav',
      '.btn',
      '[class*="btn"]',
      '[class*="button"]',
      '[class*="primary"]',
      '[class*="brand"]',
      'h1',
      'h2'
    ];

    for (const selector of selectors) {
      try {
        const elements = document.querySelectorAll(selector);
        for (const el of elements) {
          // Skip widget elements
          if (el.id && el.id.startsWith('a11y')) continue;
          if (el.closest('#a11y-panel, #a11y-trigger')) continue;

          const style = getComputedStyle(el);

          // Check background color first
          const bgColor = colorToHex(style.backgroundColor);
          if (bgColor && isUsableColor(bgColor)) {
            return bgColor;
          }

          // Then check text color
          const textColor = colorToHex(style.color);
          if (textColor && isUsableColor(textColor)) {
            return textColor;
          }
        }
      } catch (e) {
        // Continue to next selector on error
      }
    }

    // Fallback color
    return '#2563EB';
  }

  /**
   * Check if a color is usable (not too dark, light, or grey)
   */
  function isUsableColor(hex) {
    const luminance = getLuminance(hex);
    const saturation = getSaturation(hex);

    // Skip near-black (lightness < 0.1)
    if (luminance < 0.1) return false;

    // Skip near-white (lightness > 0.92)
    if (luminance > 0.92) return false;

    // Skip near-grey (saturation < 0.25)
    if (saturation < 0.25) return false;

    return true;
  }

  /**
   * Apply brand color as CSS variables
   */
  function applyBrandColor(color) {
    const darkColor = darkenColor(color, 25);
    const rgbValues = hexToRgbValues(color);

    document.documentElement.style.setProperty('--a11y-brand', color);
    document.documentElement.style.setProperty('--a11y-brand-dark', darkColor);
    document.documentElement.style.setProperty('--a11y-brand-rgb', rgbValues);
  }

  // ============================================
  // STATE PERSISTENCE
  // ============================================
  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Merge with defaults to handle missing keys
        state = { ...defaultState, ...parsed };
      }
    } catch (e) {
      console.warn('Failed to load accessibility settings:', e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Failed to save accessibility settings:', e);
    }
  }

  // ============================================
  // ANNOUNCEMENTS (ARIA Live Region)
  // ============================================
  function announce(message) {
    const liveRegion = document.getElementById('a11y-live');
    if (liveRegion) {
      // Clear and re-set to trigger announcement
      liveRegion.textContent = '';
      setTimeout(() => {
        liveRegion.textContent = message;
      }, 50);
    }
  }

  // ============================================
  // FEATURE IMPLEMENTATIONS
  // ============================================

  /**
   * FEATURE 1: Font Size Control
   */
  function applyFontSize(percent) {
    const actualPx = (percent / 100) * 16;
    document.documentElement.style.setProperty('--base-font-size', actualPx + 'px');
  }

  function updateFontSizeUI() {
    const valueEl = document.getElementById('a11y-font-value');
    const decreaseBtn = document.getElementById('a11y-font-decrease');
    const increaseBtn = document.getElementById('a11y-font-increase');

    if (valueEl) valueEl.textContent = state.fontPercent + '%';
    if (decreaseBtn) decreaseBtn.disabled = state.fontPercent <= 50;
    if (increaseBtn) increaseBtn.disabled = state.fontPercent >= 200;
  }

  function decreaseFontSize() {
    if (state.fontPercent > 50) {
      state.fontPercent = Math.max(50, state.fontPercent - 10);
      applyFontSize(state.fontPercent);
      updateFontSizeUI();
      saveState();
      announce('Text size set to ' + state.fontPercent + ' percent');
    }
  }

  function increaseFontSize() {
    if (state.fontPercent < 200) {
      state.fontPercent = Math.min(200, state.fontPercent + 10);
      applyFontSize(state.fontPercent);
      updateFontSizeUI();
      saveState();
      announce('Text size set to ' + state.fontPercent + ' percent');
    }
  }

  /**
   * FEATURE 2: High Contrast
   */
  function applyContrast(enabled) {
    if (enabled) {
      document.body.classList.add('a11y-contrast');
    } else {
      document.body.classList.remove('a11y-contrast');
    }
  }

  /**
   * FEATURE 3: Grayscale
   */
  function applyGrayscale(enabled) {
    if (enabled) {
      document.documentElement.classList.add('a11y-gray');
    } else {
      document.documentElement.classList.remove('a11y-gray');
    }
  }

  /**
   * FEATURE 4: Underline Links
   */
  function applyLinks(enabled) {
    if (enabled) {
      document.body.classList.add('a11y-links');
    } else {
      document.body.classList.remove('a11y-links');
    }
  }

  /**
   * FEATURE 5: Readable Font
   */
  function applyFont(enabled) {
    if (enabled) {
      document.body.classList.add('a11y-font');
    } else {
      document.body.classList.remove('a11y-font');
    }
  }

  /**
   * FEATURE 6: Letter Spacing
   */
  function applySpacing(enabled) {
    if (enabled) {
      document.body.classList.add('a11y-spacing');
    } else {
      document.body.classList.remove('a11y-spacing');
    }
  }

  /**
   * FEATURE 7: Line Height
   */
  function applyLineHeight(enabled) {
    if (enabled) {
      document.body.classList.add('a11y-lh');
    } else {
      document.body.classList.remove('a11y-lh');
    }
  }

  /**
   * FEATURE 8: Pause Animations
   */
  function applyNoAnimations(enabled) {
    const existingStyle = document.getElementById('a11y-no-anim');

    if (enabled && !existingStyle) {
      const style = document.createElement('style');
      style.id = 'a11y-no-anim';
      style.textContent = `
        html.a11y-no-anim *,
        html.a11y-no-anim *::before,
        html.a11y-no-anim *::after {
          animation-play-state: paused !important;
          transition-duration: 0.001ms !important;
        }
      `;
      document.head.appendChild(style);
      document.documentElement.classList.add('a11y-no-anim');
    } else if (!enabled && existingStyle) {
      existingStyle.remove();
      document.documentElement.classList.remove('a11y-no-anim');
    }
  }

  /**
   * FEATURE 9: Highlight on Hover/Focus
   */
  function applyHighlight(enabled) {
    if (enabled) {
      document.body.classList.add('a11y-highlight');
    } else {
      document.body.classList.remove('a11y-highlight');
    }
  }

  /**
   * FEATURE 10: Reset All
   */
  function resetAll() {
    // Reset state to defaults
    state = { ...defaultState };

    // Apply reset state
    applyState();

    // Clear localStorage
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}

    // Update all UI toggles
    updateAllToggles();

    announce('All accessibility settings have been reset');
  }

  /**
   * Apply all state to DOM
   */
  function applyState() {
    applyFontSize(state.fontPercent);
    applyContrast(state.contrast);
    applyGrayscale(state.grayscale);
    applyLinks(state.links);
    applyFont(state.font);
    applySpacing(state.spacing);
    applyLineHeight(state.lineHeight);
    applyNoAnimations(state.noAnim);
    applyHighlight(state.highlight);
  }

  /**
   * Update all toggle UI elements to match state
   */
  function updateAllToggles() {
    const toggles = {
      'a11y-toggle-contrast': state.contrast,
      'a11y-toggle-grayscale': state.grayscale,
      'a11y-toggle-links': state.links,
      'a11y-toggle-font': state.font,
      'a11y-toggle-spacing': state.spacing,
      'a11y-toggle-lineheight': state.lineHeight,
      'a11y-toggle-noanim': state.noAnim,
      'a11y-toggle-highlight': state.highlight
    };

    for (const [id, checked] of Object.entries(toggles)) {
      const input = document.getElementById(id);
      if (input) {
        input.checked = checked;
        input.setAttribute('aria-pressed', checked.toString());
      }
    }

    updateFontSizeUI();
  }

  // ============================================
  // PANEL MANAGEMENT
  // ============================================

  /**
   * Open the accessibility panel
   */
  function openPanel() {
    const panel = document.getElementById('a11y-panel');
    const trigger = document.getElementById('a11y-trigger');

    if (panel && trigger) {
      isPanelOpen = true;
      panel.setAttribute('data-open', 'true');
      trigger.setAttribute('data-open', 'true');
      trigger.setAttribute('aria-expanded', 'true');

      // Get focusable elements for focus trap
      updateFocusableElements();

      // Focus first element
      setTimeout(() => {
        const firstFocusable = panel.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (firstFocusable) {
          firstFocusable.focus();
        }
      }, 100);
    }
  }

  /**
   * Close the accessibility panel
   */
  function closePanel() {
    const panel = document.getElementById('a11y-panel');
    const trigger = document.getElementById('a11y-trigger');

    if (panel && trigger) {
      isPanelOpen = false;
      panel.setAttribute('data-open', 'false');
      trigger.setAttribute('data-open', 'false');
      trigger.setAttribute('aria-expanded', 'false');

      // Return focus to trigger
      trigger.focus();
    }
  }

  /**
   * Toggle panel visibility
   */
  function togglePanel() {
    if (isPanelOpen) {
      closePanel();
    } else {
      openPanel();
    }
  }

  /**
   * Dismiss widget for this session
   */
  function dismissWidget() {
    try {
      sessionStorage.setItem(DISMISS_KEY, '1');
    } catch (e) {}

    closePanel();

    const trigger = document.getElementById('a11y-trigger');
    const panel = document.getElementById('a11y-panel');
    const liveRegion = document.getElementById('a11y-live');

    if (trigger) trigger.remove();
    if (panel) panel.remove();
    if (liveRegion) liveRegion.remove();
  }

  /**
   * Update list of focusable elements in panel
   */
  function updateFocusableElements() {
    const panel = document.getElementById('a11y-panel');
    if (panel) {
      focusableElements = Array.from(
        panel.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
      ).filter(el => !el.disabled && el.offsetParent !== null);
    }
  }

  /**
   * Handle focus trap in panel
   */
  function handleFocusTrap(e) {
    if (!isPanelOpen || e.key !== 'Tab') return;

    updateFocusableElements();

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      // Shift+Tab: if on first, go to last
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab: if on last, go to first
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }

  /**
   * Handle keyboard events
   */
  function handleKeydown(e) {
    // Escape to close panel
    if (e.key === 'Escape' && isPanelOpen) {
      closePanel();
      return;
    }

    // Focus trap
    handleFocusTrap(e);
  }

  /**
   * Handle click outside panel
   */
  function handleOutsideClick(e) {
    if (!isPanelOpen) return;

    const panel = document.getElementById('a11y-panel');
    const trigger = document.getElementById('a11y-trigger');

    if (panel && trigger) {
      if (!panel.contains(e.target) && !trigger.contains(e.target)) {
        closePanel();
      }
    }
  }

  // ============================================
  // WIDGET HTML TEMPLATE
  // ============================================
  function createWidgetHTML() {
    return `
      <!-- Accessibility Trigger Button -->
      <button
        id="a11y-trigger"
        type="button"
        role="button"
        aria-label="Open accessibility tools"
        aria-expanded="false"
        aria-controls="a11y-panel"
        data-open="false"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28" aria-hidden="true" focusable="false">
          <circle cx="12" cy="3" r="2"/>
          <path d="M19 13h-4l-2-5H9a2 2 0 0 0-2 2v1h2v-1h2.5l2 5H17l1 4h2l-1-5zM9 17.5A3.5 3.5 0 1 1 5.5 14H7v-2H5.5A5.5 5.5 0 1 0 11 17.5H9z"/>
        </svg>
      </button>

      <!-- Accessibility Panel -->
      <div
        id="a11y-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="a11y-panel-title"
        data-open="false"
      >
        <!-- Panel Header -->
        <div id="a11y-panel-header">
          <h2 id="a11y-panel-title">כלי נגישות / Accessibility</h2>
          <button
            id="a11y-close"
            type="button"
            aria-label="Close accessibility panel"
          >
            ×
          </button>
        </div>

        <!-- Panel Content -->
        <div id="a11y-panel-content">
          <!-- FEATURE 1: Font Size -->
          <div class="a11y-feature">
            <span class="a11y-feature-label">Text Size / גודל טקסט</span>
            <div class="a11y-font-control">
              <button
                id="a11y-font-decrease"
                type="button"
                class="a11y-font-btn"
                aria-label="Decrease font size"
              >
                A−
              </button>
              <span id="a11y-font-value" class="a11y-font-value">100%</span>
              <button
                id="a11y-font-increase"
                type="button"
                class="a11y-font-btn"
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>
          </div>

          <!-- FEATURE 2: High Contrast -->
          <div class="a11y-feature">
            <span class="a11y-feature-label">High Contrast / ניגודיות גבוהה</span>
            <label class="a11y-toggle">
              <input
                type="checkbox"
                id="a11y-toggle-contrast"
                aria-label="Toggle high contrast mode"
                aria-pressed="false"
              >
              <span class="a11y-toggle-slider"></span>
            </label>
          </div>

          <!-- FEATURE 3: Grayscale -->
          <div class="a11y-feature">
            <span class="a11y-feature-label">Grayscale / גווני אפור</span>
            <label class="a11y-toggle">
              <input
                type="checkbox"
                id="a11y-toggle-grayscale"
                aria-label="Toggle grayscale mode"
                aria-pressed="false"
              >
              <span class="a11y-toggle-slider"></span>
            </label>
          </div>

          <!-- FEATURE 4: Underline Links -->
          <div class="a11y-feature">
            <span class="a11y-feature-label">Underline Links / קו תחתות לקישורים</span>
            <label class="a11y-toggle">
              <input
                type="checkbox"
                id="a11y-toggle-links"
                aria-label="Toggle underline links"
                aria-pressed="false"
              >
              <span class="a11y-toggle-slider"></span>
            </label>
          </div>

          <!-- FEATURE 5: Readable Font -->
          <div class="a11y-feature">
            <span class="a11y-feature-label">Readable Font / גופן קריא</span>
            <label class="a11y-toggle">
              <input
                type="checkbox"
                id="a11y-toggle-font"
                aria-label="Toggle readable font"
                aria-pressed="false"
              >
              <span class="a11y-toggle-slider"></span>
            </label>
          </div>

          <!-- FEATURE 6: Letter Spacing -->
          <div class="a11y-feature">
            <span class="a11y-feature-label">Letter Spacing / מרווח אותיות</span>
            <label class="a11y-toggle">
              <input
                type="checkbox"
                id="a11y-toggle-spacing"
                aria-label="Toggle letter spacing"
                aria-pressed="false"
              >
              <span class="a11y-toggle-slider"></span>
            </label>
          </div>

          <!-- FEATURE 7: Line Height -->
          <div class="a11y-feature">
            <span class="a11y-feature-label">Line Height / גובה שורה</span>
            <label class="a11y-toggle">
              <input
                type="checkbox"
                id="a11y-toggle-lineheight"
                aria-label="Toggle increased line height"
                aria-pressed="false"
              >
              <span class="a11y-toggle-slider"></span>
            </label>
          </div>

          <!-- FEATURE 8: Pause Animations -->
          <div class="a11y-feature">
            <span class="a11y-feature-label">Pause Animations / השהיית אנימציות</span>
            <label class="a11y-toggle">
              <input
                type="checkbox"
                id="a11y-toggle-noanim"
                aria-label="Toggle pause animations"
                aria-pressed="false"
              >
              <span class="a11y-toggle-slider"></span>
            </label>
          </div>

          <!-- FEATURE 9: Highlight on Hover/Focus -->
          <div class="a11y-feature">
            <span class="a11y-feature-label">Highlight Focus / הדגשת מיקוד</span>
            <label class="a11y-toggle">
              <input
                type="checkbox"
                id="a11y-toggle-highlight"
                aria-label="Toggle highlight on hover and focus"
                aria-pressed="false"
              >
              <span class="a11y-toggle-slider"></span>
            </label>
          </div>

          <!-- FEATURE 10: Reset All -->
          <button
            id="a11y-reset"
            type="button"
            aria-label="Reset all accessibility settings"
          >
            Reset All / איפוס הכל
          </button>
        </div>

        <!-- Panel Footer -->
        <div id="a11y-panel-footer">
          <a
            id="a11y-statement-link"
            href="/accessibility-statement"
            target="_blank"
            rel="noopener noreferrer"
          >
            Accessibility Statement / הצהרת נגישות
          </a>
          <button
            id="a11y-dismiss"
            type="button"
          >
            × Hide widget for this session
          </button>
        </div>
      </div>

      <!-- ARIA Live Region -->
      <div
        id="a11y-live"
        class="a11y-sr-only"
        aria-live="polite"
        aria-atomic="true"
      ></div>
    `;
  }

  // ============================================
  // EVENT BINDINGS
  // ============================================
  function bindEvents() {
    // Trigger button
    const trigger = document.getElementById('a11y-trigger');
    if (trigger) {
      trigger.addEventListener('click', togglePanel);
      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          togglePanel();
        }
      });
    }

    // Close button
    const closeBtn = document.getElementById('a11y-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closePanel);
    }

    // Dismiss button
    const dismissBtn = document.getElementById('a11y-dismiss');
    if (dismissBtn) {
      dismissBtn.addEventListener('click', dismissWidget);
    }

    // Font size buttons
    const decreaseBtn = document.getElementById('a11y-font-decrease');
    const increaseBtn = document.getElementById('a11y-font-increase');
    if (decreaseBtn) decreaseBtn.addEventListener('click', decreaseFontSize);
    if (increaseBtn) increaseBtn.addEventListener('click', increaseFontSize);

    // Reset button
    const resetBtn = document.getElementById('a11y-reset');
    if (resetBtn) resetBtn.addEventListener('click', resetAll);

    // Toggle switches
    const toggleMap = {
      'a11y-toggle-contrast': {
        stateKey: 'contrast',
        applyFn: applyContrast,
        announceOn: 'High contrast mode enabled',
        announceOff: 'High contrast mode disabled'
      },
      'a11y-toggle-grayscale': {
        stateKey: 'grayscale',
        applyFn: applyGrayscale,
        announceOn: 'Grayscale mode enabled',
        announceOff: 'Grayscale mode disabled'
      },
      'a11y-toggle-links': {
        stateKey: 'links',
        applyFn: applyLinks,
        announceOn: 'Underline links enabled',
        announceOff: 'Underline links disabled'
      },
      'a11y-toggle-font': {
        stateKey: 'font',
        applyFn: applyFont,
        announceOn: 'Readable font enabled',
        announceOff: 'Readable font disabled'
      },
      'a11y-toggle-spacing': {
        stateKey: 'spacing',
        applyFn: applySpacing,
        announceOn: 'Letter spacing enabled',
        announceOff: 'Letter spacing disabled'
      },
      'a11y-toggle-lineheight': {
        stateKey: 'lineHeight',
        applyFn: applyLineHeight,
        announceOn: 'Increased line height enabled',
        announceOff: 'Increased line height disabled'
      },
      'a11y-toggle-noanim': {
        stateKey: 'noAnim',
        applyFn: applyNoAnimations,
        announceOn: 'Pause animations enabled',
        announceOff: 'Pause animations disabled'
      },
      'a11y-toggle-highlight': {
        stateKey: 'highlight',
        applyFn: applyHighlight,
        announceOn: 'Highlight on hover and focus enabled',
        announceOff: 'Highlight on hover and focus disabled'
      }
    };

    for (const [id, config] of Object.entries(toggleMap)) {
      const toggle = document.getElementById(id);
      if (toggle) {
        toggle.addEventListener('change', function() {
          const enabled = this.checked;
          state[config.stateKey] = enabled;
          config.applyFn(enabled);
          this.setAttribute('aria-pressed', enabled.toString());
          saveState();
          announce(enabled ? config.announceOn : config.announceOff);
        });
      }
    }

    // Global keyboard events
    document.addEventListener('keydown', handleKeydown);

    // Click outside to close
    document.addEventListener('click', handleOutsideClick);
  }

  // ============================================
  // INITIALIZATION
  // ============================================
  function init() {
    // Check if dismissed this session
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === '1') {
        return; // Don't render widget
      }
    } catch (e) {}

    // Load saved state
    loadState();

    // Apply state before building HTML (prevent flash)
    applyState();

    // Detect and apply brand color
    const brandColor = detectBrandColor();
    applyBrandColor(brandColor);

    // Create widget HTML
    const container = document.createElement('div');
    container.id = 'a11y-widget-container';
    container.innerHTML = createWidgetHTML();
    document.body.appendChild(container);

    // Update UI to match state
    updateAllToggles();

    // Bind events
    bindEvents();

    // Re-apply state after HTML is built (ensure consistency)
    applyState();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
