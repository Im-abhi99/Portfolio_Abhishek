


function openPopup() {
  document.querySelector('.popup-content').style.display = 'block';
}

function closePopup() {
  document.querySelector('.popup-content').style.display = 'none';
}

document.addEventListener('mousemove', moveCursor);

function moveCursor(e)
{
  let innerCursor = document.getElementById('cursorin');
  let outerCursor = document.getElementById('cursorout');
  let x=e.clientX;
  let y=e.clientY;
  innerCursor.style.left=x+'px';
  innerCursor.style.top=y+'px';
  outerCursor.style.left=x+'px';
  outerCursor.style.top=y+'px';
}
function mousein()
{
  let innerCursor = document.getElementById('cursorin');
  innerCursor.style='width:28px; height:28px';
  let outerCursor = document.getElementById('cursorout');
  outerCursor.style='display:none';
}

function mouseout()
{
  let innerCursor = document.getElementById('cursorin');
  innerCursor.style='width:10px; height:10px';
  let outerCursor = document.getElementById('cursorout');
  outerCursor.style='display:block';
}


function mouseinw()
{
  let innerCursor = document.getElementById('cursorin');
  innerCursor.innerHTML='<img src="assets/images/expand.png" class="w-100" alt="">';
  innerCursor.style='background-color:transparent;mix-blend-mode:normal;width:30px; height:30px';
  let outerCursor = document.getElementById('cursorout');
  outerCursor.style='display:none';
}

function mouseoutw()

{
  let innerCursor = document.getElementById('cursorin');
  innerCursor.style='width:10px; height:10px';
  innerCursor
  innerCursor.style='background-color:#fff';
  innerCursor.innerHTML='<i></i>';
  let outerCursor = document.getElementById('cursorout');
  outerCursor.style='display:block';
}


//ripple effect
document.onclick = () => applyCursorRippleEffect(event); 

function applyCursorRippleEffect(e) {
   const ripple = document.createElement("div");

   ripple.className = "ripple";
   document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`; 

   ripple.style.animation = "ripple-effect .4s  linear";
   ripple.onanimationend = () => document.body.removeChild(ripple);

}

const video = document.getElementById('myVideo');
video.addEventListener('loadedmetadata', function() {
  video.currentTime = 0;
});


// gallery filter code 
function filterImages(category) {
  const images = document.querySelectorAll('.gallery .gallery-item');
  
  images.forEach(image => {
    if (category === 'all' || image.dataset.category === category) {
      image.style.display = 'block';
      
    } else {
      image.style.display = 'none';
     
    }
  });
  AOS.refresh();
}
