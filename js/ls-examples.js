import {
  addDataToLocalStorage,
  getdataFromlocalStorage,
} from './localStorage-api.js';

import { refs } from './refs.js';

// light theme is default, that's why themeSwitcher is unchecked
// themeSwitcher.checked = false;

refs.checkbox.addEventListener('click', onCheckBoxChange);
document.addEventListener('DOMContentLoaded', renderPage);

function onCheckBoxChange(event) {
  // if you change theme to dark, add 'dark' class and remove previus, add this change to local storage
  // if you select light theme do the same work but add 'light' class

  const checked = event.target.checked;
  if (checked) {
    addDataToLocalStorage('switch', 'dark');
    refs.body.classList.replace('light', 'dark');
  } else {
    addDataToLocalStorage('switch', 'light');
    refs.body.classList.replace('dark', 'light');
  }
}

function renderPage() {
  const LSData = getdataFromlocalStorage('switch');
  if (LSData === 'dark') {
    refs.body.classList.replace('light', 'dark');
    refs.checkbox.checked = true;
  } else {
    refs.body.classList.replace('dark', 'light');
  }
}
