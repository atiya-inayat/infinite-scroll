const imgContainer = document.querySelector(".image-container");

let photoArray = [];

const count = 30;
const apiKey = "CD0R-9rOWfBOjd0ulwq4Rt_Zf9p3vUJdvvQ2P9deu4o";
const apiUrl = `https:/api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function displayPhotos() {
  photoArray.forEach((photo) => {
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");

    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);

    item.append(img);
    imgContainer.append(item);
    // console.log(item);
    // console.log(photoArray);
  });
}

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photoArray = await response.json();
    displayPhotos();
  } catch {}
}

window.addEventListener("scroll", () => {
  //console.log(window.innerHeight); //visible part of screen
  //console.log(window.scrollY); //scrolled from top
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    getPhotos();
  }
});

getPhotos();
