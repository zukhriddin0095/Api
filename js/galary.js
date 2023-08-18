


const galaryRow = document.querySelector(".galary-row");

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

function getUserRow({ title, body }) {
  return `
    <div class="alboms">
              <h2 class="name"> ${title}</h2>
              <div class="btns">
                <button class="photo-row">Photos</button>
              </div>
            </div>`;
}

galaryRow.innerHTML = `<div class="ring">Loading
  <span></span>
</div>`;

getData("https://jsonplaceholder.typicode.com/albums?userId=5", (userId) => {
  galaryRow.innerHTML = "";
  userId.map((alboms) => {
    galaryRow.innerHTML += getUserRow(alboms);
  });

  const photoROW = document.querySelector(".photo-row");

  photoROW.addEventListener("click", () => {
    location = "../photo.html";
  });
});