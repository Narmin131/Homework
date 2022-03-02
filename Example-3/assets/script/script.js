// Fixed nav
$(document).ready(function() {
  $(window).scroll(function () { 
    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 50) {
      $('header').addClass('fixed-nav');
      // $('.blue').css('color',"black");
      // $('.imglogo').css('src',"././assets/img/logo.png");
    }

    if ($(window).scrollTop() < 51) {
      $('header').removeClass('fixed-nav');
    }
  });
});

// Faq accordion added
 const faqs = document.querySelectorAll(".faq");
 faqs.forEach((faq) =>{
     faq.addEventListener("click",() => {
       faq.classList.toggle("active");
     });
 });