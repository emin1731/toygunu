// const burgerMenu = document.querySelector('.menu-icon') 
// const menuContent = document.querySelector('.burger__content')

//     burgerMenu.addEventListener('click', ()=> {
//         burgerMenu.classList.toggle('menu__active')
//         menuContent.classList.toggle('burger__content__active')

//     })


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

console.log(currentOfferURL.search)
console.log(currentOfferURLSearch)
console.log(!currentOfferURLSearch.has('index'))

// if(!currentOfferURLSearch.has('index')) {
//     currentOfferURL.searchParams.set('index', localStorage.getItem('selectedOfferId'))
//     window.location.href = currentOfferURL
// }
checkOfferSearchParams()

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


let offerPageContainer = document.querySelector('.offerpage__container')

function createOfferPage(index) {
    fetch('../db.json')
    .then(data => data.json())
    .then(res => {

        let offerPageContent = document.createElement('div')
        offerPageContent.classList.add('offerpage')
        offerPageContent.innerHTML = `
        <div class="offerpage__main">
                <div class="offerpage__img__container">
                    <div class="offerpage__title">
                        ${res.offers[index].name} 
                    </div>
                    <div class="offerpage__infobar">
                        <div class="offerpage__infobar__location">
                        ${res.offers[index].location} 
                        </div>
                        <div class="offerpage__infobar__phone">

                        </div>

                    </div>
                    <div class="offerpage__slider">
                        <div class="slider__img slider__img__active">
                            <img src="../${res.offers[index].imageURL}" alt="" srcset="">
                        </div>
                        <div class="slider__img">
                            <img src="../img/offer__img2.jpg" alt="">

                        </div>
                        <div class="slider__img">
                            <img src="../img/offer__img3.jpg" alt="">
                        </div>
                        <div class="slider__img">
                            <img src="../img/offer__img4.jpg" alt="">
                        </div>
                        
                    </div>
                    <div class="offerpage__img__main">
                    </div>
                    <div class="offerpage__slider__item__container">
                        <div class="offerpage__slider__item">
                            <img src="../${res.offers[index].imageURL}" alt="">
                        </div>
                        <div class="offerpage__slider__item">
                            <img src="../img/offer__img2.jpg" alt="">
                        </div>
                        <div class="offerpage__slider__item">
                            <img src="../img/offer__img3.jpg" alt="">
                        </div>
                        <div class="offerpage__slider__item">
                            <img src="../img/offer__img4.jpg" alt="">
                        </div>
                    </div>
                    
                </div>
                <div class="offerpage__features">
                    <div class="offerpage__description__header">
                        <div class="flex-start">
                            <img src="../icon/8666698_star_icon.svg" alt="">
                            <p>Features</p>
                        </div>
                    </div>
                        <div class="divider"></div>
                        <div class="offerpage__features__text">
                            <div class="offerpage__features__main ">
                                <div class="offerpage__features__price">
                                    <div class="offerpage__features__price__text">
                                        Hafta Sonu, Yemekli, Kişi Başı
                                    </div>
                                    ${res.offers[index].price} AZN
                                </div>
                                <div class="offerpage__features__volume ">
                                    <div class="offerpage__features__volume__text">
                                        Maks. Kapasite
                                    </div>

                                    <p>Up to ${res.offers[index].volume} persons</p>
                                </div>

                            </div>
                            <div class="divider"></div>

                                <div class="offerpage__features__wifi offerpage__features__item">
                                    <img src="../icon/8666629_wifi_icon.svg" alt="">
                                    <p>Wifi</p>
                                </div>
                                <div class="offerpage__features__area offerpage__features__item">
                                    <img src="../icon/8666718_plus_circle_icon.svg" alt="">
                                    <p>300 m2</p>
                                </div>
                                <div class="offerpage__features__area offerpage__features__item">
                                    <img src="../icon/8666698_star_icon.svg" alt="">
                                    <p>Food service</p>
                                </div>
    

                        </div>
    
                    
    
                </div>
                <div class="offerpage__description">
                    <div class="offerpage__description__header">
                        <div class="flex-start">
                            <img src="../icon/8666689_file_text_icon.svg" alt="">
                            <p>Description</p>
                        </div>
                        <div class="divider"></div>
                    </div>
                    <div class="offerpage__description__text">
                    ${res.offers[index].description}
                    </div>
    
                </div>
                <div class="offerpage__info">
                    <div class="offerpage__description__header">
                        <div class="flex-start">
                            <img src="../icon/8666689_file_text_icon.svg" alt="">
                            <p>Business Info</p>
                        </div>
                        <div class="divider"></div>
                        <div class="offerpage__info__container">
                            <div class="offerpage__info__item">
                                <div class="offerpage__info__personalinfo">
                                    <img src="../img/blank-profile-picture.png" alt="">
                                    <p>Dmitry Svetlakov</p>
                                </div>
                            </div>
                            <div class="offerpage__info__item">
                                <div class="offerpage__info__contacts">
                                    <div class="offerpage__info__contacts__item">
                                        <img src="../icon/8666723_mail_icon.svg" alt="">
                                        <p>demo@example.com</p>
                                    </div>
                                    <div class="offerpage__info__contacts__item">
                                        <img src="../icon/8666632_phone_icon.svg" alt="">
                                        <p>+994501231212</p>
                                    </div>
                                    <div class="offerpage__info__contacts__item">
                                        <img src="../icon/8666640_map_pin_icon.svg" alt="">
                                        <p>Baku Example St 22</p>
                                    </div>
                                    <div class="offerpage__info__contacts__item">
                                        <img src="../icon/8666725_globe_icon.svg" alt="">
                                        <p>www.example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
    
            </div>
            <div class="offerpage__sidebar">
                <div class="offerpage__description__header">
                    <div class="flex-start">
                        <img src="../icon/8666628_user_check_icon.svg" alt="">
                        <p>Reservation</p>
                    </div>
                    <div class="divider"></div>
                </div>
                <div class="offerpage__sidebar__container">
                    
                    <input placeholder="Enter your name, surname" name="search" class="offerpage__sidebar__date offerpage__sidebar__input">
                        
                    </input>
                    <input placeholder="Your phone number" name="search"class="offerpage__sidebar__name offerpage__sidebar__input">
        
                    </input>
                    <input placeholder="Qeyd" name="search"class="offerpage__sidebar__phone offerpage__sidebar__input">
        
                    </input>
                    <div class="offerpage__sidebar__btn">
                        Continue 
                    </div>
                    
                </div>
    
            </div>
        
        
        `
        // offerPageContainer.append(offerPageContent)
        enableSlider()

    })
}









function enableSlider() {
    let sliderImg = document.querySelectorAll('.slider__img')
    let sliderImgBtn = document.querySelectorAll('.offerpage__slider__item')
    
    sliderImgBtn.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            console.log(e.target.parentNode)
            sliderImg.forEach(elem => {
                elem.classList.remove('slider__img__active')
            })
            sliderImg[index].classList.add('slider__img__active')
        })
    })
    
    
    
}




    