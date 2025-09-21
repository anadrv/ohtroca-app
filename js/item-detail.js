const images = {
  main: "/images/items/jhope-detail-img.png",
  size: "/images/items/jungsu-desktop-im1.png",
  box: "/images/items/jungsu-desktop-img2.png",
  mainDetail: "/images/items/jhope-detail-img.png"
};


const mainImage = document.getElementById("mainImage");
const thumbImage = document.getElementById("thumbImage");
const thumbSize = document.getElementById("thumbSize");
const thumbBox = document.getElementById("thumbBox");


thumbSize.addEventListener("click", () => {
  mainImage.src = images.size;
});

thumbBox.addEventListener("click", () => {
  mainImage.src = images.box;
});

thumbImage.addEventListener("click", () => {
  mainImage.src = images.mainDetail;
});