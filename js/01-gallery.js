import { galleryItems } from './gallery-items.js';

const listGalleryItems = document.querySelector(".gallery");

const markupGallery = createImagesCardsMarkup(galleryItems);
listGalleryItems.insertAdjacentHTML('beforeend', markupGallery) ;
listGalleryItems.addEventListener('click', onClickImage );
let instance = "";
function createImagesCardsMarkup(galleryItems){
    const markup = galleryItems.map(({preview, original, description}) =>        
       `<div class="gallery__item">
       <a class="gallery__link" href="${original}">
         <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
         />
       </a>
     </div>`
     ).join('');    
return markup;  
}
function onClickImage(evt){
evt.preventDefault();

if(evt.target.nodeName!=="IMG"){
    return;
}
instance = basicLightbox.create(`<img src="${evt.target.dataset.source}">`);
instance.show();
}



document.addEventListener('keydown', closeModalWindow);
function closeModalWindow(event){

    if(event.code !== "Escape"){
        return;
    }
    instance.close();       

}