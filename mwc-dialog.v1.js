import { oom } from 'https://cdn.jsdelivr.net/npm/notml@latest/core.js'
import 'https://unpkg.com/@material/mwc-dialog?module'

oom(document.body, oom
    .mwcDialog({ open: true, title: 'Test Title' }))