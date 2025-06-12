export function scrollToAnchor(hash: string) {
  if (hash) {
    const element = document.getElementById(hash.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

export function handleAnchorClick(href: string) {
  const [path, hash] = href.split('#');
  if (hash && window.location.pathname === path) {
    // Same page, just scroll
    scrollToAnchor(hash);
  }
}