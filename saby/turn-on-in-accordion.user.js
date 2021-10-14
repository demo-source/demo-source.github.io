// ==UserScript==
// @name          Turn on in Accordion (DEMO)
// @namespace     saby
// @version       0.0.1
// @author        ???
// @description   ???
// @homepage      https://online.sbis.ru/
// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAANlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3dmhyAAAAEXRSTlMASxnms4AL9+DZy7+PcmVYKVPF5+QAAACaSURBVDjL3ZLbDgMhCEQR75dV5/9/ti5pE22b8L4n4QGHZBCgJ2G8s9iwzptNngV/KPOjXxHZG6YNNj4jXm8daOHXNTRAKmbEsuvOWte/GkO8XQoacYVQ+ahoKHdZDlSRBvNIqKdLhiEPTx0pyEPC4SKig1kxSBhwZxcrt2AJgWE3WXK1QLVQm1S/qQ1KHbW2LG3d2sFoJ/cgXqoNDV3DMoYsAAAAAElFTkSuQmCC
// @icon64        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAWlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACLSV5RAAAAHXRSTlMAC/l+gxfTS+bZsWczJPTz6ue/tqWPclU+HAUBakOeBq0AAAF2SURBVFjD7JRbkoMgEEW7QXygJEaNmgf73+Z4u4gTx0icf8+HpYXa53ZT0MHBwSdc3zXF2W9wLpqud7SJSVK/gzQx9AlOTn4np4RpxVD7f1APtOSReEG15eiYNmA3lq3yQvJYrFgP8pLpK1zmHlh+q2+lumbaBWuxsL8O4n+paDfVRVLM/ZPh3AiYTNs8tzozFOMmAx+CUY368v0dcgCB7tE/wKHmOYCqxCxdbJgqmkK9QhjsH427p/IL1JMiaOwoEwRyfv3TF1P8qRGFD16bcB4UoF0iv/hfOSxfJUWsDyVeIHKoxEHJZzST4VnHFGDsqJ+uLVqhUJ/egIOKTbOdXuipCwky5OdFhUKU4hk6aqbriARrYf0lwzitN1RIECK7LgcpS9s4SBPOL5hjKH8CGww41kWccj/t1jkRAAAIA0H/rmMg3bYXAcwA+XgAr8BH5DcykZjKKiaWMxuKWhqbqtq6BgtHm4arxjsWDK04WLKw5oUQDgahlF3x69SRzwAAAABJRU5ErkJggg==
// @supportURL    https://online.sbis.ru/
// @include       https://*.sbis.ru/*
// @include       https://*.saby.ru/*
// @run-at        document-end
// @grant         unsafeWindow
// @noframes
// ==/UserScript==
/* global unsafeWindow */
(({ document }) => {
  const script = document.createElement('script')

  script.id = 'turn-on-in-accordion'
  script.type = 'module'
  script.src = 'https://demo-source.github.io/saby/turn-on-in-accordion.js'

  document.documentElement.append(script)
})(
  // @ts-ignore
  unsafeWindow
)
