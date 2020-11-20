const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');

console.log(items);
console.log(input);
console.log(addBtn);



function onAdd() {
    //1. 사용자가 입력한 텍스트 받기
    const text = input.value;
    if (text===''){
        return;
    }
    //2. 새로운 item 을 만듬
    const item = createItem(text);
    //3. items 컨테이너에 새로만든 item 을 추가
    items.appendChild(item);
    //4. 입력 값 초기화
    input.value ='';
}
let id = 0; //id
function createItem(text) {

    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item_row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML=`<div class="item">
                        <span class="item_name">${text}</span>
                        <button class="item_delete">
                            <i class="fas fa-trash-alt" data-id=${id}></i>
                        </button>
                       </div>
                       <div class="item_divider"></div>`;
  
    id++;
    // const item = document.createElement('div');
    // item.setAttribute('class', 'item');
  
    // const name = document.createElement('span');
    // name.setAttribute('class', 'item_name');
    // name.innerText = text;
  
    // const deleteBtn = document.createElement('button');
    // deleteBtn.setAttribute('class', 'item_delete');
    // deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    // deleteBtn.addEventListener('click', () => {
    //   itemRow.remove();
    // });
  
    // const itemDivider = document.createElement('div');
    // itemDivider.setAttribute('class', 'item_divider');
  
    // item.appendChild(name);
    // item.appendChild(deleteBtn);
  
    // itemRow.appendChild(item);
    // itemRow.appendChild(itemDivider);
    return itemRow;
  }
  
  addBtn.addEventListener('click', () => {
    onAdd();
  });
  

  input.addEventListener('keypress',(event) => {
    if (event.key === 'Enter') {
      onAdd();
    }
  });

  items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if (id) {
      const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
      toBeDeleted.remove();
    }
  });


  
