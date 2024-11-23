const { Titlebar, TitlebarColor } =  require("custom-electron-titlebar");

const options = { 
    backgroundColor: TitlebarColor.fromHex('#2b2b2b'),
    titleHorizontalAlignment: 'left',
    menuPosition: 'bottom',

    
}
window.addEventListener('DOMContentLoaded', () => {
  new Titlebar(options); 
});