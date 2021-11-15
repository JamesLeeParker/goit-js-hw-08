// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galeryRef = document.querySelector('.gallery');

const originalImgRef = galleryItems.map(galleryItems => galleryItems.original);

galeryRef.insertAdjacentHTML('beforeend', createImgInGalery(galleryItems));

galeryRef.addEventListener('click', lightbox);

function createImgInGalery(array) {
  const newElem = array
    .map(item => {
      return `
    <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" ">
    </a>     
    `;
    })
    .join('');

  return newElem;
}

var lightbox = new SimpleLightbox('.gallery a');
