var background = chrome.extension.getBackgroundPage();
document.addEventListener('DOMContentLoaded',  function(e) {
  init();
  document.getElementById("save_settings").addEventListener('click', save_settings);
}, false);

function viewStatus(id, msg){
  var status = document.getElementById(id);
  status.innerHTML = msg;
  setTimeout(function() { status.innerHTML = ""; }, 1 * 1000);
}

function init(){
  document.getElementById("speedo").value = (localStorage["speedo"] || "1");
}

function save_settings() {
  localStorage["speedo"] = document.getElementById("speedo").value + "";
  viewStatus("status_settings","Options Saved.");
}
