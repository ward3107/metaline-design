# Security Headers Implementation

This document describes the security headers implemented for this application and how to validate them.

## Implemented Headers

### 1. Strict-Transport-Security (HSTS)
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```
**Purpose:** Forces HTTPS connections for 1 year, including subdomains. Includes preload eligibility for browser HSTS lists.

**Security Benefit:** Prevents man-in-the-middle attacks and protocol downgrading.

---

### 2. X-Content-Type-Options
```
X-Content-Type-Options: nosniff
```
**Purpose:** Prevents MIME type sniffing by the browser.

**Security Benefit:** Prevents attackers from executing malicious scripts by disguising them as other content types.

---

### 3. Referrer-Policy
```
Referrer-Policy: strict-origin-when-cross-origin
```
**Purpose:** Controls how much referrer information is sent when navigating away.

**Security Benefit:** Prevents leaking sensitive URLs or path information to external sites.

---

### 4. Permissions-Policy
```
Permissions-Policy: camera=(), microphone=(), geolocation=()
```
**Purpose:** Blocks access to camera, microphone, and geolocation APIs.

**Security Benefit:** Prevents malicious scripts from accessing sensitive device features without user consent.

---

### 5. X-Frame-Options
```
X-Frame-Options: DENY
```
**Purpose:** Prevents clickjacking by blocking iframe embedding.

**Security Benefit:** Prevents your site from being embedded in malicious iframes.

---

### 6. X-XSS-Protection
```
X-XSS-Protection: 1; mode=block
```
**Purpose:** Enables browser's built-in XSS filter.

**Security Benefit:** Additional layer of protection against cross-site scripting attacks.

---

### 7. Content-Security-Policy (Report-Only Mode)
```
Content-Security-Policy-Report-Only: default-src 'self'; ...
```
**Purpose:** Currently in **Report-Only mode** - monitors violations without blocking them.

**Current Policy:**
- `default-src 'self'` - Only load resources from same origin
- `script-src` - Allow scripts from self and inline (for Tailwind CDN, React development)
- `style-src` - Allow styles from self and inline (for Tailwind)
- `img-src` - Allow images from self, data URLs, and external image sources
- `font-src` - Allow fonts from self and data URLs
- `connect-src` - Allow API calls to self and Waze
- `frame-src` - Allow Google Maps embeds
- `report-uri` - Send violation reports to endpoint

**Important:** This is in **Report-Only mode** for safe deployment. It logs violations but doesn't block anything.

---

## How to Validate

### Method 1: Browser DevTools (Local Development)

1. Open your application in Chrome/Edge
2. Open DevTools (`F12` or `Ctrl+Shift+I`)
3. Go to **Network** tab
4. Refresh the page
5. Click on the main document request (usually the first one)
6. Go to **Headers** section
7. Look under **Response Headers**

**What to look for:**
```
strict-transport-security: max-age=31536000; includeSubDomains; preload
x-content-type-options: nosniff
referrer-policy: strict-origin-when-cross-origin
permissions-policy: camera=(), microphone=(), geolocation=()
x-frame-options: DENY
x-xss-protection: 1; mode=block
content-security-policy-report-only: default-src 'self'...
```

---

### Method 2: Online Security Scanners

#### [Security Headers (https://securityheaders.com)](https://securityheaders.com)

1. Go to https://securityheaders.com
2. Enter your deployed URL
3. Click "Scan"
4. Review the report

**Expected Grades:**
- HSTS: A
- X-Content-Type-Options: A
- X-Frame-Options: A
- Referrer-Policy: A
- Permissions-Policy: A
- CSP: Report Only (will show as informational, not blocking)

---

### Method 3: curl Command

```bash
curl -I https://your-deployed-url.com
```

**Expected Output:**
```http
HTTP/2 200
strict-transport-security: max-age=31536000; includeSubDomains; preload
x-content-type-options: nosniff
referrer-policy: strict-origin-when-cross-origin
permissions-policy: camera=(), microphone=(), geolocation=()
x-frame-options: DENY
x-xss-protection: 1; mode=block
content-security-policy-report-only: default-src 'self'...
```

---

## Tightening CSP (Future Steps)

Once you've monitored CSP-Report-Only for 1-2 weeks and fixed any violations:

### Step 1: Move to Enforce Mode

Change `Content-Security-Policy-Report-Only` to `Content-Security-Policy`:

```json
{
  "key": "Content-Security-Policy",
  "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; ..."
}
```

### Step 2: Remove 'unsafe-inline' and 'unsafe-eval'

To remove `unsafe-inline` and `unsafe-eval`:
1. Use nonce or hash-based CSP
2. Move inline scripts to separate `.js` files
3. Remove `eval()` usage from your code

**Example with nonce:**
```jsx
// In your build setup
const nonce = crypto.randomBytes(16).toString('base64');

// In vercel.json (requires server-side nonce generation)
"script-src 'self' 'nonce-${nonce}'"
```

### Step 3: Add Report-Only Endpoint

To properly collect CSP reports, create a `/api/csp-violation-report-endpoint` route that logs violations to your analytics service.

---

## Deployment Checklist

- [ ] Deploy to Vercel preview environment
- [ ] Validate headers using DevTools
- [ ] Run securityheaders.com scan
- [ ] Monitor CSP-Report-Only logs for 1-2 weeks
- [ ] Fix any reported violations
- [ ] Move to CSP enforce mode
- [ ] Re-test with securityheaders.com
- [ ] Monitor for new violations in production

---

## References

- [OWASP Security Headers](https://owasp.org/www-project-secure-headers/)
- [MDN HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
- [Report URI](https://report-uri.com/)
