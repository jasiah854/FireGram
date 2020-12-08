const myNotes = async() => {
  var x = document.getElementById("module1");
 
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
 window.onscroll = function(event) {
    console.log('Scrolling...');
    x.style.display = "none";
  };
  var bod = document.getElementById("module");
  function myFunction() {x.style.display = "none";}
  document.bod.addEventListener("scroll", myFunction );

}
const formatAMPM = (date) => {
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var dateAndTime = month + "/" + day + "/" + year + " at " + hours + ':' + minutes + ' ' + ampm;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return dateAndTime;
}
// table 
var userInput = document.getElementById("note");
var noteIdCounter = 1;
userInput.addEventListener("keydown", async(event) => {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("fn").click();
  }
});
async function addRow() {
  // date and time 
 var dt = new Date();//obtain date 
  noteIdCounter++
  var timeStamp = formatAMPM(dt);
  console.log(timeStamp);
  const noteId = noteIdCounter; //userIdCounter will +=1 when btn is clicked
  const note = document.getElementById("note").value; // user's name  input
  var newTr = document.createElement("tr"); // create tr tag
  newTr.innerHTML = `<td> ${noteId} </td> <td> ${note} </td> <td>${timeStamp}</td> `; //give the tr content 
  document.getElementById("tbl").appendChild(newTr); //add tr to table
  document.getElementById("note").value = ""; // reset the value of html input to null
}

