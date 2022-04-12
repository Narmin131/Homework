// ######################################
// Change theme
// ######################################

const ChangeMode = document.querySelector('.btn2'); var img1 =  document.querySelector(".logo1");
const myFunc = () => {
    document.body.classList.toggle('dark-theme');
// var img2 =  document.querySelector(".slider").style.backgroundImage;
//     if(img1.src.match("assets/img/logo1.png")){
//         img1.src = "assets/img/logo-dark.png";
//     }
//     else{
//     img1.src = "assets/img/logo1.png";
//  } 

//     if(img2.match("url(assets/img/bg6.jpg)")){
//       img2 = "url(assets/img/bg2.jpg)";
//    }
//   else{
//     img2 = "url(assets/img/bg6.jpg)";
//    } 
}
ChangeMode.addEventListener('click',myFunc);

// ######################################
// const deyis = document.querySelector('.old');
// const CangePic = () => {
//     var img1 =  document.querySelector(".logoone");
//     if ( img1.src.match("assets/img/logo.png")) { 
//       img1.src = "assets/img/logo-dark.png";
//     }
//     else{
//         img1.src = "assets/img/logo.png";
    
//     }
// }
// deyis.addEventListener('click',CangePic);


// ######################################
// Change language
// ######################################

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



// ######################################
// Right menu
// ######################################


const hambgbtn = document.querySelector(".hamb");
const closeMenu = document.querySelector(".close");
const menu = document.querySelector(".menuleft");
const MenuFunc = () =>{
   menu.style.transform =  'translateX(0)';
   menu.style.position =  'fixed';
}

hambgbtn.addEventListener('click',MenuFunc);


const CloseMenu = () => {
    menu.style.transform =  'translateX(500px)';
    menu.style.position =  'fixed';
}
closeMenu.addEventListener('click',CloseMenu);