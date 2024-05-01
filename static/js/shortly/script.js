const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

const input= document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errMsg= document.getElementById('err-msg')

btn.addEventListener('click', navToggle)
linkForm.addEventListener('submit', formSubmit)

// Toggle Mobile Menu
function navToggle() {
  btn.classList.toggle('open');
  menu.classList.toggle('visible');
}

// Validate a URL
function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    )
    return !!pattern.test(str)
  }

  
function formSubmit(e) {
    e.preventDefault()

    console.log(input.value)
    if (input.value === '') {
        errMsg.innerHTML = 'Please enter something'
        input.classList.add('border-shortlyRed')
    } else if (!validURL(input.value)) {
        errMsg.innerHTML = 'Please enter a valid url, though'
        input.classList.add('border-shortlyRed')
    } else {
        errMsg.innerHTML = ''
        input.classList.remove('border-shortlyRed')
        alert('Success desu.')
    }



}