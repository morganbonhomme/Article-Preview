const shareBarNotActive = document.getElementById("share-bar");
const shareButton = document.getElementById("share-button");
const article = document.getElementById("article-preview");

let isActive = false;

const toggleActiveState = () => {
  if (!isActive) {
    showActiveState()
  } else {
    showNotActiveState()
  }
  isActive = !isActive;
}

const showNotActiveState = () => {
  const shareBarActive = document.querySelector('.authorActive')
  article.removeChild(shareBarActive)
  article.appendChild(shareBarNotActive)
  
  shareButton.classList.remove("icon-containerActive");
  shareButton.classList.add("icon-container");
  shareBarNotActive.appendChild(shareButton)
}


const showActiveState = () => {
  article.removeChild(shareBarNotActive);

  const shareBarActive = document.createElement("div");
  shareBarActive.classList.add("authorActive");
  
  article.appendChild(shareBarActive);
  
  const shareText = document.createElement("p");
  shareText.textContent = "SHARE";
  
  const logoDiv = document.createElement('div')
  
  const fbLogo = document.createElement("img");
  fbLogo.setAttribute("src", "./images/icon-facebook.svg");
  fbLogo.setAttribute('alt', 'facebook logo')
  fbLogo.classList.add("logo");
  
  const twitterLogo = document.createElement("img");
  twitterLogo.setAttribute("src", "./images/icon-twitter.svg");
  twitterLogo.setAttribute('alt', 'twitter logo')
  twitterLogo.classList.add("logo");
  
  const pinterestLogo = document.createElement("img");
  pinterestLogo.setAttribute("src", "./images/icon-pinterest.svg");
  pinterestLogo.setAttribute('alt', 'pinterest logo')
  pinterestLogo.classList.add("logo");
  
  shareButton.classList.remove("icon-container");
  shareButton.classList.add("icon-containerActive");
  
  logoDiv.appendChild(fbLogo);
  logoDiv.appendChild(twitterLogo);
  logoDiv.appendChild(pinterestLogo);
  
  shareBarActive.appendChild(shareText);
  shareBarActive.appendChild(logoDiv);
  shareBarActive.appendChild(shareButton);
};

//shareButton.addEventListener('click', showActiveState)
shareButton.addEventListener("click", toggleActiveState);
