import './src__turn-on-in-accordion.scss'
import autoInit from '@material/auto-init/index';

import * as ripple from '@material/ripple/index';
import * as switchControl from '@material/switch/index';

autoInit.register('MDCRipple', ripple.MDCRipple);
autoInit.register('MDCSwitch', switchControl.MDCSwitch);



class TOIAContainer extends window.HTMLElement {

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' })

    this.setAttribute('data-vdomignore', 'true')

    shadow.innerHTML = `
    <head>
      <link  href="https://demo-source.github.io/saby/turn-on-in-accordion.css" rel="stylesheet">
      <style>
        .toia__container {
          --mdc-theme-primary: #ff8552;
          --mdc-theme-secondary: #ff8552;
          --mdc-theme-on-primary: #e9ebec;
          --mdc-theme-on-secondary: #e9ebec;
          --mdc-switch-unselected-hover-track-color: #e9ebec;
          --mdc-switch-unselected-track-color: #e9ebec;
          --mdc-switch-unselected-pressed-track-color: #e9ebec;
          --mdc-switch-unselected-focus-track-color: #e9ebec;
          --mdc-switch-selected-hover-track-color: #e9ebec;
          --mdc-switch-selected-track-color: #e9ebec;
          --mdc-switch-selected-pressed-track-color: #e9ebec;
          --mdc-switch-selected-focus-track-color: #e9ebec;
          --mdc-switch-selected-hover-handle-color: #ff7438;
          --mdc-switch-selected-focus-handle-color: #ff7438;
          --mdc-switch-selected-pressed-handle-color:  #ff7438;
        }
        .toia__container {
          display: flex;
          justify-content: space-between;
          padding: 12px 6px;
        }
        .toia__switcher {
          display: flex;
          align-items: center;
        }
        .toia__basic-switch__label {
          color: var(--mdc-theme-on-primary);
          cursor: pointer;
          margin-left: 6px;
          font-size: 16px;
        }
      </style>
    </head>
    <div class="toia__container">
      <div class="toia__switcher">
        <button data-mdc-auto-init="MDCSwitch" id="toia__basic-switch" class="mdc-switch mdc-switch--unselected" type="button" role="switch" aria-checked="false">
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
        <label for="toia__basic-switch" class="toia__basic-switch__label">
          Включатель
        </label>
      </div>
      <div class="toia__config">

      </div>
    </div>
    `
    autoInit(shadow)
  }

}


const accordionContainer = document.querySelector('.NavigationPanels-Accordion__container')

if (accordionContainer) {
  window.customElements.define('toia-container', TOIAContainer)
  accordionContainer.append(document.createElement('toia-container'))
  console.log('Turn on in Accordion - ok')
}
