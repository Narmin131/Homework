const rightDiv =document.querySelector(".right-div");

// const OpenDiv = () => {
//   if (rightDiv.style.transform === "translateX(600px)" ){
//       rightDiv.style.transform = "translateX(100px)";
//       rightDiv.style.transition = '1s';
//   }else{
//     rightDiv.style.transform === "translateX(600px)";
//   }

// };

 const OpenDiv = () => {
   
    rightDiv.style.transform = "translateX(0)";
    rightDiv.style.transition = '1s'
};


const CloseDiv = () =>{
    rightDiv.style.transform = "translateX(600px)";
    rightDiv.style.transition = '1s'
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



// var cursor = {
//     delay: 8,
//     _x: 0,
//     _y: 0,
//     endX: (window.innerWidth / 2),
//     endY: (window.innerHeight / 2),
//     cursorVisible: true,
//     cursorEnlarged: false,
//     $dot: document.querySelector('.cursor-dot'),
//     $outline: document.querySelector('.cursor-dot-outline'),
    
//     init: function() {
//         // Set up element sizes
//         this.dotSize = this.$dot.offsetWidth;
//         this.outlineSize = this.$outline.offsetWidth;
        
//         this.setupEventListeners();
//         this.animateDotOutline();
//     },
    
// //     updateCursor: function(e) {
// //         var self = this;
        
// //         console.log(e)
        
// //         // Show the cursor
// //         self.cursorVisible = true;
// //         self.toggleCursorVisibility();

// //         // Position the dot
// //         self.endX = e.pageX;
// //         self.endY = e.pageY;
// //         self.$dot.style.top = self.endY + 'px';
// //         self.$dot.style.left = self.endX + 'px';
// //     },
    
//     setupEventListeners: function() {
//         var self = this;
        
//         // Anchor hovering
//         document.querySelectorAll('a').forEach(function(el) {
//             el.addEventListener('mouseover', function() {
//                 self.cursorEnlarged = true;
//                 self.toggleCursorSize();
//             });
//             el.addEventListener('mouseout', function() {
//                 self.cursorEnlarged = false;
//                 self.toggleCursorSize();
//             });
//         });
        
//         // Click events
//         document.addEventListener('mousedown', function() {
//             self.cursorEnlarged = true;
//             self.toggleCursorSize();
//         });
//         document.addEventListener('mouseup', function() {
//             self.cursorEnlarged = false;
//             self.toggleCursorSize();
//         });
  
  
//         document.addEventListener('mousemove', function(e) {
//             // Show the cursor
//             self.cursorVisible = true;
//             self.toggleCursorVisibility();

//             // Position the dot
//             self.endX = e.pageX;
//             self.endY = e.pageY;
//             self.$dot.style.top = self.endY + 'px';
//             self.$dot.style.left = self.endX + 'px';
//         });
        
//         // Hide/show cursor
//         document.addEventListener('mouseenter', function(e) {
//             self.cursorVisible = true;
//             self.toggleCursorVisibility();
//             self.$dot.style.opacity = 1;
//             self.$outline.style.opacity = 1;
//         });
        
//         document.addEventListener('mouseleave', function(e) {
//             self.cursorVisible = true;
//             self.toggleCursorVisibility();
//             self.$dot.style.opacity = 0;
//             self.$outline.style.opacity = 0;
//         });
//     },
    
//     animateDotOutline: function() {
//         var self = this;
        
//         self._x += (self.endX - self._x) / self.delay;
//         self._y += (self.endY - self._y) / self.delay;
//         self.$outline.style.top = self._y + 'px';
//         self.$outline.style.left = self._x + 'px';
        
//         requestAnimationFrame(this.animateDotOutline.bind(self));
//     },
    
//     toggleCursorSize: function() {
//         var self = this;
        
//         if (self.cursorEnlarged) {
//             self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
//             self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
//         } else {
//             self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
//             self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
//         }
//     },
    
//     toggleCursorVisibility: function() {
//         var self = this;
        
//         if (self.cursorVisible) {
//             self.$dot.style.opacity = 1;
//             self.$outline.style.opacity = 1;
//         } else {
//             self.$dot.style.opacity = 0;
//             self.$outline.style.opacity = 0;
//         }
//     }
// }

// cursor.init();


var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});