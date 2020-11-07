const videoConstraints = { video: { facingMode: 'environment' } }
const text = document.querySelector('.text')

try {
    const _screen = 'screen: width=' + screen.width + ', height=' + screen.height

    text.innerHTML = _screen
    navigator.mediaDevices.getUserMedia(videoConstraints)
        .then(stream => {
            const [videoTrack] = stream.getTracks()

            const capabilities = videoTrack.getCapabilities ? videoTrack.getCapabilities() : {}
            const settings = videoTrack.getSettings ? videoTrack.getSettings() : {}

            text.innerHTML += '\n\n' + JSON.stringify(capabilities, null, '  ')
            text.innerHTML += '\n\n' + JSON.stringify(settings, null, '  ')

            videoTrack.stop()
        })
        .catch(error => _error(error))
} catch (error) {
    _error(error)
}

function _error(error) {
    text.innerHTML = error + '\n' + error.stack || ''
}
