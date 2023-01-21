function assignEventListeners() {
    document.querySelectorAll('.control').forEach(control => {
        control.addEventListener('click', e => {
            const clickedControl = e.currentTarget
            document.querySelector('.active-control').classList.remove('active-control')
            clickedControl.classList.add('active-control')
            document.querySelector(".active-container").classList.remove("active-container")
            document.getElementById(clickedControl.dataset.id).classList.add('active-container')
        })
    })
}

assignEventListeners()