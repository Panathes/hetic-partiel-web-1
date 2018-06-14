// Features #2
var headernav = document.querySelector('.headernav');
var lastscroll = 0;
var currentscroll = window.pageYOffset;

window.addEventListener('scroll', function(){
  if (currentscroll < lastscroll){
    show();
  }
  if (currentscroll > lastscroll){
    hide();
  }
    lastscroll = currentscroll;
});

function hide(){
  headernav.classList.remove("headernav-show");
  headernav.classList.add("headernav-hide");
}

function show(){
  headernav.classList.remove("headernav-hide");
  headernav.classList.add("headernav-show");
}

// Features #1
