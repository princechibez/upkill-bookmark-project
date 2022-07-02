let defaultColor = "hsl(229, 8%, 60%)";
let defaultBorder = "none";

let tabOne = document.getElementById("tabOne");
let tabTwo = document.getElementById("tabTwo");
let tabThree = document.getElementById("tabThree");

let switchable_components_one = document.getElementById('switchable_components_one');
let switchable_components_two = document.getElementById('switchable_components_two');
let switchable_components_three = document.getElementById('switchable_components_three');

function firstTab() {

  tabOne.style.color = "hsl(229, 31%, 21%)";
  tabOne.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
  switchable_components_one.style.display = "inline-flex"
  //changing the other tabs to their defaults...
  tabTwo.style.color = defaultColor;
  tabTwo.style.borderBottom = defaultBorder;
  tabThree.style.color = defaultColor;
  tabThree.style.borderBottom = defaultBorder;
    //Hiding the others...
  switchable_components_two.style.display = "none";
  switchable_components_three.style.display = "none";
}

function secondTab() {

  tabTwo.style.color = "hsl(229, 31%, 21%)";
  tabTwo.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
  switchable_components_two.style.display = "inline-flex";
  //changing the other tabs to their defaults...
  tabOne.style.color = defaultColor;
  tabOne.style.borderBottom = defaultBorder;
  tabThree.style.color = defaultColor;
  tabThree.style.borderBottom = defaultBorder;
  //Hiding the others...
switchable_components_one.style.display = "none";
switchable_components_three.style.display = "none";
}

function thirdTab() {

  tabThree.style.color = "hsl(229, 31%, 21%)";
  tabThree.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
  switchable_components_three.style.display = "inline-flex";
  //changing the other tabs to their defaults...
  tabOne.style.color = defaultColor;
  tabOne.style.borderBottom = defaultBorder;
  tabTwo.style.color = defaultColor;
  tabTwo.style.borderBottom = defaultBorder;
  //Hiding the others...
switchable_components_one.style.display = "none";
switchable_components_two.style.display = "none";
}