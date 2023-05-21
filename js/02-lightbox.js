import { galleryItems } from './gallery-items.js';
// Change code below this line
let listLayout = "";
for (let i = 0; i < galleryItems.length; i++) {
    listLayout += `<li><a class="gallery__link" href="${galleryItems[i].original}"><img class="gallery__image" src="${galleryItems[i].preview}" alt="${galleryItems[i].description}"></li>`;
}
document.querySelector(".gallery").insertAdjacentHTML('afterbegin', listLayout)
document.querySelectorAll(".gallery__link").forEach(element => {
   element.addEventListener("click", (e)=>{
    e.preventDefault();
    let lightbox = new SimpleLightbox(element, {captionDelay: 250,captionsData: "alt"})
    lightbox.open()
   }) 
}); 