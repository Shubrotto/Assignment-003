let w;
const startBtn = document.querySelector("#start_btn");
const Input = document.querySelector("#input");
const searchBtn = document.querySelector("search");

startBtn.addEventListener("click", () => {
  startBtn.innerHTML = startBtn.innerHTML ? "Hide Data" : "Get Data";
  if (typeof Worker !== "undefined") {
    if (typeof w == "undefined") {
      console.log("worker start working");
      w = new Worker("worker.js");
    }
    w.onmessage = function (event) {
      console.log(`====== event =====`, event.data);
      const Div = document.querySelector(".demo");
      Div.innerHTML = `<table>
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
      )}</tbody></table>`;
    };
  } else {
    alert("browser does not supported");
  }
});

const handleInput = (e) => {
  // e.preventDefault();
  const value = e.target.value;

  const handleFiltered = () => {
    location.onmessage = ``;
  };
  searchBtn.addEventListener("click", handleFiltered);
};

Input.addEventListener("change", handleInput);

// console.log(document.querySelector(".demo"));
// startBtn.addEventListener("click", () => {
//   startBtn.innerHTML = "Get Data";
//   if (typeof Worker !== "undefined") {
//     w.terminate();
//     w = "undefined";
//     console.log("worker stoped working");
//   } else {
//     alert("This browser does not supported");
//   }
// });

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
