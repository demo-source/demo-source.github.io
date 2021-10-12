const accordionContainer = document.querySelector('.NavigationPanels-Accordion__container')
const style = document.createElement('style')
const container = document.createElement('div')
const switcher = document.createElement('div')
const config = document.createElement('div')

container.setAttribute('data-vdomignore', 'true')
container.classList.add('toia__container')
switcher.classList.add('toia__switcher')
config.classList.add('toia__config')

document.head.append(style)
container.append(switcher)
container.append(config)
accordionContainer.append(container)

console.log('Turn on in Accordion - ok')

requirejs([
    'UI/Base',
    'Controls/toggle'
], (Base, toggle) => {
    const switcherControl = Base.Control.createControl(toggle.Switch, { caption: 'Включатель' }, switcher)
})