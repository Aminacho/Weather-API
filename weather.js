// fetch method (javascript)
// axios method (external library)
// api : application programming interface

// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "get",
// })
//   .then((response) => response.json())
//   .then((resFinal) => console.log(resFinal))
//   .catch((err) => console.log(err));
let data = [];
let usersDiv = document.querySelector(".users");
document.addEventListener("DOMContentLoaded", (event) => {
  console.log(1);
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "get",
  })
    .then((response) => response.json())
    .then((resFinal) => {
      let content = ``;
      for (const user of resFinal) {
        content += `<div class='user'>
          <h3> ${user.name} </h3>
          <h5> ${user.email} </h5>
          <p> ${user.phone} </p>
        </div>`;
      }
      usersDiv.innerHTML = content;
    })
    .catch((err) => console.log(err));
});
