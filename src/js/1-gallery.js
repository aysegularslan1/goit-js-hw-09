import { images } from './images.js';

const galleryList = document.querySelector('.gallery');

const markup = images
  .map(
    ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" alt="${description}" />
      </a>
    </li>`
  )
  .join('');

galleryList.innerHTML = markup;

const lightbox = new window.SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
