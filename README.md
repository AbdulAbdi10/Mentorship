# Mentorship

A responsive, accessible landing page for students and professional mentors. Built with plain HTML, CSS, and JavaScript. No build step or backend required.

## Preview
Open `index.html` in your browser. The optional Google Fonts require internet access; system fonts provide a fallback.

## Publish on GitHub Pages
1. Create a GitHub repository (for example, `mentorship`).
2. Upload all files from this folder to the repository root. Make sure `index.html`, `styles.css`, `script.js`, and `favicon.svg` are directly in the root, not inside another folder.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select **main** and **/ (root)**, then click **Save**.
6. When deployment completes, GitHub displays your website URL. It will typically look like `https://YOUR-USERNAME.github.io/mentorship/`.

All local links are relative, so project sites and custom domains work without changes.

## Configure the Google Forms
Edit `SITE_CONFIG` at the top of `script.js`.
- `registrationFormUrl` is already set to the supplied registration form. Student and mentor buttons open this same form. They do not automatically select a role within Google Forms; add a role question in your form if needed.
- `contactFormUrl` is currently blank because a second URL was not supplied. Paste your contact Google Form URL between the quotes. The contact button will then appear automatically, replacing “Contact form coming soon.”

The code accepts HTTPS links on `forms.gle` or `docs.google.com`.

## Before sharing
- Verify the supplied registration form opens and accepts responses for visitors without your account.
- Add your contact form URL.
- Confirm your registration form includes appropriate privacy, consent, and youth participation instructions for your program.
- Adjust program details as needed. No scheduling, match guarantees, fees, testimonials, or partner claims have been invented.

## Included interactions
- Accessible mobile navigation with expanded state, Escape handling, and automatic close after navigation.
- Native expandable FAQs, usable with keyboard and without JavaScript.
- Registration links open Google Forms in a new tab.
- Optional contact form link and current copyright year.
- Reduced-motion support and visible keyboard focus.

No registration information is collected or stored by this static site. Forms are handled separately by Google Forms. No analytics or email delivery is included.
