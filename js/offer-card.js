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

// console.log(currentOfferURL.search)
// console.log(currentOfferURLSearch)
// console.log(!currentOfferURLSearch.has('index'))

// if(!currentOfferURLSearch.has('index')) {
//     currentOfferURL.searchParams.set('index', localStorage.getItem('selectedOfferId'))
//     window.location.href = currentOfferURL
// }

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

        currentOfferPage = new OfferPage(
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
        currentOfferPage.buildPage()
        currentOfferPage.buildSlider()
        // currentOfferPage.turnOnSlider()
        // let offerPageContent = document.createElement('div')
        // offerPageContent.classList.add('offerpage')
        // offerPageContent.innerHTML = `
        // <div class="offerpage__main">
        //         <div class="offerpage__img__container">
        //             <div class="offerpage__title">
        //                 ${res.offers[index].name} 
        //             </div>
        //             <div class="offerpage__infobar">
        //                 <div class="offerpage__infobar__location">
        //                 ${res.offers[index].location} 
        //                 </div>
        //                 <div class="offerpage__infobar__phone">

        //                 </div>

        //             </div>
        //             <div class="offerpage__slider">
        //                 <div class="slider__img slider__img__active">
        //                     <img src="../${res.offers[index].imageURL}" alt="" srcset="">
        //                 </div>
        //                 <div class="slider__img">
        //                     <img src="../img/offer__img2.jpg" alt="">

        //                 </div>
        //                 <div class="slider__img">
        //                     <img src="../img/offer__img3.jpg" alt="">
        //                 </div>
        //                 <div class="slider__img">
        //                     <img src="../img/offer__img4.jpg" alt="">
        //                 </div>
                        
        //             </div>
        //             <div class="offerpage__img__main">
        //             </div>
        //             <div class="offerpage__slider__item__container">
        //                 <div class="offerpage__slider__item">
        //                     <img src="../${res.offers[index].imageURL}" alt="">
        //                 </div>
        //                 <div class="offerpage__slider__item">
        //                     <img src="../img/offer__img2.jpg" alt="">
        //                 </div>
        //                 <div class="offerpage__slider__item">
        //                     <img src="../img/offer__img3.jpg" alt="">
        //                 </div>
        //                 <div class="offerpage__slider__item">
        //                     <img src="../img/offer__img4.jpg" alt="">
        //                 </div>
        //             </div>
                    
        //         </div>
        //         <div class="offerpage__features">
        //             <div class="offerpage__description__header">
        //                 <div class="flex-start">
        //                     <img src="../icon/8666698_star_icon.svg" alt="">
        //                     <p>Features</p>
        //                 </div>
        //             </div>
        //                 <div class="divider"></div>
        //                 <div class="offerpage__features__text">
        //                     <div class="offerpage__features__main ">
        //                         <div class="offerpage__features__price">
        //                             <div class="offerpage__features__price__text">
        //                                 Hafta Sonu, Yemekli, Kişi Başı
        //                             </div>
        //                             ${res.offers[index].price} AZN
        //                         </div>
        //                         <div class="offerpage__features__volume ">
        //                             <div class="offerpage__features__volume__text">
        //                                 Maks. Kapasite
        //                             </div>

        //                             <p>Up to ${res.offers[index].volume} persons</p>
        //                         </div>

        //                     </div>
        //                     <div class="divider"></div>

        //                         <div class="offerpage__features__wifi offerpage__features__item">
        //                             <img src="../icon/8666629_wifi_icon.svg" alt="">
        //                             <p>Wifi</p>
        //                         </div>
        //                         <div class="offerpage__features__area offerpage__features__item">
        //                             <img src="../icon/8666718_plus_circle_icon.svg" alt="">
        //                             <p>300 m2</p>
        //                         </div>
        //                         <div class="offerpage__features__area offerpage__features__item">
        //                             <img src="../icon/8666698_star_icon.svg" alt="">
        //                             <p>Food service</p>
        //                         </div>
    

        //                 </div>
    
                    
    
        //         </div>
        //         <div class="offerpage__description">
        //             <div class="offerpage__description__header">
        //                 <div class="flex-start">
        //                     <img src="../icon/8666689_file_text_icon.svg" alt="">
        //                     <p>Description</p>
        //                 </div>
        //                 <div class="divider"></div>
        //             </div>
        //             <div class="offerpage__description__text">
        //             ${res.offers[index].description}
        //             </div>
    
        //         </div>
        //         <div class="offerpage__info">
        //             <div class="offerpage__description__header">
        //                 <div class="flex-start">
        //                     <img src="../icon/8666689_file_text_icon.svg" alt="">
        //                     <p>Business Info</p>
        //                 </div>
        //                 <div class="divider"></div>
        //                 <div class="offerpage__info__container">
        //                     <div class="offerpage__info__item">
        //                         <div class="offerpage__info__personalinfo">
        //                             <img src="../img/blank-profile-picture.png" alt="">
        //                             <p>Dmitry Svetlakov</p>
        //                         </div>
        //                     </div>
        //                     <div class="offerpage__info__item">
        //                         <div class="offerpage__info__contacts">
        //                             <div class="offerpage__info__contacts__item">
        //                                 <img src="../icon/8666723_mail_icon.svg" alt="">
        //                                 <p>demo@example.com</p>
        //                             </div>
        //                             <div class="offerpage__info__contacts__item">
        //                                 <img src="../icon/8666632_phone_icon.svg" alt="">
        //                                 <p>+994501231212</p>
        //                             </div>
        //                             <div class="offerpage__info__contacts__item">
        //                                 <img src="../icon/8666640_map_pin_icon.svg" alt="">
        //                                 <p>Baku Example St 22</p>
        //                             </div>
        //                             <div class="offerpage__info__contacts__item">
        //                                 <img src="../icon/8666725_globe_icon.svg" alt="">
        //                                 <p>www.example.com</p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
                
    
        //     </div>
        //     <div class="offerpage__sidebar">
        //         <div class="offerpage__description__header">
        //             <div class="flex-start">
        //                 <img src="../icon/8666628_user_check_icon.svg" alt="">
        //                 <p>Reservation</p>
        //             </div>
        //             <div class="divider"></div>
        //         </div>
        //         <div class="offerpage__sidebar__container">
                    
        //             <input placeholder="Enter your name, surname" name="search" class="offerpage__sidebar__date offerpage__sidebar__input">
                        
        //             </input>
        //             <input placeholder="Your phone number" name="search"class="offerpage__sidebar__name offerpage__sidebar__input">
        
        //             </input>
        //             <input placeholder="Qeyd" name="search"class="offerpage__sidebar__phone offerpage__sidebar__input">
        
        //             </input>
        //             <div class="offerpage__sidebar__btn">
        //                 Continue 
        //             </div>
                    
        //         </div>
    
        //     </div>
        
        
        // `
        // offerPageContainer.append(offerPageContent)
        // enableSlider()

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



class OfferPage {
    constructor(id, name, location, imageURL, description, volume, area, features, price, discount, discountPrice, ownder_name, owner_email, owner_mobile, ownder_adress, owner_site, owner_img) {
		this.id = id
        this.name = name
        this.location = location
        this.imageURL = imageURL
        this.price = price
        this.volume = volume
        this.area = area
        this.features = features 
        this.description = description
        this.discount = discount
        this.discountPrice = discountPrice
        this.ownder_name = ownder_name
        this.owner_email = owner_email
        this.owner_mobile = owner_mobile
        this.ownder_adress = ownder_adress
        this.owner_site = owner_site
        this.owner_img = owner_img
    }
    buildPage() {
        offerpageName.innerHTML = this.name
        offerpageLocation.innerHTML = this.location
        offerpagePrice.innerHTML = `${this.price} AZN`
        offerpageVolume.innerHTML = `Up to ${this.volume} persons`
        offerpageArea.innerHTML = `${this.area} m2`
        offerpageDescription.innerHTML = this.description
        ownderName.innerHTML = this.ownder_name,
        // ownerImg.innerHTML = 
        ownerEmail.innerHTML = this.owner_email
        ownerMobile.innerHTML = this.owner_mobile
        ownerSite.innerHTML = this.owner_site
        ownderAdress.innerHTML = this.ownder_adress

    }
    buildSlider() {
        // IMGconta = document.querySelector('.offerpage__slider')
        this.imageURL.forEach(item => {
            let slideIndex = 1
            let sliderItem = document.createElement('div')
            sliderItem.classList.add('slider__img')
            sliderItem.innerHTML = `<img src="../${item}" alt="" >`
            imgContainer.append(sliderItem)
            console.log(sliderItem)
            // for (i = 0; i < slides.length; i++) {
                //     slides[i].style.display = "none";  
                // }
                // slides[slideIndex-1].style.display = "block";  
            })
            slides2 = document.document.getElementsByClassName('slider__img')
            // console.log(document.querySelectorAll('.slider__img')[0])    
            // this.turnOnSlider()

        let sliderNext = document.querySelector('.slider__btn__right')
        let sliderPrev = document.querySelector('.slider__btn__left')
        sliderNext.addEventListener('click', () => {
            slideIndex++
        })
        function turnOnSlider(n) {
            slides = document.querySelectorAll('.slider__img')
            console.log(slides)    
            // slides[0].classList.add('slider__img__active')
        }

    }
}



function plusSlides(n) {
    showSlides(slideIndex += n);
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




    