const wishlist = document.querySelector('.wishlist');
const text_input = document.querySelector('.text_input');
const text_enter = document.querySelector('.text_enter');
const check = document.querySelector('.check');

console.log(text_input);
console.log(text_enter);

function onAdd(){
    const text = text_input.value;
    console.log(text);

    if(text === ''){
        return;
    }

    const wish = createWish(text);
    wishlist.appendChild(wish);
    text_input.value ='';
}


let num = 1;

function createWish(text){
    const wishRow = document.createElement('li');
    wishRow.setAttribute('class', 'wishrow');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const wishNum = document.createElement('span');
    wishNum.setAttribute('class', 'wishnum');
    wishNum.innerHTML = num;
    num++;

    const wishDo = document.createElement('span');
    wishDo.setAttribute('class', 'wishdo');
    wishDo.innerHTML = text;

    const btnBox = document.createElement('div');
    btnBox.setAttribute('class', 'btnbox');

    const checkBtn = document.createElement('button');
    checkBtn.setAttribute('class', 'checkbtn');
    checkBtn.innerHTML = ('<i class="far fa-check-square"></i>');
    checkBtn.addEventListener('click', () => {
        wishDo.style.textDecoration = 'line-through red';
    })

    const delBtn = document.createElement('button');
    delBtn.setAttribute('class', 'checkbtn');
    delBtn.innerHTML = ('<i class="far fa-minus-square"></i>');
    delBtn.addEventListener('click', () => {
        wishlist.removeChild(wishRow);
    })

    item.appendChild(wishNum);
    item.appendChild(wishDo);
    item.appendChild(btnBox);
    item.appendChild(checkBtn);
    item.appendChild(delBtn);

    wishRow.appendChild(item);

    return wishRow;
}


text_enter.addEventListener('click',() =>{
    onAdd();
})

text_input.addEventListener('keypress', (event) => { 
    if(event.key == 'Enter'){
        onAdd();
    }
})


/*
let id = 0;
function createWish(text){
    const wishRow = document.createElement('li');
    wishRow.setAttribute('class', 'wish');
    wishRow.setAttribute('data-id', id);
    wishRow.innerHTML =`<span class="wishname">${text}</span>
                        <button class="del"><i class="far fa-minus-square" data-id=${id}></i></button>`
    id++;

    const check = document.createElement('button');
    check.setAttribute('class', 'check');
    check.innerHTML = ('<i class="far fa-check-square></i>');
    check.addEventListener('click', () => {
        wish.removeChild(wishRow);
    })
    return wishRow;
}

wishlist.addEventListener('click', (event) =>{
    const idn = event.target.dataset.id;
    if(idn){
        const toBeDeleted = document.querySelector(`.wish[data-id="${idn}"]`);
        toBeDeleted.remove();;
    }
})


*/
