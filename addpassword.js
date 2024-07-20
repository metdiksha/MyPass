// Logic to fill the table
const showPasswords = () => {
  let tb = document.querySelector("table");
  let data = localStorage.getItem("passwords");
  if (!data || JSON.parse(data).length === 0) {
    tb.innerHTML = "No Data To Show";
  } else {
    tb.innerHTML = `
        <tr>
          <th>Website</th>
          <th>Username</th>
          <th>Password</th>
          <th>Delete</th>
        </tr>`;
    let arr = JSON.parse(data);
    let str = "";
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      str += `
        <tr>
          <td>${element.website}</td>
          <td>${element.username} <img onclick="copyText('${
        element.username
      }')" src="./copy.svg" alt="Copy Button" width="10" height="10"></td>
          <td>${maskPassword(element.password)} <img onclick="copyText('${
        element.password
      }')" src="./copy.svg" alt="Copy Button" width="10" height="10"></td>
          <td><button class="btnsm" onclick="deletePassword('${
            element.website
          }')">Delete</button></td>
        </tr>`;
    }
    tb.innerHTML += str;
  }
  document.getElementById("website").value = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
};

console.log("Working");
showPasswords();

document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Clicked....");
  console.log(
    document.getElementById("username").value,
    document.getElementById("password").value
  );
  let passwords = localStorage.getItem("passwords");
  let json = passwords ? JSON.parse(passwords) : [];
  json.push({
    website: document.getElementById("website").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  });
  alert("Password Saved");
  localStorage.setItem("passwords", JSON.stringify(json));
  showPasswords();
});
