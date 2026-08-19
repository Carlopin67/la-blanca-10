// ============================================================
// ICONOS PROPIOS — controles e interfaz
// Todo vectorial, ningún emoji ni carácter de teclado.
// ============================================================

function iconSVG(paths, viewBox = '0 0 24 24') {
  return `<svg viewBox="${viewBox}" fill="currentColor">${paths}</svg>`;
}

const ICONS = {
  prev: iconSVG('<polygon points="16,4 16,20 6,12"/>'),
  next: iconSVG('<polygon points="8,4 8,20 18,12"/>'),

  back: iconSVG('<polygon points="16,3 16,21 5,12"/><rect x="7" y="10.5" width="12" height="3" rx="1"/>'),

  add: iconSVG('<rect x="10.5" y="4" width="3" height="16" rx="1.2"/><rect x="4" y="10.5" width="16" height="3" rx="1.2"/>'),

  close: iconSVG(`<rect x="10.5" y="2" width="3" height="20" rx="1.2" transform="rotate(45 12 12)"/>
                  <rect x="10.5" y="2" width="3" height="20" rx="1.2" transform="rotate(-45 12 12)"/>`),

  trash: iconSVG(`<rect x="5" y="7" width="14" height="2.4" rx="1.2"/>
                  <rect x="9.5" y="3" width="5" height="2.4" rx="1.2"/>
                  <path d="M6.5 9.5 L7.6 20 a1.5 1.5 0 0 0 1.5 1.4 h5.8 a1.5 1.5 0 0 0 1.5 -1.4 L17.5 9.5 Z" fill="none" stroke="currentColor" stroke-width="2"/>`)
};

function iconButton(name) { return ICONS[name] || ''; }
