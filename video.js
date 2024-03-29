const Fullscreen=document.getElementById('Fullscreen')
const smallScreen=document.getElementById('SmallScreen')
const elem=document.getElementById('rain')
Fullscreen.addEventListener('click',()=>{
   if (elem.requestFullscreen) {
       elem.requestFullscreen();
    } 
    else if (elem.webkitRequestFullscreen) { /* Safari */
             elem.webkitRequestFullscreen();
              } 
          else if (elem.msRequestFullscreen) { /* IE11 */
             elem.msRequestFullscreen();
           }
})