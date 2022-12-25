const burgerMenu = document.querySelector('.menu-icon') 
const menuContent = document.querySelector('.burger__content')
// burgerMenu.forEach(item => {
    burgerMenu.addEventListener('click', ()=> {
        burgerMenu.classList.toggle('menu__active')
        menuContent.classList.toggle('burger__content__active')

    })


const mobFilterButton = document.querySelector('.search__filters__button')
const mobContent = document.querySelector('.mobile__filter__content')
const mobContentExit = document.querySelector('.filter__exit')
const mobContentWrapper = document.querySelector('.mobile__content__wrapper')



mobFilterButton.addEventListener('click', () => {
    mobContent.classList.add('display__active')
})

mobContentExit.addEventListener('click', () => {
    mobContent.classList.remove('display__active')
})

mobContentWrapper.addEventListener('click', (e) => {
    console.log(e.target.getAttribute('class'))
    if(e.target.getAttribute('class') == 'mobile__content__wrapper mobile__filter__content display__active') {
        mobContent.classList.remove('display__active')

    }
})



const searchContainer = document.querySelector('.search__offers')

function fetchData() {
    fetch('db.json')
    .then(data => data.json())
    .then(res => {

        for(i = 0; i<res.offers.length; i++) {
            function appendCard() {
                let offerCard = document.createElement('div')
                offerCard.innerHTML = `    
                    <div id="${i}" class="search__card">
                    <div class="search__item">
                        <div class="card__img">
                            <img src="img/offer__img1.jpg" alt="">
                        </div>
                        <div class="card__center">
                            <div class="card__title offer__title">
                                ${res.offers[i].name}
                            </div>
                            <div class="card__location offer__location">
                                ${res.offers[i].location} 
                            </div>
                            <div class="card__description offer__desc">
                                ${res.offers[i].description}
                            </div>
                            <div class="card__value offer__desc">
                                ${res.offers[i].volume} presons
                            </div>
                            
                        </div>
                    </div>
                    <div class="card__left">
                        <div class="card__price">${res.offers[i].price} AZN</div>
                        <div class="card__button" href="">See availability</div>
                    </div>
        
                    </div>
                    
                    `
                    searchContainer.append(offerCard)
    
            }
            function priceCondition() {
                switch(localStorage.getItem('dropdownPrice')) {
                    case 'price-all':

                    // if(res.offers[i].volume <= 100) {
                        appendCard()
                    // }
                    break
                    case 'price25-50':

                        if(res.offers[i].price >= 25 && res.offers[i].price <= 50) {
                            appendCard()
        
                        }
                        break
                    case 'price51-75':

                        if(res.offers[i].price >= 51 && res.offers[i].price <= 75) {
                            appendCard()
        
                        }
                        break
                    case 'price76-90':

                        if(res.offers[i].price >= 76 && res.offers[i].price <= 90) {
                            appendCard()
        
                        }
                        break
                    case 'price91+':

                        if(res.offers[i].price >= 91) {
                            console.log('hhfhfhfhsjskksk')
                            appendCard()
                        }
                        break
                }

            }
            switch(localStorage.getItem('dropdownValue')) {
                case 'value-all':

                    // if(res.offers[i].volume <= 100) {
                        priceCondition()
                    // }
                    break
                case 'value0-100':

                    if(res.offers[i].volume <= 100) {
                        priceCondition()
                    }
                    break
                case 'value101-150':
                    if(res.offers[i].volume >= 101 && res.offers[i].volume <= 150) {
                        priceCondition()
                    }
                    break
                case 'value151-300':
                    if(res.offers[i].volume >= 151 && res.offers[i].volume <= 300) {
                        priceCondition()
                    }
                    break
                case 'value301-600':

                    if(res.offers[i].volume >= 301 && res.offers[i].volume <= 600) {
                        priceCondition()
                    }
                    break
                case 'value601+':

                    if(res.offers[i].volume >= 601) {
                        priceCondition()
                    }
                    break
            }

    
        }


        
        let cardButtons = document.querySelectorAll('.card__button') 
        cardButtons.forEach(item => {
            item.addEventListener('click', (e)=> {
                localStorage.setItem('selectedOfferId', e.target.parentNode.parentNode.id)
                console.log(localStorage.getItem('selectedOfferId'))
        
                window.location.href = offerCardHref
                checkOfferSearchParams()
            })
        })
    })
    
}

fetchData()



// FILTER ON SEARCH PAGE

let offerCardHref = 'offers/offer-page.html'



function clearContainer() {
    searchContainer.innerHTML = ''
}


const filterAccordion = document.querySelectorAll('.filter__accordion')

filterAccordion.forEach(item => {
    const filterButton = item.querySelector('.filter__accordion__button')
    const filterPanel = item.querySelector('.filter__accordion__panel')
    filterButton.addEventListener('click', () => {
        filterPanel.classList.toggle('filter__accordion__panel__active')
        filterButton.classList.toggle('filter__accordion__button__active')
        console.log('test demo')
    })

    
    const filterOptions = item.querySelectorAll('.filter__accordion__item')
    filterOptions.forEach(elem => {
        elem.addEventListener('click', () => {
            filterOptions.forEach(item => {
                item.classList.remove('active');
            })
            elem.classList.add('active')

            if(item.parentNode.id === 'filter__price') {
                setParams('dropdownPrice', elem.id)
                clearContainer()
                fetchData()

            }
            else if(item.parentNode.id === 'filter__value'){
                setParams('dropdownValue', elem.id)
                clearContainer()
                fetchData()

            }

            console.log(item.parentNode.id)
            console.log(elem.id)


        })
    })
})


let currentSearchURL = new URL(window.location.href)

function setParams(name, value) {
    localStorage.setItem(name, value)
    currentSearchURL.searchParams.set(name, localStorage.getItem(name))
    window.location.href = currentSearchURL

}


let filterAccordionItem = document.querySelectorAll('.filter__accordion__item')


function checkSearchParams() {
    const searchParams = new URLSearchParams(currentSearchURL.search)
    if(searchParams.has('dropdownValue') && searchParams.has('dropdownPrice')) {

        let searchPrice = searchParams.get('dropdownPrice')
        console.log(searchPrice)
        localStorage.setItem('dropdownPrice', searchPrice)
        filterAccordionItem.forEach(item => {
            if(item.id === searchPrice) {
                console.log('search params is equal to')
                item.classList.add('filter__accordion__button__active')
            }
        })



        let searchValue = searchParams.get('dropdownValue')
        console.log(searchValue)
        localStorage.setItem('dropdownValue', searchValue)
        filterAccordionItem.forEach(item => {
            if(item.id === searchValue) {
                console.log('search params is equal to')
                item.classList.add('filter__accordion__button__active')
            }
        })
    }
    else{
        console.log('failure') 
    }


    
}

checkSearchParams()


let mainPageBtn = document.querySelector('.nav__mainpage-btn')

mainPageBtn.addEventListener('click', () => {
    localStorage.setItem('dropdownValue', 'none');
    localStorage.setItem('dropdownPrice', 'none');
})