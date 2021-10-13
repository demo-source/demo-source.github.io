import './src__turn-on-in-accordion.scss'
import autoInit from '@material/auto-init/index';

import * as ripple from '@material/ripple/index';
import * as switchControl from '@material/switch/index';
import * as dialog from '@material/dialog/index';
import * as textField from '@material/textfield/index';


autoInit.register('MDCRipple', ripple.MDCRipple);
autoInit.register('MDCSwitch', switchControl.MDCSwitch);
autoInit.register('MDCDialog', dialog.MDCDialog);
autoInit.register('MDCTextField', textField.MDCTextField);


class TOIAContainer extends window.HTMLElement {

  switcher = null
  configButton = null
  configDialog = null
  inputFld1 = null
  inputFld2 = null
  buttonCancel = null
  buttonOk = null

  get textfield_1() {
    return localStorage.getItem('toia__input-fld-id1') || ''
  }

  set textfield_1(value) {
    localStorage.setItem('toia__input-fld-id1', value)
  }

  get textfield_2() {
    return localStorage.getItem('toia__input-fld-id2') || ''
  }

  set textfield_2(value) {
    localStorage.setItem('toia__input-fld-id2', value)
  }

  template = `
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
          align-items: center;
          z-index: 10000;
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
        .toia__config {
          display: flex;
          margin-right: 6px;
        }
        .toia__config__dialog__content {
          display: flex;
          flex-direction: column;
        }
        .toia__config__dialog__field_frst {
          margin-bottom: 20px;
        }
        .toia__config__icon {
          fill: #656c87;
          color: #656c87;
          font-family: "cbuc-icons";
          font-size: 18px;
          line-height: 20px;
          height: 18px;
          width: 18px;
          cursor: pointer;
        }
        .toia__config__icon:hover {
          fill: var(--mdc-theme-primary);
          color: var(--mdc-theme-primary);
        }
        .icon-Settings:before {
          content: "\\e61b";
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
        <span id="toia__config__button" class="toia__config__icon icon-Settings"></span>
        <div id="toia__config__dialog" class="mdc-dialog" data-mdc-auto-init="MDCDialog">
          <div class="mdc-dialog__container">
            <div class="mdc-dialog__surface">
              <h2 class="mdc-dialog__title">Здесь должен быть заголовок</h2>
              <div class="mdc-dialog__content toia__config__dialog__content">
                <label data-mdc-auto-init="MDCTextField" class="mdc-text-field mdc-text-field--filled toia__config__dialog__field_frst">
                  <span class="mdc-text-field__ripple"></span>
                  <span class="mdc-floating-label">Hint text 1</span>
                  <input class="mdc-text-field__input" type="text" id="input-fld-id1" value="${this.textfield_1}">
                  <span class="mdc-line-ripple"></span>
                </label>
                <label data-mdc-auto-init="MDCTextField" class="mdc-text-field mdc-text-field--filled">
                  <span class="mdc-text-field__ripple"></span>
                  <span class="mdc-floating-label">Hint text 2</span>
                  <input class="mdc-text-field__input" type="text" id="input-fld-id2" value="${this.textfield_2}">
                  <span class="mdc-line-ripple"></span>
                </label>
              </div>
              <div class="mdc-dialog__actions">
                <button id="button-cancel" type="button" data-mdc-auto-init="MDCRipple" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="close">
                  <div class="mdc-button__ripple"></div>
                  <span class="mdc-button__label">Cancel</span>
                </button>
                <button id="button-ok" type="button" data-mdc-auto-init="MDCRipple" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="accept">
                  <div class="mdc-button__ripple"></div>
                  <span class="mdc-button__label">OK</span>
                </button>
              </div>
            </div>
          </div>
          <div class="mdc-dialog__scrim"></div>
        </div>
      </div>
    </div>
  `
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' })

    this.setAttribute('data-vdomignore', 'true')
    this.setAttribute('contenteditable', 'true')
    shadow.innerHTML = this.template
    autoInit(shadow)

    this.switcher = shadow.getElementById('toia__basic-switch')
    this.switcher.onclick = () => this.toggleSwitch()

    this.configButton = shadow.getElementById('toia__config__button')
    this.configButton.onclick = () => this.openConfigSwitch()

    this.configDialog = shadow.getElementById('toia__config__dialog')

    this.inputFld1 = shadow.getElementById('input-fld-id1')
    this.inputFld2 = shadow.getElementById('input-fld-id2')

    this.buttonCancel = shadow.getElementById('button-cancel')
    this.buttonCancel.onclick = () => this.cancelChanges()
    this.buttonOk = shadow.getElementById('button-ok')
    this.buttonOk.onclick = () => this.saveChanges()
  }

  toggleSwitch() {
    const { selected } = this.switcher.MDCSwitch

    if (selected) {
      console.log(`turn on! text_1 = ${this.textfield_1}`)
    } else {
      console.log(`turn off! text_1 = ${this.textfield_1}`)
    }
  }

  openConfigSwitch() {
    this.configDialog.MDCDialog.open()
  }

  cancelChanges() {
    this.inputFld1.value = this.textfield_1
    this.inputFld2.value = this.textfield_2
  }

  saveChanges() {
    this.textfield_1 = this.inputFld1.value
    this.textfield_2 = this.inputFld2.value
  }

}


const accordionContainer = document.querySelector('.NavigationPanels-Accordion__container')

if (accordionContainer) {
  window.customElements.define('toia-container', TOIAContainer)
  accordionContainer.append(document.createElement('toia-container'))
  console.log('Turn on in Accordion - ok')
}
