const dialog = document.querySelector("dialog");

document.querySelector("#open").addEventListener("click", () => {  
  dialog.show();
});

document.querySelector("#close").addEventListener("click", () => {  
  dialog.close();
});