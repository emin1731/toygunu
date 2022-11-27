// const dropdowns = document.querySelectorAll('.dropdown');

// dropdowns.forEach(item => {
//     const select = item.querySelector('.select');
//     const caret = item.querySelector('.caret');
//     const menu = item.querySelector('.menu');
//     const options = item.querySelectorAll('.menu li');
//     const selected = item.querySelector('.selected');
//     let dropdownPrice = '';
//     let dropdownValue = '';


    
//     select.addEventListener('click', () => {

//         select.classList.toggle('select-clicked');
//         caret.classList.toggle('caret-rotate');
//         menu.classList.toggle('menu-open');
//     })

//     options.forEach(item => {
//         item.addEventListener('click', (e) => {
//             selected.innerText = item.innerText;
//             select.classList.remove('select-clicked');
//             caret.classList.remove('caret-rotate');
//             menu.classList.remove('menu-open');
//             options.forEach(item => {
//                 item.classList.remove('active');
//             })
//             item.classList.add('active')
//             // console.log(e.currentTarget.id)
//             // console.log(item.parentNode.parentNode.id)

//             if(item.parentNode.parentNode.id === 'dropdown-price') {
//                 dropdownPrice = e.currentTarget.id
//                 console.log(dropdownPrice)
//             }
//             else {
//                 console.log('it is not price')

//                 dropdownValue = e.currentTarget.id
//                 console.log(dropdownValue)
//             }

//         })
//     })

    
// })



    // const postData = async (url, data) => {
    //     const res = await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json;charset=utf-8'
    //         },
    //         body: data
    //     })
    //     return await res.json();
    // };


    // fetch("db.json",
    // {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json;charset=utf-8'
    //     },
    //     body: JSON.stringify(\)
    // })

//  try to make id and determine dropdown by id

