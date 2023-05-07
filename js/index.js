const btn = document.querySelector("#toggle");
let light = true;

btn.addEventListener("change", (e) => {
  if (light == true) {
    const html = document.getElementsByTagName("html")[0];
    html.dataset.theme = "dark";
    light = !light;
  } else {
    const html = document.getElementsByTagName("html")[0];
    html.dataset.theme = "";
    light = !light;
  }
});
