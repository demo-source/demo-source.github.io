import { oom } from 'https://cdn.jsdelivr.net/npm/notml/core.js/+esm'
import 'https://cdn.jsdelivr.net/npm/@material/mwc-dialog/+esm'


oom(document.head, oom
    .link({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' }))

oom(document.body, oom
    .mwcDialog({ open: true, heading: 'Test Title' }, oom
        .span('Test Text')))
