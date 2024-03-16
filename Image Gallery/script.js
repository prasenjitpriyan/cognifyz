const imgArray = [
  "/images/image1.jpeg",
  "/images/image2.jpeg",
  "/images/image3.jpeg",
  "/images/image4.jpeg",
  "/images/image5.jpeg",
  "/images/image6.jpeg",
  "/images/image7.jpeg",
  "/images/image8.jpeg",
  "/images/image9.jpeg",
  "/images/image10.jpeg",
]

const imageThumbs = document.getElementById("image-thumbs");
const currentImage = document.getElementById("current-image");

for (let index = 1; index < imgArray.length; index++) {
  const thumb = document.createElement("img");
  thumb.src = imgArray[index]
  thumb.classList.add("thumb");
  imageThumbs.appendChild(thumb);
  thumb.addEventListener(
    "click", function () {
      currentImage.src = this.src;
    }
  );
}

let x = 0;

function changeImage() {
  const img = document.getElementById("img");
  img.src = imgArray[x];
  x = (x + 1) % imgArray.length;
}

const intervalId = setInterval(changeImage, 3000);