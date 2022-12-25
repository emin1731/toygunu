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


const offerContainer= document.querySelector('.offer__container')

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
                offerItem.innerHTML = `
                         <div class="offer__item">
                            <div class="offer__img">
                                <img src="img/offer__img1.jpg" alt="">
                            </div>
                            <div class="offer__text">
                                <p class="offer__title">Place One</p>
                                <p class="offer__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p class="offer__location">Baku</p>
                                <p class="offer__price"> ₼ 35 hour</p>
                            </div>
                        </div>
                `
                // offerContainer.append(offerItem)

            }

        }
        

    }


})




// const searchContainer = document.querySelector('.search__offers')

// function fetchData() {
//     fetch('db.json')
//     .then(data => data.json())
//     .then(res => {

//         for(i = 0; i<res.offers.length; i++) {
//             function appendCard() {
//                 let offerCard = document.createElement('div')
//                 offerCard.innerHTML = `    
//                     <div id="${i}" class="search__card">
//                     <div class="search__item">
//                         <div class="card__img">
//                             <img src="img/offer__img1.jpg" alt="">
//                         </div>
//                         <div class="card__center">
//                             <div class="card__title offer__title">
//                                 ${res.offers[i].name}
//                             </div>
//                             <div class="card__location offer__location">
//                                 ${res.offers[i].location} 
//                             </div>
//                             <div class="card__description offer__desc">
//                                 ${res.offers[i].description}
//                             </div>
//                             <div class="card__value offer__desc">
//                                 ${res.offers[i].volume} presons
//                             </div>
                            
//                         </div>
//                     </div>
//                     <div class="card__left">
//                         <div class="card__price">${res.offers[i].price} AZN</div>
//                         <div class="card__button" href="">See availability</div>
//                     </div>
        
//                     </div>
                    
//                     `
//                     searchContainer.append(offerCard)
    
//             }
//             function priceCondition() {
//                 switch(localStorage.getItem('dropdownPrice')) {
//                     case 'price25-50':

//                         if(res.offers[i].price >= 25 && res.offers[i].price <= 50) {
//                             appendCard()
        
//                         }
//                         break
//                     case 'price51-75':

//                         if(res.offers[i].price >= 51 && res.offers[i].price <= 75) {
//                             appendCard()
        
//                         }
//                         break
//                     case 'price76-90':

//                         if(res.offers[i].price >= 76 && res.offers[i].price <= 90) {
//                             appendCard()
        
//                         }
//                         break
//                     case 'price91+':

//                         if(res.offers[i].price >= 91) {
//                             console.log('hhfhfhfhsjskksk')
//                             appendCard()
//                         }
//                         break
//                 }

//             }
//             switch(localStorage.getItem('dropdownValue')) {
//                 case 'value0-100':

//                     if(res.offers[i].volume <= 100) {
//                         priceCondition()
//                     }
//                     break
//                 case 'value101-150':
//                     if(res.offers[i].volume >= 101 && res.offers[i].volume <= 150) {
//                         priceCondition()
//                     }
//                     break
//                 case 'value151-300':
//                     if(res.offers[i].volume >= 151 && res.offers[i].volume <= 300) {
//                         priceCondition()
//                     }
//                     break
//                 case 'value301-600':

//                     if(res.offers[i].volume >= 301 && res.offers[i].volume <= 600) {
//                         priceCondition()
//                     }
//                     break
//                 case 'value601+':

//                     if(res.offers[i].volume >= 601) {
//                         priceCondition()
//                     }
//                     break
//             }

    
//         }


//         let cardButtons = document.querySelectorAll('.card__button') 
//         cardButtons.forEach(item => {
//             item.addEventListener('click', (e)=> {
//                 localStorage.setItem('selectedOfferId', e.target.parentNode.parentNode.id)
//                 console.log(localStorage.getItem('selectedOfferId'))
        
                
//                 window.location.href = offerCardHref
//             })
//         })

//     })

// }

// fetchData()



// // FILTER ON SEARCH PAGE

// let offerCardHref = 'offers/offer-page.html'



// function clearContainer() {
//     searchContainer.innerHTML = ''
// }





// const filterAccordion = document.querySelectorAll('.filter__accordion')

// filterAccordion.forEach(item => {
//     const filterButton = item.querySelector('.filter__accordion__button')
//     const filterPanel = item.querySelector('.filter__accordion__panel')
//     filterButton.addEventListener('click', () => {
//         filterPanel.classList.toggle('filter__accordion__panel__active')
//         filterButton.classList.toggle('filter__accordion__button__active')
//         console.log('test demo')
//     })

    
//     const filterOptions = item.querySelectorAll('.filter__accordion__item')
//     filterOptions.forEach(elem => {
//         elem.addEventListener('click', () => {
//             filterOptions.forEach(item => {
//                 item.classList.remove('active');
//             })
//             elem.classList.add('active')

//             if(item.parentNode.id === 'filter__price') {
//                 setParams('dropdownPrice', elem.id)
//                 clearContainer()
//                 fetchData()

//             }
//             else if(item.parentNode.id === 'filter__value'){
//                 setParams('dropdownValue', elem.id)
//                 clearContainer()
//                 fetchData()

//             }

//             console.log(item.parentNode.id)
//             console.log(elem.id)


//         })
//     })
// })






let currentURL = new URL(window.location.href)
// let filterAccordionItem = document.querySelectorAll('.filter__accordion__item')


// function checkSearchParams() {
//     const searchParams = new URLSearchParams(currentURL.search)
//     if(searchParams.has('dropdownValue') && searchParams.has('dropdownPrice')) {

//         let searchPrice = searchParams.get('dropdownPrice')
//         console.log(searchPrice)
//         localStorage.setItem('dropdownPrice', searchPrice)
//         filterAccordionItem.forEach(item => {
//             if(item.id === searchPrice) {
//                 console.log('search params is equal to')
//                 item.classList.add('filter__accordion__button__active')
//             }
//         })



//         let searchValue = searchParams.get('dropdownValue')
//         console.log(searchValue)
//         localStorage.setItem('dropdownValue', searchValue)
//         filterAccordionItem.forEach(item => {
//             if(item.id === searchValue) {
//                 console.log('search params is equal to')
//                 item.classList.add('filter__accordion__button__active')
//             }
//         })
//     }
//     else{
//         console.log('failure') 
//     }


    
// }

// checkSearchParams()


let mainPageBtn = document.querySelector('.nav__mainpage-btn')

mainPageBtn.addEventListener('click', () => {
    localStorage.setItem('dropdownValue', 'none');
    localStorage.setItem('dropdownPrice', 'none');
})



