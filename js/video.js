const videoButton = document.getElementById("video-play-button");
const videoPopup = document.getElementById("video-popup");
const videoClosed = document.getElementById("video-popup-close");

videoButton.addEventListener("click", function () {
  videoPopup.classList.add("active");
  document.body.style.overflowY = "hidden";
});

videoClosed.addEventListener("click", function () {
  videoPopup.classList.remove("active");
  document.body.style.overflowY = "auto";
});
