const items = document.querySelector('.items'); // ul
const input = document.querySelector('.main_input');
const addBtn = document.querySelector('.footer_button');

console.log(items);
console.log(input);
console.log(addBtn);

function onadd(){
    // 1. 사용자가 입력한 텍스트 받기
    const text = input.value;
    console.log(text);
    if(text ===''){
        return;
    }
    // 2. 입력한 텍스트를 새로운 item으로 추가
    const item = createItem(text);
    // 3. itemlist에 추가
    items.appendChild(item);
    //4 . 입력 값 초기화
    input.value ='';
}

let id = 0; //id
function createItem(text){
    const itemRow = document.createElement('li'); 
    itemRow.setAttribute('class', 'item_row'); 
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML =`<div class="item"><span class="item_name">${text}</span><button class="item_delete"><i class="fas fa-trash" data-id=${id}></i></button></div><div class="item_divider"></div>`;
    id++;
    return itemRow;
}

items.addEventListener('click', (event) => {
    // console.log('brake point');
    const idn = event.target.dataset.id;
    console.log(idn);
    if (idn) {
        const toBeDeleted = document.querySelector(`.item_row[data-id="${idn}"]`);
        toBeDeleted.remove();
      }
})

addBtn.addEventListener('click', () => {
    onadd();
})

input.addEventListener('keypress', (event) => { 
    if(event.key == 'Enter'){
        onadd();
    }
})