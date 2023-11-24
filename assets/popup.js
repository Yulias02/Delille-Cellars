(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-popup-open]"),
    closeModalBtn: document.querySelectorAll("[data-popup-close]"),
    modal: document.querySelector("[data-popup]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("hidden");
  }
})();