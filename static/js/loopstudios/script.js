const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)

function navToggle() {
    btn.classList.toggle('open')

    // Doesn't have it, which means it will add it.
    menu.classList.toggle('flex')

    // When toggled, will take it off
    menu.classList.toggle('hidden') 
}
