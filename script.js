// option menu
const size = document.getElementById("textsize");
const font = document.getElementById("fonts");
const theme = document.getElementById("themes");

const labl = document.getElementsByClassName("choice");

// editor content box
const textbox = document.getElementById("textbx");

// Apply font size + font family live
function applyTextStyles() {
  textbox.style.fontSize = size.value;
  textbox.style.fontFamily = font.value;
}

// Apply theme live
function applyTheme() {
  if (theme.value === "dark") {
    // CSS variables
    document.documentElement.style.setProperty("--bgcolor", "#0a0a0a");
    document.documentElement.style.setProperty("--textcolor", "rgb(250, 235, 215)");
    document.documentElement.style.setProperty("--innerbgcolor", "#1f1f1f");
    document.documentElement.style.setProperty("--hovercolor", "#525252");
  }

  if (theme.value === "light") {
    document.documentElement.style.setProperty("--bgcolor", "#e6e6e6");
    document.documentElement.style.setProperty("--textcolor", "#1a1a1a");
    document.documentElement.style.setProperty("--innerbgcolor", "#ffffff");
    document.documentElement.style.setProperty("--hovercolor", "#d3d3d3");
  }

  if (theme.value === "sunset") {
    document.documentElement.style.setProperty("--bgcolor", "#faa307");
    document.documentElement.style.setProperty("--textcolor", "#370617");
    document.documentElement.style.setProperty("--innerbgcolor", "#ffba08");
    document.documentElement.style.setProperty("--hovercolor", "#dc2f02");
  }

  // Update all dropdown boxes
  for (let el of labl) {
    el.style.backgroundColor = "var(--innerbgcolor)";
    el.style.color = "var(--textcolor)";
  }
}

// Event listeners
size.addEventListener("change", applyTextStyles);
font.addEventListener("change", applyTextStyles);
theme.addEventListener("change", applyTheme);

// Initialize on page load
applyTextStyles();
applyTheme();
