let w;
const startBtn = document.querySelector("#start_btn");
const hideBtn = document.querySelector("#hide_btn");
const Input = document.querySelector("#input");
const searchBtn = document.querySelector("search");

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  hideBtn.style.display = "flex";
  if (typeof Worker !== "undefined") {
    if (typeof w == "undefined") {
      console.log("worker start working");
      w = new Worker("worker.js");
    }
    w.onmessage = function (event) {
      console.log(`====== event =====`, event.data);
      const Div = document.querySelector(".demo");
      Div.innerHTML = `
      <table>
      <thead class="table_head">
      <tr>
      <th>Id</th>
      <th>Title</th>
      <th>Description</th>
      </tr>
      </thead>
      <tbody>${event.data.map(
        (d) =>
          `<tr class="table_row">
              <td>${d.id}</td>
              <td>${d.title}</td>
              <td>${d.body}</td>
            </tr>`
      )}</tbody>
      </table>
      `;
    };
  } else {
    alert("browser does not supported");
  }
});

hideBtn.addEventListener("click", () => {
  const Div = document.querySelector(".demo");
  if (typeof Worker !== "undefined") {
    w.terminate();
    w = "undefined";
    console.log("worker stoped working");
    hideBtn.style.display = "none";
    Div.style.display = "none";
  } else {
    alert("This browser does not supported");
  }
});

var array = [];
Input.addEventListener("keyup", (e) => {
  let search = this.value.toLowerCase();

  // console.log(e.target.name);

  newArray = array.filter((val) => {
    if (
      val.id.includes(search) ||
      val.title.includes(search) ||
      val.desc.includes(search)
    ) {
      let newObj = { id: val.id, title: val.title, desc: val.desc };
      return newObj;
    }
  });
});

// console.log("object 1");
// setTimeout(() => {
//   console.log("object2");
//   setTimeout(() => {
//     console.log("object 3");
//     setTimeout(() => {
//       console.log("object 4");
//     }, 3000);
//   }, 2000);
// }, 1000);
