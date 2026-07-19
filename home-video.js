const videoWindow = document.querySelector(".video-window");
const videoCover = document.querySelector(".video-cover");
const video = document.querySelector("#introVideo");

async function startVideo() {
  videoWindow.classList.remove("is-paused");
  video.muted = false;
  try {
    await video.play();
  } catch {
    videoWindow.classList.add("is-paused");
  }
}

function pauseVideo() {
  videoWindow.classList.add("is-paused");
}

videoCover.addEventListener("click", startVideo);
video.addEventListener("pause", pauseVideo);
video.addEventListener("play", () => videoWindow.classList.remove("is-paused"));
window.addEventListener("load", () => {
  window.setTimeout(async () => {
    video.muted = true;
    videoWindow.classList.remove("is-paused");
    try {
      await video.play();
    } catch {
      videoWindow.classList.add("is-paused");
    }
  }, 900);
});
