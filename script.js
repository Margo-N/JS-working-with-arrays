var hobbies = [
  "reading",
  "writing",
  "running",
  "weight-lifting",
  "swimming",
  "traveling",
];
//console.log(hobbies.length);
hobbies.push("painting");
//console.log(hobbies[2]);
hobbies.pop();
//console.log(hobbies);
hobbies.splice(2, 0, "hiking", "camping");
//console.log(hobbies);
hobbies.shift();
//console.log(hobbies);
hobbies.unshift("speaking");
//console.log(hobbies);

var goals = [
  "publishing my writing",
  "growing my fitness level",
  "transitioning my career",
];
var allTheThings = [...hobbies, ...goals];
//console.log(allTheThings);

var hobby = allTheThings.indexOf("weight-lifting");
//console.log(hobby);

allTheThings.splice(5, 1);
//console.log(allTheThings);

var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}.`;
});
console.log(plans);
