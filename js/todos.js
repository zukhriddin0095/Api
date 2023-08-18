const TodosRow = document.querySelector(".todos-row");

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

function getUserRow({ title, completed }) {
  return `
    <div class="todos">
              <h2> ${title}</h2>
              <h3> ${completed ? "✅" : "❌"}</h3>
            </div>`;
}
TodosRow.innerHTML = `<div class="ring">Loading
  <span></span>
</div>`;
getData("https://jsonplaceholder.typicode.com/todos", (todos) => {
  TodosRow.innerHTML = "";
  todos.map((todos) => {
    TodosRow.innerHTML += getUserRow(todos);
  });

  
});
