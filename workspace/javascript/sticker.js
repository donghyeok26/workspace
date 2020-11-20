const sticker = document.querySelector('.sticker');
const rabbit = document.querySelector('.rabbit');
const pig = document.querySelector('.pig');
const panda = document.querySelector('.panda');
const dog = document.querySelector('.dog');
const stickerBtn =document.querySelector('.stickerBtn');
const stickerBtns =document.querySelectorAll('.stickerBtn button');

console.log(sticker);
console.log(rabbit);
console.log(pig);
console.log(panda);
console.log(dog);




stickerBtns.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        if(index==0){
            text='🐰';
            createItem(text);
            };
        if(index==1){
            text='🐷';
            createItem(text);
        };
        if(index==2){
            text='🐼';
            createItem(text);
        };
        if(index==3){
            text='🐶';
            createItem(text);
        }
    });
});


// const ani = ['🐰','🐷','🐼','🐶']

// ani.forEach(function(ani,index,array){
//     console.log(`forEach: ${ani},${index},${array}`)
//     name.innertext=ani;
// });

//     let text;
//     rabbit.addEventListener('click',()=>{
//          text ="🐰";
//          createItem(text);
//     })
//     pig.addEventListener('click',()=>{
//         text ="🐷";
//         createItem(text);
//     })
//     panda.addEventListener('click',()=>{
//         text="🐼";
//         createItem(text);
//     })
//     dog.addEventListener('click',()=>{
//         text="🐶";
//         createItem(text);
//     })


    function createItem (text){
    const list = document.createElement('li');
    list.setAttribute('class','sticker_list');

    list.style.display="flex";
    list.style.justifyContent="space-between";

    const name = document.createElement('div');
    name.setAttribute('class','sticker_name');
    name.innerText= text;
 
    const delbtn = document.createElement('button');
    delbtn.setAttribute('class','delbtn');
    delbtn.innerHTML=' <i class="fas fa-trash-alt"></i>';
    delbtn.addEventListener('click',()=>{
        sticker.removeChild(list);
    })


    list.appendChild(name);
    list.appendChild(delbtn);
    sticker.appendChild(list);
}