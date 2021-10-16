import { setup, tw } from 'https://cdn.skypack.dev/twind/shim'
import * as colors from 'https://cdn.skypack.dev/twind/colors'

// initializing Twind CSS-In-JS compiler
// see 👉 https://twind.dev
setup({
    hash: false,
    darkMode: false,
    theme: {
        fontFamily: {
            body: ['Lexend Deca', 'sans-serif']
        },
        container: {
            center: true
        },
        extend: {
            colors: {
                gray: colors.blueGray,
                primary: '#006cff',
                white: '#ffffff',
                'primary-dark': '#005DE0',
                secondary: '#000000'
            }
        }
    }
})

// garbing the required elements from the DOM
const clicker = document.querySelector('#btnClick')
const reset = document.querySelector('#btnReset')
const lblStatus = document.querySelector('#lblStatus')

// if this is the first time a user is visiting this page
// initialize the localStorage with click count
if (localStorage.getItem('clicked') == null) localStorage.setItem('clicked', 0)

// restoring the click count upon initial page load
lblStatus.textContent = `Clicked ${localStorage.getItem('clicked')} times`

// when the click button is pressed
// read the existing value from localStorage
// and increment that while showing in the frontend
clicker.onclick = () => {
    const newValue = +localStorage.getItem('clicked')
    lblStatus.textContent = `Clicked ${newValue + 1} times`
    localStorage.setItem('clicked', newValue + 1)
}

// basically set the value to zero and show it
reset.onclick = () => {
    localStorage.setItem('clicked', 0)
    lblStatus.textContent = `Clicked 0 times`
}
