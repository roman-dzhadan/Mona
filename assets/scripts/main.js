const setupMuteButton = () => {
    let soundtrackMuted = true
    document.getElementById('mute-button').addEventListener('click', e => {
        const audio = document.getElementById('soundtrack')
        const muteButtonIcon = document.getElementById('mute-button-icon')
        if (audio.currentTime === 0) {
            audio.play()
        }
        if (soundtrackMuted) {
            audio.muted = false
            audio.volume = 1
            muteButtonIcon.classList.replace('fa-volume-xmark', 'fa-volume-high')
        } else {
            audio.muted = true
            audio.volume = 0
            muteButtonIcon.classList.replace('fa-volume-high', 'fa-volume-xmark')
        }
        soundtrackMuted = !soundtrackMuted
    })
}

const setupThemeButton = () => {
    let daylightTheme = true
    document.getElementById('theme-button').onclick = (e) => {
        const themeButtonIcon = document.getElementById('theme-button-icon')
        if (daylightTheme) {
            themeButtonIcon.classList.replace('fa-sun', 'fa-moon')
        } else {
            themeButtonIcon.classList.replace('fa-moon', 'fa-sun')
        }
        daylightTheme = !daylightTheme
    }
}

const setupMenuItems = () => {
    document.querySelectorAll('.menu-item').forEach(control => {
        control.addEventListener('click', e => {
            const clickedControl = e.currentTarget
            document.querySelector('.active-menu-item').classList.remove('active-menu-item')
            clickedControl.classList.add('active-menu-item')
            document.querySelector(".active-container").classList.remove("active-container")
            document.getElementById(clickedControl.dataset.id).classList.add('active-container')
        })
    })
}

setupMuteButton()
setupThemeButton()
setupMenuItems()