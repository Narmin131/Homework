const ChangeMode = document.querySelector('.btn');

const myFunc = () => {
    document.body.classList.toggle('dark-theme');
    document.querySelector('.img2').src= "dark.png";
    document.querySelector('.logo1').src= "assets/img/logo-dark.png";
    document.querySelector('.slider').style.backgroundImage= "url(assets/img/bg6.jpg)";
}
ChangeMode.addEventListener('click',myFunc);


// const ChangeMode = document.querySelector('.btn');
// const myFunc = () => {
//     document.body.classList.toggle('dark-theme');
//     if ( document.querySelector(".img2").src == "assets/img/illustration_woman.png") { 
//         document.querySelector(".img2").src = "dark.png";
//     }
//     else if(document.querySelector(".img2").src = "dark.png"){
//         document.querySelector(".img2").src = "assets/img/illustration_woman.png";
//     }
// }
// ChangeMode.addEventListener('click',myFunc);


const langen={
    item1: "Web Design",
    item2: "Development",
    item3: "Product Designs",
    item4: "IT Consulting",
    item5:"Marketing",
    item6:"We Provide Best Solutions For Your Agency"
}

const langaz={
    item1: "Veb dizayn",
    item2: "İnkişaf",
    item3: "Dizayn",
    item4: "Konsultasiya",
    item5:"Marketinq",
    item6:"Biz sizin üçün ən yaxşı təklifləri təmin edirik"
}

const btnaz = document.querySelector('.btnaz');
const btneng = document.querySelector('.btnen');
const p = document.querySelectorAll(".para");
const head = document.querySelector(".head");
const Func1 = () =>{
    p[0].innerHTML = langaz.item1;
    p[1].innerHTML = langaz.item2;
    p[2].innerHTML = langaz.item3;
    p[3].innerHTML = langaz.item4;
    p[4].innerHTML = langaz.item5;
    head.innerHTML = langaz.item6;
}
const Func2 = () =>{
    p[0].innerHTML = langen.item1;
    p[1].innerHTML = langen.item2;
    p[2].innerHTML = langen.item3;
    p[3].innerHTML = langen.item4;
    p[4].innerHTML = langen.item5;
    head.innerHTML = langen.item6;
}

btnaz.addEventListener('click',Func1);
btneng.addEventListener('click',Func2);




const hambgbtn = document.querySelector(".hamb");
const menu = document.querySelector(".menuleft");
const MenuFunc = () =>{
   menu.style.transform =  'translateX(100px)';
   menu.style.position =  'fixed';
}

hambgbtn.addEventListener('click',MenuFunc);