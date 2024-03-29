const parent=document.querySelector('#parent');
const child1=document.querySelector('#child1');
const child2=document.querySelector('#child2');
parent.addEventListener('click',()=>{
    alert("parent");
});
child1.addEventListener('click',(e)=>{
    
    alert("child1");
    e.stopPropagation();
});
child2.addEventListener('click',(e)=>{
    
    alert("child2");
    e.stopPropagation();
})
