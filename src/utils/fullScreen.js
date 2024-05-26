function isFullscreen() {
    return document.fullscreenElement != null ||
        document.mozFullScreenElement != null ||
        document.webkitFullscreenElement != null ||
        document.msFullscreenElement != null
}
function openFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen()
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen()
    }
}
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
    }
}

export {
    isFullscreen,
    openFullscreen,
    closeFullscreen
}