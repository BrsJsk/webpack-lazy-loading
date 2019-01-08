import { showAlert } from "./src/notLazyLoaded";

window.onload = () => {
  const alertBtn = document.querySelector("#alert");
  const lazyAlertBtn = document.querySelector("#lazyAlert");

  alertBtn.addEventListener("click", () => {
      showAlert();
  });

  lazyAlertBtn.addEventListener("click", () => {
    import(/* webpackChunkName: "lazyLoaded" */ './src/lazyLoaded').then(module => {
        module.showLazyAlert();
    });
});
};
