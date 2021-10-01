import { oom } from 'https://cdn.jsdelivr.net/npm/notml@latest/core.js'
import 'https://unpkg.com/@material/mwc-tab-bar@^0.25.1?module'

oom(document.head, oom
    .link({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' }))

oom(document.body, oom
    .mwcTabBar(oom
        .mwcTab({ label: 'Tab one' })
        .mwcTab({ label: 'Tab two' })
        .mwcTab({ label: 'Tab three' })))
