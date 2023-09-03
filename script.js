window.addEventListener("DOMContentLoaded", () => {
  const defaultMsg = document.querySelector(".message.default");

  const declineMsg = document.querySelector(".declined.response");
  const declineBtn = document.getElementById("decline-btn");

  const acceptMsg = document.querySelector(".accepted.response");
  const acceptBtn = document.getElementById("accept-btn");

  const restoreBtn = document.getElementById("go-back-btn");

  declineBtn.addEventListener("click", () => {
    defaultMsg.style.display = "None";
    declineMsg.style.display = "Block";
  });

  acceptBtn.addEventListener("click", () => {
    defaultMsg.style.display = "None";
    acceptMsg.style.display = "Block";
  });

  restoreBtn.addEventListener("click", () => {
    defaultMsg.style.display = "Grid";
    declineMsg.style.display = "None";
    acceptMsg.style.display = "None";
  });
});
