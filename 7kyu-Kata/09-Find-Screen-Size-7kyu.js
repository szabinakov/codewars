// Cheesy Cheeseman just got a new monitor! He is happy with it, but he just discovered that his old desktop wallpaper no longer fits. He wants to find a new wallpaper, but does not know which size wallpaper he should be looking for, and alas, he just threw out the new monitor's box. Luckily he remembers the width and the aspect ratio of the monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?

// The Challenge
// Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

//Solution:
function findScreenHeight(width, ratio) {
  const splitted = ratio.split(":");
  const newArray = [];

  for (let i = 0; i < splitted.length; i++) {
    newArray.push(Number(splitted[i]));
  }

  const lastArray = [width, (width / newArray[0]) * newArray[1]];

  return lastArray.join("x").toString();
}