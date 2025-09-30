const searchBtn =document.querySelector('.search-btn');
const searchInput =document.querySelector('.search-box input');
const cardWrapper = document.querySelector('.content-main__list');
const cardArray =[
    {
        id:1,
        title:'Первый товар',
        price:'170 Руб',
        address:'Казань, р-н Вахитовский',
        date:'10 июля 11:39',
        img:'../img/tree.png'
    },
    {
        id:2,
        title:'Второй товар',
        price:'171 Руб',
        address:'Казань, р-н Вахитовский',
        date:'10 июля 11:39',
        img:'../img/tree.png'
    },
    {
        id:3,
        title:'Третий товар',
        price:'172 Руб',
        address:'Казань, р-н Вахитовский',
        date:'10 июля 11:39',
        img:'../img/tree.png'
    },
    {
        id:4,
        title:'Четвертый товар',
        price:'173 Руб',
        address:'Казань, р-н Вахитовский',
        date:'10 июля 11:39',
        img:'../img/tree.png'
    },{
        id:5,
        title:'Пятый товар',
        price:'174 Руб',
        address:'Казань, р-н Вахитовский',
        date:'10 июля 11:39',
        img:'../img/tree.png'
    },{
        id:6,
        title:'Шестой товар',
        price:'175 Руб',
        address:'Казань, р-н Вахитовский',
        date:'10 июля 11:39',
        img:'../img/tree.png'
    }


]
const render =(cardList) =>{
    cardWrapper.innerHTML = ''
    cardList.forEach((item) => {
       cardWrapper.insertAdjacentHTML('beforeend',
           `<a href="product.html"  class="content-main__list-item">
                    <div class="content-main__list-item--img"><img src="${item.img}" alt="tree.png"></div>
                    <h5 class="content-main__list-item--title">${item.title}</h5>
                    <strong class="content-main__list-item--price">${item.price}</strong>
                    <div class="content-main__list-item--desc-box">
                       <span class="content-main__list-item--desc">${item.address}</span>
                       <span class="content-main__list-item--desc">${item.date}</span>
                    </div>
                  </a>`)
    })
}

cardWrapper.style.justifyContent = 'flex-start';
cardWrapper.style.rowGap = 'normal';
cardWrapper.style.gap = '30px';
render(cardArray);
const filteredArray =(array,value) =>{
    console.log(array);
    console.log(value);
    return array.filter((item) =>{
        return item.title.includes(value) || item.price.includes(value)
    })
}
searchBtn.addEventListener('click', ()=>{
    render(filteredArray(cardArray,searchInput.value));
})
