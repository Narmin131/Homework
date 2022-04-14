// ######################################
// Change theme
// ######################################



const ChangeMode = document.querySelector('.btn2'); 
var img1 =  document.querySelector(".logo1");
var img2 = document.querySelector(".img2");
const myFunc = () => {
    document.body.classList.toggle('dark-theme');
    // img1.setAttribute("src","assets/img/logo-dark.png");
    //  img1.classList.toggle("logo1");
    // document.querySelector(".logo1").removeAttribute("src");
          if(img1.src.match("assets/img/logo.png" ) || img2.src.match("assets/img/illustration_woman.png"  )) { 
              img1.src = "assets/img/logo-dark.png";
              img2.src = "assets/img/dark.png";
            }
            else{
                img1.src = "assets/img/logo.png";
                img2.src = "assets/img/illustration_woman.png";
            }

            // if(img2.src.match("assets/img/illustration_woman.png" )) { 
            //     img2.src = "assets/img/dark.png";
            //   }
            //   else{
            //       img2.src = "assets/img/illustration_woman.png";
            //   }

}
ChangeMode.addEventListener('click',myFunc);

// ######################################
// Change language
// ######################################

const langen={
    item1: "Web Design",
    item2: "Development",
    item3: "Product Designs",
    item4: "IT Consulting",
    item5:"Marketing",
    item6:"We Provide Best Solutions For Your Agency",
    item7:"Home",
    item8:"Features",
    item9:"Blog",
    item10:"About",
    item11:"Portfolio",
    item12:"Contact",
    item13:"Hello,I am Denny",
    item14:"See projects",
    item15:"Let’s Something Know About Myself",
    item16:"My path to self employment, a natural evolution. After 7 years mastering my craft, I was still an employee and I simply had reached a ceiling of how much money I could earn in my career.",
    item17:"Professional Services",
    item18:"Exclusive Support Team",
    item19:"Best Marketing Strategy",
    item20:"Learn More"

}

const langaz={
    item1: "Veb dizayn",
    item2: "İnkişaf",
    item3: "Dizayn",
    item4: "Konsultasiya",
    item5:"Marketinq",
    item6:"Biz sizin üçün ən yaxşı təklifləri təmin edirik",
    item7:"Ana səhifə",
    item8:"Yeniliklər",
    item9:"Blog",
    item10:"Haqqında",
    item11:"Portfolio",
    item12:"Əlaqə",
    item13:"Salam Mənəm Denny!",
    item14 : "Layihələrə bax",
    item15 : "Haqqımda məlumat",
    item16 : "Öz-özünə məşğulluq yolum, təbii təkamül. 7 il sənətimi mənimsədikdən sonra mən hələ də işçi idim və sadəcə olaraq karyeramda nə qədər pul qazana biləcəyim həddə çatmışdım.",
    item17:"Profesional servis",
    item18:"Dəstək komandası",
    item19:"Marketinq Strategiyası",
    item20 :"Öyrən"
}

const btnaz = document.querySelector('.btnaz');
const btneng = document.querySelector('.btnen');
const p = document.querySelectorAll(".para");
const head = document.querySelector(".head");
const link = document.querySelectorAll(".nav-link");
const denny = document.querySelector(".denny");
const seeproject = document.querySelector(".see-project");
const abouth1 = document.querySelector(".about-h1");
const aboutp = document.querySelector(".about-p");
const h3 = document.querySelectorAll(".h3");
const more = document.querySelector(".more");
const Func1 = () =>{
    p[0].innerHTML = langaz.item1;
    p[1].innerHTML = langaz.item2;
    p[2].innerHTML = langaz.item3;
    p[3].innerHTML = langaz.item4;
    p[4].innerHTML = langaz.item5;
    head.innerHTML = langaz.item6;
    link[0].innerHTML = langaz.item7;
    link[1].innerHTML = langaz.item8;
    link[2].innerHTML = langaz.item9;
    link[3].innerHTML = langaz.item10;
    link[4].innerHTML = langaz.item11;
    link[5].innerHTML = langaz.item12;
    denny.innerHTML = langaz.item13;
    seeproject.innerHTML = langaz.item14;
    abouth1.innerHTML = langaz.item15;
    aboutp.innerHTML = langaz.item16;
    h3[0].textContent = langaz.item17;
    h3[1].innerHTML = langaz.item18;
    h3[2].innerHTML = langaz.item19;
    more.innerHTML = langaz.item20;

}
const Func2 = () =>{
    p[0].innerHTML = langen.item1;
    p[1].innerHTML = langen.item2;
    p[2].innerHTML = langen.item3;
    p[3].innerHTML = langen.item4;
    p[4].innerHTML = langen.item5;
    head.innerHTML = langen.item6;
    link[0].innerHTML = langen.item7;
    link[1].innerHTML = langen.item8;
    link[2].innerHTML = langen.item9;
    link[3].innerHTML = langen.item10;
    link[4].innerHTML = langen.item11;
    link[5].innerHTML = langen.item12;
    denny.innerHTML = langen.item13;
    seeproject.innerHTML = langen.item14;
    abouth1.innerHTML = langen.item15;
    aboutp.innerHTML = langen.item16;
    h3[0].textContent = langen.item17;
    h3[1].innerHTML = langen.item18;
    h3[2].innerHTML = langen.item19;
    more.innerHTML = langen.item20;
}

btnaz.addEventListener("click",Func1);
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


// ######################################
// Projects
// ######################################


const all = document.querySelector(".all");
const design = document.querySelector(".design");
const develop = document.querySelector(".develop");
const brand = document.querySelector(".brand");
const photo = document.querySelector(".photo");
const market = document.querySelector(".market");

const photo1 = document.querySelector(".pt1");
const photo2 = document.querySelector(".pt2");
const photo3 = document.querySelector(".pt3");
const photo4 = document.querySelector(".pt4");

const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const item4 = document.querySelector(".item4");

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");

const ChangeImg = () =>{
    // photo1.src = "assets/img/portfolio2.jpg";
    // photo2.src = "assets/img/portfolio3.jpg";
    item1.style.transform = "scale(0)";
    item1.style.transition = ".8s";
    item2.style.transform = "translateX(-570px)";
    item2.style.transition = ".5s";
    item4.style.transform = "translateY(-507px)";
    item4.style.transition = ".5s";
    item3.style.display = "none";
    // photo1.style.transform = "scale(0)";
    // photo1.style.transition = ".8s";
    // photo2.style.transform = "translateX(-570px)";
    // photo2.style.transition = ".5s";
    // photo4.style.transform = "translateY(-507px)";
    // photo3.style.transition = ".5s";
    // photo3.style.display = "none";
}

design.addEventListener('click',ChangeImg);

const ChangeDevelop = () =>{
    // photo1.src = "assets/img/portfolio2.jpg";
    // photo2.src = "assets/img/portfolio3.jpg";
    photo4.style.transform = "scale(0)";
    photo4.style.transition = ".4s";

}
develop.addEventListener('click',ChangeDevelop);



const ChangeBrand = () =>{
    photo4.style.transform = "scale(1)";
    photo4.style.transition = ".4s";
    photo2.style.transform = "scale(0)";
    photo2.style.transition = ".3s";
    item1.style.transform = "scale(1)";
    item1.style.transition = ".4s";
}

brand.addEventListener('click',ChangeBrand);


// $(".logo1").attr("src","assets/img/logo.png");
