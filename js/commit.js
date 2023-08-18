const Comments = document.querySelector(".comments-row");

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
  Xhr.send()
}


function getcommentsRow({name, email, body}) {
  return `<div class="card">
              <h2 class="name"> ${name}</h2>
              <h3 class="Email">${email}</h3>
              <h4 class="username"> ${body}</h4>
              </div>
            </div>`;
}

Comments.innerHTML = `<div class="ring">Loading
  <span></span>
</div>`;

getData("https://jsonplaceholder.typicode.com/comments", (comments) => {
  Comments.innerHTML = "";
  comments.map((comment) => {
    Comments.innerHTML += getcommentsRow(comment);
  });

  
});

