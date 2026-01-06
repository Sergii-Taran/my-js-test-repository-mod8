// const accordionL = document.querySelector('.accordion-list');

// accordionL.addEventListener('click', onClick);

// function onClick(event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   event.target.nextElementSibling.classList.toggle('active');
// }

// const modalBtn = document.querySelector('.modal-btn');

// modalBtn.addEventListener('click', onModalClick);
// const bodyEl = document.body;

// let instance = null;

// function onModalClick(evt) {
//   instance = basicLightbox.create(
//     `
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `,
//     {
//       onShow: () => {
//         bodyEl.style.overflow = 'hidden';
//         document.addEventListener('keydown', onEscClick);
//       },
//       onClose: () => {
//         bodyEl.style.overflow = 'visible';
//         document.removeEventListener('keydown', onEscClick);
//       },
//     }
//   );

//   instance.show();
// }

// function onEscClick(evt) {
//   if (evt.code !== 'Escape') {
//     return;
//   }
//   instance.close();
// }

// ===================================== //

// ==========================
// ACCORDION
// ==========================

const accordionList = document.querySelector('.js-accordion-list');

accordionList.addEventListener('click', onAccordionClick);

function onAccordionClick(event) {
  // шукаємо кнопку акордеону (навіть якщо клік по span / тексту)
  const accordionBtn = event.target.closest('.js-accordion-btn');
  if (!accordionBtn) return;

  // знаходимо відповідну панель
  const panel = accordionBtn.nextElementSibling;
  if (!panel) return;

  panel.classList.toggle('active');
}

// ==========================
// MODAL
// ==========================

const modalBtn = document.querySelector('.modal-btn');
const bodyEl = document.body;

let instance = null;

modalBtn.addEventListener('click', onModalOpen);

function onModalOpen() {
  instance = basicLightbox.create(
    `
    <div class="modal">
      <p> 
        Your first lightbox with just a few lines of code.
        Yes, it's really that simple.
      </p>
      <button class="modal-close-btn" type="button">Close</button>
    </div>
    `,
    {
      onShow: (instance) => {
        bodyEl.style.overflow = 'hidden';
        document.addEventListener('keydown', onEscPress);

        // закриття по кліку на бекдроп
        instance.element().addEventListener('click', onBackdropClick);

        // закриття по кнопці
        const closeBtn = instance.element().querySelector('.modal-close-btn');
        closeBtn.addEventListener('click', () => instance.close());
      },

      onClose: () => {
        bodyEl.style.overflow = 'visible';
        document.removeEventListener('keydown', onEscPress);
      },
    }
  );

  instance.show();
}

function onEscPress(event) {
  if (event.key !== 'Escape') return;
  instance.close();
}

function onBackdropClick(event) {
  // якщо клік саме по бекдропу, а не по контенту
  if (event.target === event.currentTarget) {
    instance.close();
  }
}
