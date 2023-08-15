"use strict";

document.querySelector("button").addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("h4").innerText = `${data.activity}`;
      document.getElementById("title").textContent = "🎯EnjoyLife🎮";
      document.body.classList.add("hiddenB");
    });
});
