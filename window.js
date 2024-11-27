document.querySelector(".close").addEventListener("click", () => {
    window.electron.closeWindow();
  });
  
  document.querySelector(".minimize").addEventListener("click", () => {
    window.electron.minimizeWindow();
  });
  
  document.querySelector(".maximize").addEventListener("click", () => {
    window.electron.maximizeWindow();
  });

  document.querySelector(".home-img").addEventListener("click", () => {
    window.electron.goHome(); 
  });
