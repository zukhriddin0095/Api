const usersCard = document.querySelector(".cards-row");
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
function getUserRow({ name, username, email, phone, website }) {
  return `
    <div class="card">
              <h2 class="name"> ${name}</h2>
              <h3 class="username"> ${username}</h3>
              <a href="mailto:${email}" class="Email">${email}</a>
              <a href="tel:${phone}" class="Phone number">${phone}</a>
              <a href="${website}">${website}</a>
              <div class="btns">
                <button class="Todos">Todos</button>
                <button class="Posts">Posts</button>
                <button class="Galarey-row">Galary</button>
              </div>
            </div>`;
}

usersCard.innerHTML = `<div class="ring">Loading
  <span></span>
</div>`;

getData("https://jsonplaceholder.typicode.com/users", (users) => {
  usersCard.innerHTML = "";

  users.map((user) => {
    usersCard.innerHTML += getUserRow(user);
  });

  // const TodosRow = document.querySelector(".Todos");
  // const PostsRow = document.querySelector(".Posts");
  // const Galarey = document.querySelector(".Galarey-row");

  // TodosRow.addEventListener("click", () => {
  //   location = "../todos.html";
  // });

  // PostsRow.addEventListener("click", () => {
  //   location = "../posts.html";
  // });

  // Galarey.addEventListener("click", () => {
  //   location = "../galary.html";
  // });
  // Tugmalarni DOM ga qo'shildikdan keyin tanlang
  const tugmalar = document.querySelectorAll(".btns button");

  tugmalar.forEach((tugma) => {
    tugma.addEventListener("click", (tapaqchi) => {
      const tugmaMatni = tapaqchi.target.innerText;

      // Tugma bosilganiga qarab yo'naltirish
      if (tugmaMatni === "Todos") {
        location = "../todos.html";
      } else if (tugmaMatni === "Posts") {
        location = "../posts.html";
      } else if (tugmaMatni === "Galary") {
        location = "../galary.html";
      }
    });
  });
});


 

