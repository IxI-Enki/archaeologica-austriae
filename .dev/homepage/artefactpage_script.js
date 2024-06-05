const artefactContainer = document.getElementById("artefactContainer");
const selectedArtefactClass = "selected"; // Class for the currently selected artefact

artefactContainer.addEventListener("click", function(event) {
  // Check if clicked element is an artefact image
  if (event.target.classList.contains("artifactPicture")) {
    // Remove selected class from previously selected artefact
    const previouslySelected = artefactContainer.querySelector("." + selectedArtefactClass);
    if (previouslySelected) {
      previouslySelected.classList.remove(selectedArtefactClass);
    }

    // Add selected class to clicked artefact
    event.target.classList.add(selectedArtefactClass);

    // Bring the selected artefact to the front (optional)
    event.target.style.zIndex = 2; // Increase the z-index to bring it forward
  }
});
