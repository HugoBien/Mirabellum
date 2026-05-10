
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Mirabellum/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Mirabellum"
  },
  {
    "renderMode": 2,
    "route": "/Mirabellum/contacts"
  },
  {
    "renderMode": 2,
    "route": "/Mirabellum/events"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 26311, hash: '392db679d597558369ed96239d07661ddf1477cacd63b4136ec82b7b2226439c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17163, hash: '2fb1e3eb4ab23955dc81b183e3c7b0f2d44e93b1460803d7fc7391267c42ec76', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 31906, hash: '47ac7192dcab54e4915ed90ebb76dc803947adbd3049842a49705de8c946e835', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contacts/index.html': {size: 38954, hash: 'd62592035533523571916effd7c014ff4c5ee226ee8724cc900d304b64220a98', text: () => import('./assets-chunks/contacts_index_html.mjs').then(m => m.default)},
    'events/index.html': {size: 40158, hash: '821ab6a67e6afad635ba8d034d102b15c5e73bf2ca9ad2d76f41f1730ffab53f', text: () => import('./assets-chunks/events_index_html.mjs').then(m => m.default)},
    'styles-XKGRGJJ2.css': {size: 16713, hash: 'h2U+7Ve1V+4', text: () => import('./assets-chunks/styles-XKGRGJJ2_css.mjs').then(m => m.default)}
  },
};
