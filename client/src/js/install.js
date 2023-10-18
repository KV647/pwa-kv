const btnInstall = document.getElementById("buttonInstall");
let installPrompt = null;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  btnInstall.style.visibility = "visible";
  textHeader.textContent = "Click the button to install!";
});

btnInstall.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  installPrompt = null;
  btnInstall.setAttribute("disabled", true);
  btnInstall.textContent = "Installed!";
});

window.addEventListener("appinstalled", (event) => {
  textHeader.textContent = "Successfully installed!";
  console.log("👍", "appinstalled", event);
});