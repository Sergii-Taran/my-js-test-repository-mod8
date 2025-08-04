const accordionL = document.querySelector('.accordion-list');

accordionL.addEventListener('click', onClick);

function onClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  event.target.nextElementSibling.classList.toggle('active');
}

const modalBtn = document.querySelector('.modal-btn');

modalBtn.addEventListener('click', onModalClick);
const bodyEl = document.body;

let instance = null;

function onModalClick(evt) {
  instance = basicLightbox.create(
    `
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`,
    {
      onShow: () => {
        bodyEl.style.overflow = 'hidden';
        document.addEventListener('keydown', onEscClick);
      },
      onClose: () => {
        bodyEl.style.overflow = 'visible';
        document.removeEventListener('keydown', onEscClick);
      },
    }
  );

  instance.show();
}

function onEscClick(evt) {
  if (evt.code !== 'Escape') {
    return;
  }
  instance.close();
}
