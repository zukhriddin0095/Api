
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
 function getUserRow({ name, username, email, phone, website,}) {
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

      const TodosRow = document.querySelector(".Todos");

      TodosRow.addEventListener("click", () => {
        location = "../todos.html";
      });

      const PostsRow = document.querySelector(".Posts");

      PostsRow.addEventListener("click", () => {
        location = "../posts.html";
      });

      const Galarey = document.querySelector(".Galarey-row");
      Galarey.addEventListener("click", () => {
        location = "../galary.html";
      });

});








