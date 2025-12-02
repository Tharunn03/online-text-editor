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
  if (theme.value === "midnight") {
    // CSS variables
    document.documentElement.style.setProperty("--bgcolor", "#0a0a0a");
    document.documentElement.style.setProperty("--textcolor", "rgb(250, 235, 215)");
    document.documentElement.style.setProperty("--innerbgcolor", "#1f1f1f");
    document.documentElement.style.setProperty("--hovercolor", "#525252");
  }

  if (theme.value === "day") {
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

  if (theme.value === "lavender") {
    document.documentElement.style.setProperty("--bgcolor", "#c19ee0");
    document.documentElement.style.setProperty("--textcolor", "#6247aa");
    document.documentElement.style.setProperty("--innerbgcolor", "#dec9e9");
    document.documentElement.style.setProperty("--hovercolor", "#d2b7e5");
  }

  if (theme.value === "purplehaze") {
    document.documentElement.style.setProperty("--bgcolor", "#310055");
    document.documentElement.style.setProperty("--textcolor", "#dc97ff");
    document.documentElement.style.setProperty("--innerbgcolor", "#3c0663");
    document.documentElement.style.setProperty("--hovercolor", "#8b2fc9");
  }

  if (theme.value === "bubblegum") {
    document.documentElement.style.setProperty("--bgcolor", "#800f2f");
    document.documentElement.style.setProperty("--textcolor", "#ffccd5");
    document.documentElement.style.setProperty("--innerbgcolor", "#a4133c");
    document.documentElement.style.setProperty("--hovercolor", "#ff4d6d");
  }

  if (theme.value === "spring") {
    document.documentElement.style.setProperty("--bgcolor", "#55a630");
    document.documentElement.style.setProperty("--textcolor", "#eeef20");
    document.documentElement.style.setProperty("--innerbgcolor", "#80b918");
    document.documentElement.style.setProperty("--hovercolor", "#bfd200");
  }

  if (theme.value === "gardenb") {
    document.documentElement.style.setProperty("--bgcolor", "#90a955");
    document.documentElement.style.setProperty("--textcolor", "#132a13");
    document.documentElement.style.setProperty("--innerbgcolor", "#ecf39e");
    document.documentElement.style.setProperty("--hovercolor", "#90a955");
  }

  if (theme.value === "gardenn") {
    document.documentElement.style.setProperty("--bgcolor", "#132a13");
    document.documentElement.style.setProperty("--textcolor", "#ecf39e");
    document.documentElement.style.setProperty("--innerbgcolor", "#31572c");
    document.documentElement.style.setProperty("--hovercolor", "#90a955");
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
