const changeProjectFocus = (getProject) => {
  // getCurrentProjectFocus has to be inside the function or else it will have persistant data, weirdos ammirite.
  const getCurrentProjectFocus = document.querySelector('.active');

  // This is so I dont have to keep calling this annoying thing lol
  const getProjectElement = document.getElementById(getProject);

  // If the current project isn't already active
  if (getCurrentProjectFocus.id != getProject) {
    // Remove active and add inactive to project that was previously highlighted
    getCurrentProjectFocus.classList.remove('active');
    getCurrentProjectFocus.classList.add('inactive');
    // remove inactive and add active to project that is now active.
    getProjectElement.classList.remove('inactive');
    getProjectElement.classList.add('active');
    
  }
}

// Hexiros stupid PR he made
console.log("splooge");