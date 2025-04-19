import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = form.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({ message: 'Please enter something to search' });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const { hits, totalHits } = await getImagesByQuery(query);

    hideLoader();

    if (!hits.length) {
      iziToast.error({ message: 'No images found. Try again!' });
      return;
    }

    createGallery(hits);
  } catch (err) {
    hideLoader();
    iziToast.error({ message: 'Something went wrong. Try later!' });
  }
});