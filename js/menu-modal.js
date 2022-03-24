const refs = {
  heroBtn: document.querySelector('[data-hero-button]'),
  modalBackdrop: document.querySelector('[data-modal-backdrop]'),
  closeModal: document.querySelector('[data-modal-close]'),
};

refs.heroBtn.addEventListener('click', onModalOpen);
refs.modalBackdrop.addEventListener('click', onBackdropClick);

function onModalOpen() {
  refs.closeModal.addEventListener('click', onModalClose);
  refs.modalBackdrop.classList.remove('is-hidden');
}

function onModalClose() {
  refs.closeModal.removeEventListener('click', onModalClose);
  refs.modalBackdrop.classList.add('is-hidden');
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onModalClose();
  }
}
