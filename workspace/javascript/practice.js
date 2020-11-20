const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const plusBtn = document.querySelector('.footer_button');

function Add(){
    const text = input.value;
        if(text===""){
            return;
        }
    const item = createItem(text);
    items.appendChild(text);
    input.value="";
}

