const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const inputBtn = document.querySelector('.footer_button');

console.log(items);
console.log(input);
console.log(inputBtn);

function Add(){
    const text = input.value;
    if(text===""){
        return;
    }
    const item = createItem(text);
    items.appendChild(item);
    input.value ='';
}

function createItem(text){
    const newitem = document.createElement('li');
    newitem.setAttribute('class','item_row');
   
    const item = document.createElement('div');
    item.setAttribute('class','item');
    console.log(text);
    const name = document.createElement('span');
    name.setAttribute('class','item_name');
    name.innerText=text;


    const deleteBtn = document.createElement('div');
    deleteBtn.setAttribute('class','item_delete');
    deleteBtn.innerHTML='<i class="fas fa-trash-alt"></i>';
    deleteBtn.addEventListener('click',()=>{
        items.removeChild(newitem);
    })

    const item_divider=document.createElement('div');
    item_divider.setAttribute('class','item_divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);

    newitem.appendChild(item);
    newitem.appendChild(item_divider);

    return newitem;
}

inputBtn.addEventListener('click',()=>{
    Add();
});

input.addEventListener('keypress',event=>{
    //console.log("df");
    if(event.key==="Enter"){
    Add();
    }
});

/*
items.addEventListener('click',event=>{
const id =event.target.dataset.name;
console.log(name);
if(name){
    const toBeDeleted = document.querySelector(`.item_row[data-name="${name}"]`);
        toBeDeleted.remove();
}
});

*/
