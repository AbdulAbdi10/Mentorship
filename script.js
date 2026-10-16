// Add your second Google Form URL below when it is ready.
const SITE_CONFIG = Object.freeze({
  registrationFormUrl: 'https://forms.gle/RZhTbx8Ypzv8YTvu8',
  contactFormUrl: ''
});

function isSafeFormUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' &&
      (url.hostname === 'forms.gle' || url.hostname === 'docs.google.com');
  } catch { return false; }
}

if (isSafeFormUrl(SITE_CONFIG.registrationFormUrl)) {
  document.querySelectorAll('.registration').forEach(link => {
    link.href = SITE_CONFIG.registrationFormUrl;
  });
}
if (isSafeFormUrl(SITE_CONFIG.contactFormUrl)) {
  const contactLink = document.querySelector('#contact-link');
  contactLink.href = SITE_CONFIG.contactFormUrl;
  contactLink.hidden = false;
  document.querySelector('#contact-pending').hidden = true;
}

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#nav-links');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav')) closeMenu();
});
document.querySelector('#year').textContent = new Date().getFullYear();
