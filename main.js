const body = document.body
const nav = document.querySelector('.nav')

document.body.addEventListener('click', e => {
    if(e.target.classList.contains('btn-area')) {
        nav.classList.toggle('nav-showing') 
    } else if (!e.target.classList.contains('nav') && nav.classList.contains('nav-showing')){
        nav.classList.remove('nav-showing')
    }
})

// document.querySelector('.btn').addEventListener('click', () => {
//     document.querySelector('.nav').add('nav-showing')
// })
