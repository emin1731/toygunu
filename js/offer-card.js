const burgerMenu = document.querySelector('.menu-icon') 
const menuContent = document.querySelector('.burger__content')
burgerMenu.addEventListener('click', ()=> {
    burgerMenu.classList.toggle('menu__active')
    menuContent.classList.toggle('burger__content__active')
})

const mobRegButton = document.querySelector('.mobile__req__button')
const mobRegContent = document.querySelector('.mobile__registration__content')
const mobContentExit = document.querySelector('.filter__exit')
const mobContentWrapper = document.querySelector('.mobile__content__wrapper')

mobRegButton.addEventListener('click', () => {
    mobRegContent.classList.add('display__active')
})

mobContentExit.addEventListener('click', () => {
    mobRegContent.classList.remove('display__active')
})

mobContentWrapper.addEventListener('click', (e) => {
    console.log(e.target.getAttribute('class'))
    if(e.target.getAttribute('class') == 'mobile__content__wrapper mobile__registration__content display__active') {
        mobRegContent.classList.remove('display__active')

    }
})





let currentOfferURL = new URL(window.location.href)
let currentOfferURLSearch = new URLSearchParams(currentOfferURL.search)


function checkOfferSearchParams() {
    let currentOfferParams = currentOfferURLSearch.get('index')
    if(currentOfferURLSearch.has('index')) {
        console.log(currentOfferParams)
        localStorage.setItem('selectedOfferId', currentOfferParams)
        createOfferPage(currentOfferParams)
    }
    else if(!currentOfferURLSearch.has('index')){
        currentOfferURL.searchParams.set('index', localStorage.getItem('selectedOfferId'))
        window.location.href = currentOfferURL
        createOfferPage(currentOfferParams)
    }
}
checkOfferSearchParams()


let offerPageContainer = document.querySelector('.offerpage__container')

function createOfferPage(index) {
    fetch('../db.json')
    .then(data => data.json())
    .then(res => {
        BuildOfferPage(
            index,
            res.offers[index].name,
            res.offers[index].location,
            res.offers[index].imageURL,
            res.offers[index].description,
            res.offers[index].volume,
            res.offers[index].area,
            res.offers[index].features,
            res.offers[index].price,
            res.offers[index].discount,
            res.offers[index].discountPrice,
            res.offers[index].owner.name,
            res.offers[index].owner.email,
            res.offers[index].owner.phone,
            res.offers[index].owner.adress,
            res.offers[index].owner.website,
            res.offers[index].owner.profileImg
        )
        enableSlider(res.offers[index].imageURL)

    })
}

let offerpageName = document.querySelector('.offerpage__title'),
    offerpageLocation = document.querySelector('.offerpage__infobar__location'),
    imgContainer = document.querySelector('.offerpage__slider'),
    offerpagePrice = document.querySelector('.offerpage__features__price__title'),
    offerpageVolume = document.querySelector('.offerpage__features__volume__title'),
    offerpageArea = document.querySelector('.offerpage__features__area__title'),
    offerpageFeaturesContainer = document.querySelector('.offerpage__features__container'),
    offerpageDescription = document.querySelector('.offerpage__description__text'),
    ownderName = document.querySelector('.owner__name'),
    ownerImg = document.querySelector('.owner__img'),
    ownerEmail = document.querySelector('.owner__email'),
    ownerMobile = document.querySelector('.owner__mobile'),
    ownerSite = document.querySelector('.owner__site'),
    ownderAdress = document.querySelector('.owner__adress')




function BuildOfferPage(id, name, location, imageURL, description, volume, area, features, price, discount, discountPrice, ownder_name, owner_email, owner_mobile, ownder_adress, owner_site, owner_img) {
        offerpageName.innerHTML = name
        offerpageLocation.innerHTML = location
        offerpagePrice.innerHTML = `${price} AZN`
        offerpageVolume.innerHTML = `Up to ${volume} persons`
        offerpageArea.innerHTML = `${area} m2`
        offerpageDescription.innerHTML = description
        ownderName.innerHTML = ownder_name,
        ownerEmail.innerHTML = owner_email
        ownerMobile.innerHTML = owner_mobile
        ownerSite.innerHTML = owner_site
        ownderAdress.innerHTML = ownder_adress



}

function enableSlider(imgurl) {
    let slideIndex = 1
    imgurl.forEach(item => {
        let sliderItem = document.createElement('div')
        sliderItem.classList.add('slider__img')
        sliderItem.innerHTML = `<img src="../${item}" alt="" >`
        imgContainer.append(sliderItem)
        
    })
    function showSlide() {
        let i 
        let slides = document.querySelectorAll('.slider__img')
        if (slideIndex > slides.length) {slideIndex = 1}    
        if (slideIndex < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove('slider__img__active')
        }
        slides[slideIndex-1].classList.add('slider__img__active')

    }
    showSlide()
    let sliderNext = document.querySelector('.slider__btn__right')
    let sliderPrev = document.querySelector('.slider__btn__left')
    
    sliderNext.addEventListener('click', () => {
        slideIndex++
        showSlide()
    })
    sliderPrev.addEventListener('click', () => {
        slideIndex--
        showSlide()
    })

}








