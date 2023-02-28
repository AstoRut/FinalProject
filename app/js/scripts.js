let mdl = document.getElementById("modal");

document.addEventListener("click", handleClicks);

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
  } else {
    mdl.innerHTML = "";
    mdl.classList.remove("showmodal");
  }
}
