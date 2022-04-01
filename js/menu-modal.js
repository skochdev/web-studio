const refs = {
  heroBtn: document.querySelector('[data-hero-button]'),
  modalBackdrop: document.querySelector('[data-modal-backdrop]'),
  closeModal: document.querySelector('[data-modal-close]'),
  modalFormRef: document.querySelector('[data-modal-form]'),
};

refs.heroBtn.addEventListener('click', onModalOpen);

function onModalOpen() {
  refs.modalBackdrop.addEventListener('click', onBackdropClick);
  refs.closeModal.addEventListener('click', onModalClose);
  refs.modalFormRef.addEventListener('submit', onSubmit);
  refs.modalBackdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}

function onModalClose() {
  refs.closeModal.removeEventListener('click', onModalClose);
  refs.modalFormRef.removeEventListener('submit', onSubmit);
  refs.modalBackdrop.classList.add('is-hidden');
  document.body.style.overflow = 'auto';
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onModalClose();
  }
}

function onSubmit(e) {
  e.preventDefault();
  onModalClose();
}
