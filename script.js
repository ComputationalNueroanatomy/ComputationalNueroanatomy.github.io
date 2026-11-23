const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
toggle.hidden = false;
const mobile = window.matchMedia('(max-width: 1100px)');
function resetNavigation() {
  nav.dataset.collapsed = String(mobile.matches);
  toggle.setAttribute('aria-expanded', String(!mobile.matches));
}
resetNavigation();
mobile.addEventListener('change', resetNavigation);
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  nav.dataset.collapsed = String(expanded);
});
nav.addEventListener('click', event => {
  if (event.target.closest('a') && mobile.matches) resetNavigation();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobile.matches && toggle.getAttribute('aria-expanded') === 'true') {
    resetNavigation(); toggle.focus();
  }
});
// Preserve bookmarks from the former single-page website.
const legacySections = {research:'research.html',publications:'publications.html','all-publications':'publications.html',resources:'resources.html',people:'people.html',news:'news.html',join:'contact.html#join',contact:'contact.html'};
if ((location.pathname.endsWith('/') || location.pathname.endsWith('/index.html')) && legacySections[location.hash.slice(1)]) location.replace(legacySections[location.hash.slice(1)]);
