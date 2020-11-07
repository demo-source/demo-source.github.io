const videoConstraints = { video: { facingMode: 'environment' } }
const text = document.querySelector('.text')

try {
    const _screen = 'screen: width=' + screen.width + ', height=' + screen.height + '\n'

    text.innerHTML = _screen
    navigator.mediaDevices.getUserMedia(videoConstraints)
        .then(stream => {
            const [videoTrack] = stream.getTracks()

            capabilities = (videoTrack.getCapabilities || videoTrack.getSettings).call(videoTrack)

            text.innerHTML += JSON.stringify(capabilities, null, '  ')

            videoTrack.stop()
        })
        .catch(error => _error(error))
} catch (error) {
    _error(error)
}

function _error(error) {
    text.innerHTML = error + '\n' + error.stack || ''
}
