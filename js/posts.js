

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
    <div class="card">
              <h2 class="name"> ${title}</h2>
              <h3 class="username"> ${body}</h3>
              <div class="btns">
                <button class="Comment-row">Commit</button>
              </div>
            </div>`;
}

const PostsCard = document.querySelector(".posts-row");


PostsCard.innerHTML = `<div class="ring">Loading
  <span></span>
</div>`;

getData("https://jsonplaceholder.typicode.com/posts?userId=1", (userId) => {
  PostsCard.innerHTML = "";
  userId.map((posts) => {
    PostsCard.innerHTML += getUserRow(posts);
  });
  
   const CommentROW = document.querySelector(".Comment-row");

   CommentROW.addEventListener("click", () => {
     location = "../commit.html";
   });
});