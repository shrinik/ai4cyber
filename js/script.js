function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

let table1 = document.getElementById("tbl_phishtank_body");
if (table1 != "") {
  // (B) AJAX FETCH CSV FILE
  fetch("./data/phishtank.csv")
    .then((res) => res.text())
    .then((csv) => {
      // (B2) GENERATE TABLE
      let rows = csv.split("\r\n");
      for (let row of rows) {
        let cols = row.match(/(?:\"([^\"]*(?:\"\"[^\"]*)*)\")|([^\",]+)/g);
        if (cols != null) {
          let tr = table1.insertRow();
          for (let col of cols) {
            let td = tr.insertCell();
            td.innerHTML = col.replace(/(^"|"$)/g, "");
          }
        }
      }
    });
}

let table2 = document.getElementById("tbl_cve_body");
if (table2 != "") {
  // (B) AJAX FETCH CSV FILE
  fetch("./data/cve.csv")
    .then((res) => res.text())
    .then((csv) => {
      // (B2) GENERATE TABLE
      let rows = csv.split("\r\n");
      for (let row of rows) {
        let cols = row.match(/(?:\"([^\"]*(?:\"\"[^\"]*)*)\")|([^\";]+)/g);
        if (cols != null) {
          let tr = table2.insertRow();
          for (let col of cols) {
            let td = tr.insertCell();
            td.innerHTML = col.replace(/(^"|"$)/g, "");
          }
        }
      }
    });
}
