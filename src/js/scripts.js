const mdl = document.getElementById("modal");
const firstH1 = document.querySelector("h1");
let theTimer = null;

document.addEventListener("click", handleClicks);

function goToRandomDestination() {
  let max = destinations.length;
  let rand = Math.floor(Math.random() * max);
  let dest = destinations[rand];
  console.log(dest);
  dest = dest.replace(" ", "_"); // Costa Rica -> Costa_Rica
  console.log(dest);
  window.location = `/pages/${dest}`;
}

function handleClicks(e) {
  let rect = e.target.getBoundingClientRect();
  if (e.target.matches(".Americas")) {
    mdl.style.left = rect.left - 13 + "px";
    mdl.style.top = rect.top + 37 + "px";
    mdl.innerHTML = region.Americas;
    mdl.classList.add("showmodal");
  } else if (e.target.matches(".Europe")) {
    mdl.style.left = rect.left - 13 + "px";
    mdl.style.top = rect.top + 37 + "px";
    mdl.innerHTML = region.Europe;
    mdl.classList.add("showmodal");
  } else if (e.target.matches(".Asia")) {
    mdl.style.left = rect.left - 13 + "px";
    mdl.style.top = rect.top + 37 + "px";
    mdl.innerHTML = region.Asia;
    mdl.classList.add("showmodal");
  } else if (e.target.matches(".plane")) {
    window.location = "/";
  } else if (e.target.matches(".plane2")) {
    goToRandomDestination();
  } else {
    mdl.innerHTML = "";
    mdl.classList.remove("showmodal");
  }
}

function SlowLoad(destTitle) {
  // will slowly load the restaurant name until all the chars are displayed
  let idx = firstH1.innerHTML.length;
  if (destTitle.length <= idx) {
    clearInterval(theTimer);
  } else {
    firstH1.innerHTML += destTitle[idx];
  }
}

if (destinations.includes(firstH1.innerText)) {
  let destTitle = firstH1.innerText;
  clearInterval(theTimer);
  firstH1.innerText = "";
  theTimer = setInterval(function () {
    SlowLoad(destTitle);
  }, 120);
}
