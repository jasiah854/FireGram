function applyTheme(theme) {
    document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "auto";
  
    applyTheme(savedTheme);
  
    for (const optionElement of document.querySelectorAll("#sel-theme option")) {
      optionElement.selected = savedTheme === optionElement.value;
    }
  if (document.querySelector("#sel-theme") !== null){
    document.querySelector("#sel-theme").addEventListener("change", function () {
      localStorage.setItem("theme", this.value);
      applyTheme(this.value);
    });}
  });
  /*
  
  
        <div class="select">
            <i class="fas fa-palette"> Theme</i>
            <select class="select=input" id="sel-theme">
                <option value="auto">Auto</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>

  
  
  */