(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-popup-open]"),
    closeModalBtn: document.querySelector("[data-popup-close]"),
    modal: document.querySelector("[data-popup]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("hidden");
  }
})();