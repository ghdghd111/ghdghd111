const items = document.querySelector('.items');
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

function createItem(text){
    const itemRow = document.createElement('li'); // li 추가
    itemRow.setAttribute('class', 'item_row'); // class명 변경

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name= document.createElement('span');
    name.setAttribute('class', 'item_name');
    name.innerText = text; // text 값만 받아 옴

    const deleteBtn = document.createElement('div');
    deleteBtn.setAttribute('class', 'item_delete');
    
    deleteBtn.innerHTML = ('<i class="fas fa-trash"></i>')
    deleteBtn.addEventListener('click',() => {
        items.removeChild(itemRow);
    })

    const item_divider = document.createElement('div');
    item_divider.setAttribute('class', 'item_divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);

    
    itemRow.appendChild(item);
    itemRow.appendChild(item_divider);
    return itemRow;
}

addBtn.addEventListener('click', () => {
    onadd();
})

input.addEventListener('keypress', (event) => { 
    if(event.key == 'Enter'){
        onadd();
    }
})