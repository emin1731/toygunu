const dropdowns = document.querySelectorAll('.dropdown');

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
            selected.innerText = item.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(item => {
                item.classList.remove('active');
            })
            item.classList.add('active')
            console.log(e.currentTarget)
            console.log(item)
        })
    })
//  try to make id and determine dropdown by id


})


