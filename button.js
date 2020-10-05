const shareButtonAuthorBar = document.querySelector("#share-button-author-bar");
const shareButtonShareBar = document.querySelector("#share-button-share-bar");

const activeShareBar = document.querySelector("#share-bar");
let isActive = false;



const toggleActiveState = () => {
  if (isActive === false) {
    activeShareBar.style.display = "flex";
    shareButtonAuthorBar.style.backgroundColor = "hsl(214, 17%, 51%)";
    shareButtonAuthorBar.children[0].style.filter = ' invert(84%) sepia(100%) saturate(0%) hue-rotate(59deg) brightness(150%) contrast(105%)'
  } else {
    activeShareBar.style.display = "none";
    shareButtonAuthorBar.style.backgroundColor = "hsl(210, 46%, 95%)";
    shareButtonAuthorBar.children[0].style.filter = 'none'
  }
  isActive = !isActive;
};

shareButtonAuthorBar.addEventListener("click", toggleActiveState);
shareButtonShareBar.addEventListener("click", toggleActiveState);
