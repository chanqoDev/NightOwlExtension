const contents = document.getElementById('details-window');

contents.style.backgroundColor = "black";
contents.style.color = "white";

// include the sidebar to dark as well
let sideBar = document.getElementById("sidebar-container")
sideBar.style.backgroundColor  = 'black';
sideBar.style.color = "white";

// a distracting overlay with video suggetions
let removedYTPOverlay = document.getElementsByClassName("ytp-pause-overlay")[0];
removedYTPOverlay.parentNode.removeChild(removedYTPOverlay);

//  // a distracting video end videowall
// const typVideoWallEndscreen = document.getElementsByClassName("html5-endscreen ytp-player-content videowall-endscreen ytp-show-tiles")[0];
// typVideoWallEndscreen.parentNode.removeChild(typVideoWallEndscreen);
