const startBtn = document.getElementById("startBtn");
const recVideo = document.getElementById("preview");

let stream;
let recorder;
let videoFile;
const handleDownload = () => {
  const a = document.createElement("a");
  a.href = videoFile;
  a.download = "my_bloos.webm";
  document.body.appendChild(a);
  a.click();
};
const handleStop = () => {
  startBtn.innerText = "DOWNLOAD";
  startBtn.removeEventListener("click", handleStop);
  startBtn.addEventListener("click", handleDownload);
  recorder.stop();
};
const handleStart = () => {
  startBtn.innerText = "STOP";
  startBtn.removeEventListener("click", handleStart);
  startBtn.addEventListener("click", handleStop);
  recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
  recorder.ondataavailable = (e) => {
    videoFile = URL.createObjectURL(e.data);
    recVideo.srcObject = null;
    recVideo.src = videoFile;
    recVideo.loop = true;
    recVideo.play();
  };
  recorder.start();
};

const init = async () => {
  stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true,
  });
  recVideo.srcObject = stream;
  recVideo.play();
};

init();
startBtn.addEventListener("click", handleStart);
