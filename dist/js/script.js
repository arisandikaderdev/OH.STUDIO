const imagesList = document.querySelectorAll("#image-list");

for (const images of imagesList) {
  images.addEventListener("mouseover", (e) => {
    const parentEl = e.target.parentElement;
    parentEl.firstElementChild.nextElementSibling.style.opacity = "1";
    parentEl.lastElementChild.style.opacity = "1";
  });

  images.addEventListener("mouseout", (e) => {
    const parentEl = e.target.parentElement;
    parentEl.firstElementChild.nextElementSibling.style.opacity = "0";
    parentEl.lastElementChild.style.opacity = "0";
  });
}
