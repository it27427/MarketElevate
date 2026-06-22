document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  const percent = document.querySelector(".loader-percent");

  let count = 0;

  const loaderInterval = setInterval(() => {
    count++;

    percent.innerText = count + "%";

    if (count >= 100) {
      clearInterval(loaderInterval);

      setTimeout(() => {
        preloader.classList.add("preloader-hide");
      }, 400);
    }
  }, 15);
});
