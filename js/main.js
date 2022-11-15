const accordion = document.querySelectorAll('.accordion')
const accordionImage = document.querySelector('.faq__img')


accordion.forEach(item => {
    accordionButton = item.querySelector('.accordion__button')
    const panel = item.querySelector('.accordion__panel')
    accordionButton.addEventListener('click', (e) => {
        accordion.forEach(item => {
            item.querySelector('.accordion__button').classList.remove('accordion__active')
            item.querySelector('.accordion__panel').classList.remove('panel__active')
        })
        panel.classList.toggle('panel__active')
        e.target.classList.toggle('accordion__active')
        switch(e.target.id) {
            case 'accordion_1':
                console.log(e.target.id)
                accordionImage.innerHTML = '<img src="img/example_img1.jpg" alt="">'
                break;
            case 'accordion_2':
                console.log(e.target.id)
                accordionImage.innerHTML = '<img src="img/example_img2.jpg" alt="">'
                break;
            case 'accordion_3':
                console.log(e.target.id)
                accordionImage.innerHTML = '<img src="img/example_img3.jpg" alt="">'
                break;
        }
    })
})

let offersJSON

let url = 'db.json'

fetch(url)
.then(data => {
    offersJSON = data.json()
    
})
.then(item => {
    console.log(offersJSON.resolve)
    
})

// let json = await data.json()
// console.log(json)