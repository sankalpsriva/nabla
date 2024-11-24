document.querySelector(".close").addEventListener("click", () => {
    window.electron.closeWindow();
  });
  
  document.querySelector(".minimize").addEventListener("click", () => {
    window.electron.minimizeWindow();
  });
  
  document.querySelector(".maximize").addEventListener("click", () => {
    window.electron.maximizeWindow();
  });