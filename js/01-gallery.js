import { galleryItems } from './gallery-items.js';
// Change code below this line
let listLayout = "";
for (let i = 0; i < galleryItems.length; i++) {
    listLayout += `<li><a class="gallery__link" href="large-image.jpg"><img class="gallery__image" src="${galleryItems[i].preview}" data-source="${galleryItems[i].original}" alt="${galleryItems[i].description}"></li>`;
}
document.querySelector(".gallery").insertAdjacentHTML("afterbegin", listLayout)
document.querySelectorAll(".gallery__link").forEach(element => {
    element.addEventListener("click", (e)=>{
        e.preventDefault();
        const html = `<img width="1400" height="900" src="${e.target.getAttribute("data-source")}">`
        basicLightbox.create(html).show()
    })
});