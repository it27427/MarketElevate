const images = document.querySelectorAll("img");

images.forEach((img) => {
  img.addEventListener("load", () => {
    const parent = img.parentElement;

    parent.classList.add("image-loaded");
  });
});
