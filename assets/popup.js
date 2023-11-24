(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-popup-open]"),
    closeModalBtns: document.querySelectorAll("[data-popup-close]"),
    modal: document.querySelector("[data-popup]"),
  };

  refs.openModalBtns.forEach((btn) => {
    btn.addEventListener("click", toggleModal);
  });

  refs.closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle("hidden");
  }
})();