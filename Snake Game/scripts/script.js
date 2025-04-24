let playButton = document.querySelector('#play')
let custButton = document.querySelector('#customize')
let leaveButton = document.querySelector('#leave')
let settButton = document.querySelector('#setting')
let htpButton = document.querySelector('#how-to-play')

//Exit buttons
let exitButtonSetting = document.querySelector('#exit-setting')
let exitButtonHtp = document.querySelector('#exit-htp')

//Menus
let mainMenu = document.querySelector('.main-menu')
let settingMenu = document.querySelector('.setting-menu')
let howToPlayMenu = document.querySelector('.how-to-play-menu')

settButton.addEventListener('click', (event) => {
    mainMenu.style.display = 'none'
    settingMenu.style.display = 'flex'
})

htpButton.addEventListener('click', (event) => {
    mainMenu.style.display = 'none'
    howToPlayMenu.style.display = 'flex'
})

exitButtonSetting.addEventListener('click', (event) => {
    mainMenu.style.display = 'flex'
    settingMenu.style.display = 'none'
})

exitButtonHtp.addEventListener('click', () => {
    mainMenu.style.display = 'flex'
    howToPlayMenu.style.display = 'none'
})