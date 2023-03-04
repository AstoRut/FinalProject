const mdl = document.getElementById("modal");
const firstH1 = document.querySelector("h1");
let theTimer = null;

document.addEventListener("click", handleClicks);

function goToRandomDestination() {
  let max = destinations.length;
  let rand = Math.floor(Math.random() * max);
  let dest = destinations[rand];
  dest = dest.replace(" ", "_"); // Costa Rica -> Costa_Rica
  window.location = `/pages/${dest}`;
}

function handleClicks(e) {
  let rect = e.target.getBoundingClientRect();

  if (
    e.target.matches(".Americas") ||
    e.target.matches(".Europe") ||
    e.target.matches(".Asia")
  ) {
    if (mdl.innerHTML == region[e.target.innerHTML]) {
      // close modal if it's already open for this item
      mdl.innerHTML = "";
      mdl.classList.remove("showmodal");
      return;
    }
    mdl.style.left = rect.left - 12 + "px";
    mdl.style.top = rect.top + window.scrollY + 37 + "px";
    mdl.innerHTML = region[e.target.innerHTML];
    mdl.classList.add("showmodal");
  } else if (e.target.matches(".plane")) {
    window.location = "/";
  } else if (e.target.matches(".plane2")) {
    goToRandomDestination();
  } else {
    // clicking elsewhere, close the modal
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
