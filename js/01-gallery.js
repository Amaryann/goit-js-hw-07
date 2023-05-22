import { galleryItems } from './gallery-items.js';
// Change code below this line
const generateMarkup = (list) => {
    return list.map(element => `<li><a class="gallery__link" href="large-image.jpg"><img class="gallery__image" src="${element.preview}" data-source="${element.original}" alt="${element.description}"></li>`).join("")
}
let gallery = document.querySelector(".gallery")
gallery.insertAdjacentHTML("afterbegin", generateMarkup(galleryItems))
const handleClick = (e) => {
    if (e.target.nodeName === "UL"){
       return
    }
    e.preventDefault();
    const html = `<img width="1400" height="900" src="${e.target.getAttribute("data-source")}">`
    basicLightbox.create(html).show()

}
gallery.addEventListener("click", handleClick)