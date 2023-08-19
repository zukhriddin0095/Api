

const Photos = document.querySelector(".photos-row");

function getData(url, callback) {
  let Xhr = new XMLHttpRequest();

  Xhr.onreadystatechange = function () {
    if (Xhr.readyState === 4 && Xhr.status === 200) {
      let resJson = Xhr.response;
      let res = JSON.parse(resJson);
      callback?.(res);
    } else if (Xhr.readyState === 4) {
      console.log(Xhr.status);
    }
  };

  Xhr.open("get", url);
  Xhr.send();
}

function getcommentsRow({url, title}) {
  return `<img class="photos" src="${url}" alt="${title}">`;
}

Photos.innerHTML = `<div class="ring">Loading
  <span></span>
</div>`;

getData("https://jsonplaceholder.typicode.com/photos?albumId=2", (photos) => {
  Photos.innerHTML = "";
  photos.map((photo) => {
    Photos.innerHTML += getcommentsRow(photo);
  });
});