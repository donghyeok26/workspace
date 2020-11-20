const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');

console.log(items);
console.log(input);
console.log(addBtn);

function onAdd(){
    //1. 사용자가 입력한 텍스트 받기
    const text = input.value; //input 의 value값을 받아옴
    if(text===''){
        return;
    }
    console.log(text);
    //2. 새로운 item을 만듬\
    const item = createItem(text);
    //3. items 컨테이너에 새로만든 아이템
    items.appendChild(item);
    //4. 입력 값 초기화
    input.value = '';
}
/*let id = 0;*/
function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item_row');//클레스를 만들어줌
    /*itemRow.setAttribute('data-id',id);
    itemRow.innerHTML=`<div class="item">
                        <span class="item_name">${text}</span>
                        <button class="item_delete">
                        <i class="fas fa-trash-alt" }></i>
                        </button>
                        </div>
                        <div class="item_divider"></div>`;
                        */
    
    const item= document.createElement('div');
    item.setAttribute('class','item');

    const name =document.createElement('span');
    name.setAttribute('class','item_name');
    name.innerText = text;

    const deleteBtn = document.createElement('div');
    deleteBtn.setAttribute('class','item_delete');
    deleteBtn.innerHTML='<i class="fas fa-trash-alt"></i>';
    deleteBtn.addEventListener('click',()=>{
        items.removeChild(itemRow);
    })

const item_divider=document.createElement('div');
item_divider.setAttribute('class','item_divider');

item.appendChild(name);
item.appendChild(deleteBtn);

itemRow.appendChild(item);
itemRow.appendChild(item_divider);

item.style.display="flex";
item.style.justifyContent="space-between";



return itemRow;
}
addBtn.addEventListener('click',()=>{
    onAdd();
})

input.addEventListener('keypress',event=>{
    if(event.key==="Enter"){
        onAdd();
    }
});
/*
items.addEventListener('click',event=>{
    
    
    const id =event.target.dataset.id;
    console.log(id);
    if(id){
        const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
            toBeDeleted.remove();
    };
});
*/