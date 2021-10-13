import mdc from 'https://cdn.jsdelivr.net/npm/material-components-web/dist/material-components-web.min.js'

const accordionContainer = document.querySelector('.NavigationPanels-Accordion__container')

class TOIAContainer extends window.HTMLElement {

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' })

    this.setAttribute('data-vdomignore', 'true')

    shadow.innerHTML = `
    <head>
      <link  href="https://cdn.jsdelivr.net/npm/material-components-web/dist/material-components-web.min.css" rel="stylesheet">
    </head>
    <div class="toia__container">
      <div class="toia__switcher">
        <button data-mdc-auto-init="MDCSwitch" class="mdc-switch mdc-switch--unselected" type="button" role="switch" aria-checked="false">
          <div class="mdc-switch__track"></div>
          <div class="mdc-switch__handle-track">
            <div class="mdc-switch__handle">
              <div class="mdc-switch__shadow">
                <div class="mdc-elevation-overlay"></div>
              </div>
              <div class="mdc-switch__ripple"></div>
              <div class="mdc-switch__icons">
                <svg class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">
                  <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
                </svg>
                <svg class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">
                  <path d="M20 13H4v-2h16v2z" />
                </svg>
              </div>
            </div>
          </div>
        </button>
        <label for="basic-switch">Включатель</label>
      </div>
      <div class="toia__config">

      </div>
    </div>
    `
    mdc.autoInit()
  }

}

window.customElements.define('toia-container', TOIAContainer)
accordionContainer.append(document.createElement('toia-container'))

console.log('Turn on in Accordion - ok')

// requirejs([
//   'UI/Base',
//   'Controls/toggle'
// ], (Base, toggle) => {
//   const switcherControl = Base.Control.createControl(toggle.Switch, { caption: 'Включатель' }, switcher)
// })
