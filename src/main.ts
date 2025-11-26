import "./style.css";
import { createHtml } from "./utils/html";

const positions: GeolocationPosition[] = [];
let id = 0;
const stopButton = document.getElementById("stop");

document.getElementById("start")?.addEventListener("click", () => {
  (stopButton as HTMLButtonElement).disabled = false;

  id = navigator.geolocation.watchPosition((pos) => {
    positions.push(pos);
    createHtml(positions);
  });
});

stopButton?.addEventListener("click", () => {
  navigator.geolocation.clearWatch(id);
  (stopButton as HTMLButtonElement).disabled = true;
});
