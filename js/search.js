let mainPageBtn = document.querySelector('.nav__mainpage-btn')

mainPageBtn.addEventListener('click', () => {
    localStorage.setItem('dropdownValue', 'none');
    localStorage.setItem('dropdownPrice', 'none');
    localStorage.setItem('discount', 'false')
})

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
                offerCardTemp = new OfferCard(
                    i,
                    res.offers[i].name,
                    res.offers[i].location, 
                    res.offers[i].description, 
                    res.offers[i].volume, 
                    res.offers[i].price, 
                    res.offers[i].discount,
                    res.offers[i].discountPrice,
                    searchContainer
                )
                offerCardTemp.buildCard()
            }

            switch (localStorage.getItem('discount')) {
                case 'true':
                    if(res.offers[i].discount == true) {
                        volumeCondition()
                    }
                    break
                case 'false':
                    volumeCondition()
                    break
            }


            function priceCondition() {
                switch(localStorage.getItem('dropdownPrice')) {
                    case 'price-all':
                        appendCard()
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
            function volumeCondition() {
                switch(localStorage.getItem('dropdownValue')) {
                    case 'value-all':
                            priceCondition()
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
    const filterSelect = item.querySelector('.filter__accordion__select')
    filterButton.addEventListener('click', () => {
        filterPanel.classList.toggle('filter__accordion__panel__active')
        filterButton.classList.toggle('filter__accordion__button__active')
        // console.log(filterSelect.innerHTML)
        // console.log('test demo')
    })

    
    const filterOptions = item.querySelectorAll('.filter__accordion__item')
    filterOptions.forEach(elem => {
        elem.addEventListener('click', (e) => {
            filterOptions.forEach(item => {
                item.classList.remove('active');
            })
            elem.classList.add('active')

            if(item.parentNode.id === 'filter__price') {
                setParams('dropdownPrice', elem.id)
                clearContainer()
                fetchData()
                // console.log(e.target.id)
                // console.log(elem.id)
                if(e.target.id === elem.id) {
                    filterOptions.forEach(item => {
                        // item.classList.remove('filter__accordion__button__active');
                        item.lastElementChild.innerHTML = ` <div class="filter__accordion__select"><img src="icon/fluent_checkbox_unchecked_filled_icon.svg" alt=""></div>`
                        // console.log(item.lastElementChild)
                    })
                    // e.target.classList.add('filter__accordion__button__active')
                    e.target.lastElementChild.innerHTML = ` <div class="filter__accordion__select"><img src="icon/fluent_checkbox_checked_filled_icon.svg" alt=""></div>`
                }
            }
            else if(item.parentNode.id === 'filter__value'){
                setParams('dropdownValue', elem.id)
                clearContainer()
                fetchData()
                if(e.target.id === elem.id) {
                    filterOptions.forEach(item => {
                        // item.classList.remove('filter__accordion__button__active');
                        item.lastElementChild.innerHTML = ` <div class="filter__accordion__select"><img src="icon/fluent_checkbox_unchecked_filled_icon.svg" alt=""></div>`
                        // console.log(item.lastElementChild)
                    })
                    // e.target.classList.add('filter__accordion__button__active')
                    e.target.lastElementChild.innerHTML = ` <div class="filter__accordion__select"><img src="icon/fluent_checkbox_checked_filled_icon.svg" alt=""></div>`
                }

            }

            // console.log(item.parentNode.id)
            // console.log(elem.id)/


        })
    })
})


const filterDiscount = document.querySelector('.filter__discount')
filterDiscount.addEventListener('click', (e) => {
    if(localStorage.getItem('discount') == 'true') {
        setParams('discount', "false")
        clearContainer()
        fetchData()
        filterDiscount.lastElementChild.innerHTML = ` <div class="filter__accordion__select"><img src="icon/fluent_checkbox_unchecked_filled_icon.svg" alt=""></div>`
    }
    else {
        setParams('discount', "true")
        clearContainer()
        fetchData()
        filterDiscount.lastElementChild.innerHTML = ` <div class="filter__accordion__select"><img src="icon/fluent_checkbox_checked_filled_icon.svg" alt=""></div>`

    }
    console.log(localStorage.getItem('discount'))
})




let currentSearchURL = new URL(window.location.href)

function setParams(name, value) {
    localStorage.setItem(name, value)
    // currentSearchURL.searchParams.set(name, localStorage.getItem(name))
    // window.location.href = currentSearchURL

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

// checkSearchParams()


class OfferCard {
    constructor(id, name, location, description, volume, price, discount, discountPrice, container) {
		this.id = id
        this.name = name
        this.location = location
        this.description = description
        this.volume = volume
        this.price = price
        this.discount = discount
        this.discountPrice = discountPrice
        this.container = container
    }
    buildCard() {
        let offerCard = document.createElement('div')
        if(this.discount) {
            console.log('correct')
            offerCard.innerHTML = `
                <div id="${this.id}" class="search__card">
                    <div class="search__item">
                        <div class="card__img">
                            <img src="img/offer__img1.jpg" alt="">
                        </div>
                        <div class="card__center">
                            <div class="card__title offer__title">
                                ${this.name}
                            </div>
                            <div class="card__location offer__location">
                                ${this.location} 
                            </div>
                            <div class="card__description offer__desc">
                                ${this.description}
                            </div>
                            <div class="card__value offer__desc">
                                ${this.volume} presons
                            </div>
                            
                        </div>
                    </div>
                    <div class="card__left">
                        <div class="card__price"><s>${this.price}AZN</s><div class="card__discount">${this.discountPrice}AZN</div></div>
                        <div class="card__button" href="">See availability</div>
                    </div>
                </div>
            `
        }
        else {
            console.log('mistake')
            offerCard.innerHTML = `
                <div id="${this.id}" class="search__card">
                    <div class="search__item">
                        <div class="card__img">
                            <img src="img/offer__img1.jpg" alt="">
                        </div>
                        <div class="card__center">
                            <div class="card__title offer__title">
                                ${this.name}
                            </div>
                            <div class="card__location offer__location">
                                ${this.location} 
                            </div>
                            <div class="card__description offer__desc">
                                ${this.description}
                            </div>
                            <div class="card__value offer__desc">
                                ${this.volume} presons
                            </div>
                            
                        </div>
                    </div>
                    <div class="card__left">
                        <div class="card__price">${this.price}AZN</div>
                        <div class="card__button" href="">See availability</div>
                    </div>
                </div>
            `
        }
        this.container.append(offerCard)
    }

}


function checkFilterOpt() {
    if(localStorage.getItem('discount') == 'true') {
        filterDiscount.lastElementChild.innerHTML = ` <div class="filter__accordion__select"><img src="icon/fluent_checkbox_checked_filled_icon.svg" alt=""></div>`    
    }
    // console.log(document.querySelector(`#${localStorage.getItem('dropdownPrice')} .filter__accordion__select`))
    document.querySelector(`#${localStorage.getItem('dropdownPrice')} .filter__accordion__select`).innerHTML = '<img src="icon/fluent_checkbox_checked_filled_icon.svg" alt="">'
    document.querySelector(`#${localStorage.getItem('dropdownValue')} .filter__accordion__select`).innerHTML = '<img src="icon/fluent_checkbox_checked_filled_icon.svg" alt="">'

    
    
}

checkFilterOpt()