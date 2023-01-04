// BURGER MENU
const burgerMenu = document.querySelector('.menu-icon') 
const menuContent = document.querySelector('.burger__content')
// burgerMenu.forEach(item => {
    burgerMenu.addEventListener('click', ()=> {
        burgerMenu.classList.toggle('menu__active')
        menuContent.classList.toggle('burger__content__active')

    })
// })

// DROPDOWN

const dropdowns = document.querySelectorAll('.dropdown');
let dropdownPrice = '';
let dropdownValue = '';

dropdowns.forEach(item => {
    const select = item.querySelector('.select');
    const caret = item.querySelector('.caret');
    const menu = item.querySelector('.menu');
    const options = item.querySelectorAll('.menu li');
    const selected = item.querySelector('.selected');


    
    select.addEventListener('click', () => {

        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    })

    options.forEach(item => {
        item.addEventListener('click', (e) => {
            // selected.innerText = item.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(item => {
                item.classList.remove('active');
            })
            item.classList.add('active')

            if(item.parentNode.parentNode.id === 'dropdown-price') {
                setParams('dropdownPrice', e.currentTarget.id)
                selected.innerText = localStorage.getItem('dropdownPrice');
                checkDropdowns()
            }
            else {
                console.log('it is not price')
                setParams('dropdownValue', e.currentTarget.id)
                selected.innerText = localStorage.getItem('dropdownValue');
                checkDropdowns()
            }

        })
    })

    
})

function setParams(name, value) {
    localStorage.setItem(name, value)
    currentURL.searchParams.set(name, localStorage.getItem(name))
    // window.location.href = currentURL

}


let searchButton = document.querySelector('.finder__search')
function checkDropdowns() {
    if(localStorage.getItem('dropdownValue') !== 'none' && localStorage.getItem('dropdownPrice') !== 'none') {
        searchButton.addEventListener('click', () => {
        window.location.href = 'search.html'
        console.log('hi how are you')
        // checkSearchParams()
        // fetchData()
        })
    }

}


// FAQ



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
        console.log(accordionButton.getAttribute('id'))
        console.log(e.target)
        panel.classList.toggle('panel__active')
        e.target.classList.toggle('accordion__active')
    })
})




// Getting data from json and making discount section

let offersJSON


const discountContainer= document.querySelector('.discount__container')

fetch('db.json')
.then(data => data.json())
.then(res => {
    console.log(res.offers[0].discount)
    let c = 0
    let count = 0


    
    for(c; c<res.offers.length; c++) {
        if(res.offers[c].discount === true) {
            count++
            if(count<= 4) {
                let offerItem = document.createElement('div')
                offerItem.classList.add('offer__item')
                offerItem.innerHTML = `

                            <div class="offer__img">
                                <img src="img/offer__img1.jpg" alt="">
                            </div>
                            <div class="offer__text">
                                <p class="offer__title">${res.offers[c].name}</p>
                                <p class="offer__desc">${res.offers[c].description}</p>
                                <p class="offer__location">${res.offers[c].location}</p>
                                <p class="offer__price"> ₼ ${res.offers[c].price} hour</p>
                            </div>

                `
                discountContainer.append(offerItem)

            }

        }
        

    }






})









let currentURL = new URL(window.location.href)



let mainPageBtn = document.querySelector('.nav__mainpage-btn')

mainPageBtn.addEventListener('click', () => {
    localStorage.setItem('dropdownValue', 'none');
    localStorage.setItem('dropdownPrice', 'none');
    localStorage.setItem('discount', 'false');
})

let logoBtn = document.querySelector('.logo')

logoBtn.addEventListener('click', () => {
    localStorage.setItem('dropdownValue', 'none');
    localStorage.setItem('dropdownPrice', 'none');
    window.location = 'index.html'
})

let discountBtn = document.querySelector('.nav__discounts-btn')
discountBtn.addEventListener('click', () => {
    localStorage.setItem('dropdownValue', 'value-all');
    localStorage.setItem('dropdownPrice', 'price-all');
    localStorage.setItem('discount', 'true');
    // window.location = 'search.html'
})