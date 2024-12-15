document.addEventListener("DOMContentLoaded", () => {
  const optionItems = document.querySelectorAll(".option-item");

  function handleSelection(event) {
    optionItems.forEach((item) => {
      const productVariants = item.querySelector(".product-variants");
      if (item.contains(event.target)) {
        productVariants.classList.add("visible");
        productVariants.classList.remove("hidden");
      } else {
        productVariants.classList.add("hidden");
        productVariants.classList.remove("visible");
      }
    });
  }

  optionItems.forEach((item) => {
    const radioButton = item.querySelector('input[type="radio"]');
    radioButton.addEventListener("change", handleSelection);
  });
});
