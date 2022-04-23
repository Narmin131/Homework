// #################################################
// First way
// #################################################

// // check for saved 'darkMode' in localStorage
// let darkMode = localStorage.getItem('darkMode'); 
// // let lightMode = localStorage.getItem('lightMode'); 
// const darkModeToggle = document.querySelector('.buton');

// const enableDarkMode = () => {
//   // 1. Add the class to the body
//   document.body.classList.add('darkmode');
//   // 2. Update darkMode in localStorage
//   localStorage.setItem('darkMode', 'enabled');
// }

// const disableDarkMode = () => {
//   // 1. Remove the class from the body
//   document.body.classList.remove('darkmode');
//   // 2. Update darkMode in localStorage 
//   localStorage.setItem('darkMode', null);
// }
 
// // If the user already visited and enabled darkMode
// // start things off with it on
// if (darkMode === 'enabled') {
//   enableDarkMode();
// }

// // When someone clicks the button
// darkModeToggle.addEventListener('click', () => {
//   // get their darkMode setting
//   darkMode = localStorage.getItem('darkMode'); 
  
//   // if it not current enabled, enable it
//   if (darkMode !== 'enabled') {
//     enableDarkMode();
//   // if it has been enabled, turn it off  
//   } else {  
//     disableDarkMode(); 
//   }
// });


// // #################################################
// // Second way
// // #################################################

// const Btn = document.querySelector('.buton');
// const bodyElement = document.querySelector('body');
// const darkMode = () => {
//     bodyElement.classList.toggle('dark')
// }

// Btn.addEventListener('click', () => {
//     // Get the value of the "dark" item from the local storage on every click
//     setDarkMode = localStorage.getItem('dark');

//     if(setDarkMode !== "on") {
//         darkMode();
//         // Set the value of the itwm to "on" when dark mode is on
//         setDarkMode = localStorage.setItem('dark', 'on');
//     } else {
//         darkMode();
//         // Set the value of the item to  "null" when dark mode if off
//         setDarkMode = localStorage.setItem('dark', null);
//     }
// });

// // Get the value of the "dark" item from the local storage
// let setDarkMode = localStorage.getItem('dark');

// // Check dark mode is on or off on page reload
// if(setDarkMode === 'on') {
//     darkMode();
// }

// #################################################
// Third way
// #################################################
// const Btn = document.querySelector('.buton');
// document.addEventListener('DOMContentLoaded', () => {
//   Btn.addEventListener('click', () => {
//     document.body.classList.toggle('dark');

//     localStorage.setItem(
//       'theme',
//       document.body.classList.contains('dark') ? 'dark' : 'light'
//     );
//   });

//   if (localStorage.getItem('theme') === 'dark') {
//     document.body.classList.add('dark');
//   }
// });



// Fourth way
let theme = localStorage.getItem('data-theme');
const Btn = document.querySelector('.buton');
const changeThemeToDark = () =>{
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
}

const changeThemeToLight = () =>{
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", 'light');
}

if(theme === 'dark'){
    changeThemeToDark()
}

Btn.addEventListener('click', ()=> {
    let theme = localStorage.getItem('data-theme');
    if (theme ==='dark'){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }
   
});





// Change imgs with buttons
const btnleft = document.querySelector(".btn-left");
const btnright = document.querySelector(".btn-right");
const img = document.querySelector('.change-img');
const ChangeImg = () =>{
     img.src = "assets/img/4.jpg" ;
    // localStorage.getItem('img') = "assets/img/4.jpg" ;
  
}

btnright.addEventListener('click',ChangeImg);

const BackImg = () =>{
  img.src = "assets/img/dark.jpg";  

}
btnleft.addEventListener('click',BackImg);


// Example 
// let mode;

// const darkModeToggle = document.querySelector('.buton');
// mode = localStorage.getItem('mode');


// const Myfunc = () =>{
//   if (mode = 'light'){
//     lightMode();
//   }else{
//     darkMode();
//   }
// }
// darkModeToggle.addEventListener('click',Myfunc);

// function darkMode() {
//    document.body.classList.add('darkmode');
//     localStorage.setItem('mode', 'dark');
//     mode = localStorage.getItem('mode');
// }

// function lightMode() {
//    document.body.classList.remove('darkmode');
//     localStorage.setItem('mode', 'light');
//     mode = localStorage.getItem('mode');
// }


// 
// const img1 = document.querySelector(".image");
// const butis = document.querySelector(".butis");

// const ImageChange = () =>{
//   img1.classList.toggle("dark1");
// }
// butis.addEventListener('click',ImageChange);




// Change Language

// const az = document.querySelector('.az');
// const en = document.querySelector('.en');
// const navLink = document.querySelectorAll('.navlink');
// const project = document.querySelector('.project');
// const langEn = {
//     item1:'Main',
//     item2:'Gallery',
//     item3:'Projects',
//     item4:'Certifications',
//     item5:'Contacts',
//     item6:'Project'
// }
// const langAz = {
//     item1:'Əsas',
//     item2:'Qalereya',
//     item3:'Layihələr',
//     item4:'Sertifikatlar',
//     item5:'Əlaqələr',
//     item6:'Proyekt'
// }

// const AzLangFunc = () =>{
//      navLink[0].innerHTML=langAz.item1;
//      navLink[1].innerHTML=langAz.item2;
//      navLink[2].innerHTML=langAz.item3;
//      navLink[3].innerHTML=langAz.item4;
//      navLink[4].innerHTML=langAz.item5;
//      project.innerHTML = langAz.item6;
//    
    
// }   
// const EnLangFunc = () =>{
//     navLink[0].innerHTML=langEn.item1;
//     navLink[1].innerHTML=langEn.item2;
//     navLink[2].innerHTML=langEn.item3;
//     navLink[3].innerHTML=langEn.item4;
//     navLink[4].innerHTML=langEn.item5;
//     project.innerHTML = langEn.item6;
//
// }
// az.addEventListener('click',AzLangFunc);
// en.addEventListener('click',EnLangFunc);




const langBtn = document.querySelector('.lang');

const az = ['Ana Səhifə','Haqqımızda','Məhsullar','Əlaqə','Bloq'];
const en = ['Home','About','Product','Contact','Blog'];
const link = document.querySelectorAll('a');
const multiLang =()=>{
    if (langBtn.innerHTML == "az") {
        for(let x = 0; x<az.length;x++){
            link[x].innerHTML = az[x];
        }
        localStorage.setItem('lang',az);
        localStorage.setItem('langBtn','en');

        langBtn.innerHTML = "en";
    }else{
        for(let x = 0; x<en.length;x++){
            link[x].innerHTML = en[x];
        }
        localStorage.setItem('lang',en);
        localStorage.setItem('langBtn','az');
        langBtn.innerHTML = "az";


    }
}

langBtn.innerHTML = localStorage.getItem('langBtn');
for(let x = 0; x<en.length;x++){
    link[x].innerHTML = localStorage.getItem('lang').split(',')[x];
}
langBtn.addEventListener('click',multiLang);
