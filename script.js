// option menu
const size = document.getElementById("textsize");
const font = document.getElementById("fonts");
const theme = document.getElementById("themes")

// editor content box
const textbox = document.getElementById("textbx");

// event listener
size.addEventListener("change", () =>
{
  if (theme == dark)
  {
    // background
    document.documentElement.style.setProperty("--bgcolor", "#0a0a0a");

    // textbox
    textbox.documentElement.style.setProperty("--bgcolor", "#1f1f1f")
    textbox.documentElement.style.setProperty("--textcolor", "rgb(250, 235, 215)");

    // dropdownboxes
    font.documentElement.style.setProperty("--bg-color", "#1f1f1f");
    font.documentElement.style.setProperty("--text-color", "rgb(250, 235, 215)");
    font.documentElement.style.setProperty("--hovercolor", "#525252")
    
    size.documentElement.style.setProperty("--bgcolor", "#1f1f1f");
    size.documentElement.style.setProperty("--textcolor", "rgb(250, 235, 215)");
    
    theme.documentElement.style.setProperty("--bgcolor", "#1f1f1f");
    theme.documentElement.style.setProperty("--textcolor", "rgb(250, 235, 215)");
  }
  const selectedsize = size.value;
  const changedfont = font.value;
  textbox.style.fontFamily = changedfont;
  textbox.style.fontSize = selectedsize;
})

