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
function revealPublications() {
  if (window.location.hash === '#all-publications') document.querySelector('#all-publications').open = true;
}
window.addEventListener('hashchange', revealPublications);
revealPublications();
