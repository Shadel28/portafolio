const hamb = document.querySelector('.fa-bars');
const x = document.querySelector('.fa-xmark');
const ul = document.querySelector('.nav_ul');


hamb.addEventListener('click', ()=>{
    hamb.classList.toggle('activa');
    ul.classList.toggle('activa');
    x.classList.toggle('activa');
})

document.querySelectorAll('.nav_item').forEach(item=>item.addEventListener('click',()=>{
    ul.classList.remove('activa');
}))