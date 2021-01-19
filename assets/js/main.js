const changeProjectFocus = (getProject) => {
  // getCurrentProjectFocus has to be inside the function or else it will have persistant data, weirdos ammirite.
  const getCurrentProjectFocus = document.querySelector('.active');
  // This is so I dont have to keep calling this annoying thing lol
  const getProjectElement = document.getElementById(getProject);
  // If the current project isn't already active
  if (getCurrentProjectFocus.id != getProject) {
    getCurrentProjectFocus.classList.remove('active');
    getCurrentProjectFocus.classList.add('inactive')
    getProjectElement.classList.remove('inactive');
    getProjectElement.classList.add('active');
  }
}

// Hexiros stupid PR he made
console.log("splooge");