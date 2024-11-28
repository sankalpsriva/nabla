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

  document.querySelector("#mech").addEventListener("click", () => {
    window.electron.mech(); 
  });

  document.querySelector("#emag").addEventListener("click", () => {
      window.electron.emag(); 
  });

  document.querySelector("#vec").addEventListener("click", () => {
    window.electron.vec(); 
  });

  document.querySelector("#rel").addEventListener("click", () => {
    window.electron.rel(); 
  });