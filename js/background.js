chrome.browserAction.setBadgeBackgroundColor({color: "#ccc"});
chrome.browserAction.setBadgeText({text:"OFF"});

function speedlabel(tab) {
  chrome.browserAction.setBadgeBackgroundColor({color: "#22944E"});
  doScroll(tab, (localStorage["speedo"] || "1"), 'speedo');
};

var scrolled = false;
var time;

function doScroll(tab, speed, badge) {
  chrome.browserAction.setBadgeText({text:badge});
  time = setInterval(function(){
    executehtmlcode(tab.id);
  }, speed);
}

function executehtmlcode(id){
  chrome.tabs.executeScript({
    code: `document.documentElement.scrollTop+=1;`
  });
}

document.onkeyup = function(e){
  if(e.keyCode == 67){
    console.log ("This button is cliked:");
  }
}
chrome.browserAction.onClicked.addListener(function(tab) {
  clearInterval(time);
  if(scrolled == false) {
    scrolled = true;
    speedlabel(tab);
  } else if(scrolled == true) {
    scrolled = false;
    clearInterval(time);
    chrome.browserAction.setBadgeBackgroundColor({color: "#ccc"});
    chrome.browserAction.setBadgeText({text:"OFF"});
  }
});
chrome.tabs.onSelectionChanged.addListener(function(tabid, selectinfo) {
  clearInterval(time);
  chrome.browserAction.setBadgeBackgroundColor({color: "#ccc"});
  chrome.browserAction.setBadgeText({text:"OFF"});  scrolled = false;
});
