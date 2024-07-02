console.log("Loaded");
document.addEventListener('DOMContentLoaded', function () {
   console.log("Loaded DOM");
   const UP = document.querySelector("#direction-up");
   const DOWN = document.querySelector("#direction-down");

   UP.addEventListener("click", function () {
      setDirection("up");
   });

   DOWN.addEventListener("click", function () {
      setDirection("down");
   });
});

const currentFloorInput = document.getElementById('dropdown');
const destinationFloorInput = document.getElementById('floors-buttons');

currentFloorInput.addEventListener('change', getCurrFloor);
destinationFloorInput.addEventListener('change', getDestination);

function getCurrFloor() {
   const currentFloor = currentFloorInput.value;
   console.log('Current Floor:', currentFloor);

   return currentFloor;
}

function getDestination() {
   const destinationFloor = document.querySelector('input[name="floor-num"]:checked').value;
   console.log('Destination Floor:', destinationFloor);
   // You can do more with the destination floor if needed

   return destinationFloor;
}

let currentFloor = null;
let destinationFloor = null;

var elevators = {
   "elev-1": { id: "elev-1", currentFloor: 0, currentPosition: 0 },
   "elev-2": { id: "elev-2", currentFloor: 0, currentPosition: 0 },
   "elev-3": { id: "elev-3", currentFloor: 0, currentPosition: 0 }
};

function setDirection(direction) {
   // Check if the current floor is selected
   if (currentFloor === null) {
      // Get the current floor from the user input
      currentFloor = getCurrFloor();
      // Inform the user to choose the direction
      console.log("Choose direction: " + direction);
   } else {
      // Current floor is already set, set the destination floor
      destinationFloor = getDestination();
      // Elevator logic comes here (you might want to call getElevator() here)
      console.log("Selected elevator for moving from " + currentFloor + " to " + destinationFloor);
      // Start the animation or any other logic
      moveTo(currentFloor, destinationFloor);
      // Reset the floors for the next operation
      currentFloor = null;
      destinationFloor = null;
   }
}

function getElevators() {
   return elevators;
}

function getElevator() {
   //return string ID
   //if both are at the bottom, choose random elevator
   //else choose nearest to current

   //id: elev-1 elev-2 elev-3
   //returns string of the id
   //Choose the nearest elevator to the current floor
   let nearestElevator = null;
   let minDistance = Infinity;
   var elev = getElevators();
   
   if(currentFloor == 'G'){
      currentFloor = 0;
   }

   for (let key in elev) {
      let elevator = elev[key];
      let distance = Math.abs(elevator.currentFloor - currentFloor);
      if (distance <= minDistance) {
         minDistance = distance;
         nearestElevator = elevator;
      }
   }
   console.log("Nearest " + nearestElevator)
   return nearestElevator;

   
}

const floorHeight = 25; // Each floor height in percentage

// Function to map floor numbers to position percentages
function getFloorPosition(floor) {
   return floor * floorHeight;
}

var id = null;
var isRunning = false;
var currentElevator = null;
function moveUp(targetPos) {

   //update current floor by 1;
   if (isRunning) {
      return;
   }
   //update display animation to move elevator element
   console.log("Move Up");
   isRunning = true;
   var elem = document.getElementById(currentElevator.id);
   console.log("using elevator: " + currentElevator.id)
   // Get the current position of the elevator
   let pos = parseFloat(elem.style.bottom) || 0;
   clearInterval(id);
   id = setInterval(frame, 10);

   function frame() {
      // Check if the elevator has reached the top or a threshold value
      if (pos >= targetPos) { // Adjust this threshold as needed
         clearInterval(id);
         isRunning = false;
         currentElevator.currentPosition = pos;
         currentElevator.currentFloor = targetPos / floorHeight;
      } else {
         // Increment margin bottom value of 'elevator' class by 5 pixels each time this runs
         pos += 5; // Adjust the value to control the speed
         elem.style.bottom = pos + '%';
      }
   }

   isRunning = false;
}

function moveDown(targetPos) {
   //update current floor by 1;

   if (isRunning) {
      return;
   }

   console.log("Move Down");
   isRunning = true;
   //update display animation to move elevator element
   var elem = document.getElementById(currentElevator.id);
   console.log("using elevator: " + currentElevator.id)

   let pos = parseFloat(elem.style.bottom) || 0;
   clearInterval(id);
   id = setInterval(frame, 10);

   function frame() {
      if (pos <= targetPos) { // Adjust this threshold as needed
         clearInterval(id);
         isRunning = false;
         currentElevator.currentPosition = pos;
         currentElevator.currentFloor = targetPos / floorHeight;
      } else {
         // Increment margin bottom value of 'elevator' class by 5 pixels each time this runs
         pos -= 5; // Adjust the value to control the speed
         elem.style.bottom = pos + '%';
      }
   }
}

function moveTo(start, end) {
   console.log("Moving");

   if (start == 'G' ) { //convert G to 0 so list of floors becomes [0, 1, 2, 3]
      start = 0;
   }
   if (end == 'G' ) { //convert G to 0 so list of floors becomes [0, 1, 2, 3]
      end = 0;
   }


   let startPos = getFloorPosition(start);
   let endPos = getFloorPosition(end);
   currentElevator = getElevator();


   if (currentElevator.currentFloor !== start) {
      // Move elevator to the current floor first
      console.log("Moving to current floor first");
      if (currentElevator.currentFloor < start) {
         moveUp(startPos);
      } else {
         moveDown(startPos);
      }
   }

   if (start === end) {
      alert("You are already on that floor");
   } else if (start < end) {
      setTimeout(() => moveUp(endPos), 500); // Delay to ensure the elevator reaches the current floor first
   } else if (start > end) {
      setTimeout(() => moveDown(endPos), 500); // Delay to ensure the elevator reaches the current floor first
   }

   // if (start == end) {
   //    alert("You are already on that floor");
   // } else if (start < end) {
   //    // Move up
   //    var intervalId = setInterval(function () {
   //       if (start < end) {
   //          moveUp(endPos);
   //          console.log("Before move: " +  start + " and after move up: " + (start+1))            
   //          start++;
   //       } else {
   //          clearInterval(intervalId);
   //       }
   //    }, 100);
   //   // Adjust the interval as needed
   // } else if (start > end) {
   //    // Move down
   //    var intervalId = setInterval(function () {
   //       if (start > end) {
   //          moveDown(endPos);
   //          console.log("Before move: " +  start + " and after move down: " + (start-1))
   //          start--;
            
   //       } else {
   //          clearInterval(intervalId);
   //       }
   //    }, 100);
   //   // Adjust the interval as needed
   // }
}


document.addEventListener("keydown", function (event) { //change function executed when 'Enter' key is clicked
   if (event.key === "Enter") {
      event.preventDefault()
      moveTo(getCurrFloor(), getDestination());
   }
});

const btn = document.querySelector("#start-ele")
btn.addEventListener("click", function () {
   event.preventDefault();
   //if elevators is not at currnet floor, move elevator there first
   moveTo(getCurrFloor(), getDestination());
   //reset 
   currentFloor = null;
   destinationFloor = null;
});




/*
const addElements = document.getElementById('start-btn');
addElements.addEventListener('click', addElevatorsFloors);


function addElevatorsFloors() {
   const numElevatorsInput = document.getElementById('num-elevators');
   const numFloorsInput = document.getElementById('num-floors');

   const numElevators = parseInt(numElevatorsInput.value);
   const numFloors = parseInt(numFloorsInput.value);

   const buildingElement = document.getElementById('building');
   buildingElement.innerHTML = '';

   for (let i = 0; i < numElevators; i++) {
      const elevatorElement = document.createElement('div');
      elevatorElement.classList.add('elevator');
      buildingElement.appendChild(elevatorElement);
   }

   for (let i = 0; i < numFloors; i++) {
      const floorElement = document.createElement('div');
      floorElement.classList.add('floor');

      const elevatorChannel = document.createElement('div');
      elevatorChannel.classList.add('elevator-channel');
      floorElement.appendChild(elevatorChannel);

      buildingElement.appendChild(floorElement);
   }

   const floorDropdown = document.getElementById('dropdown');
   const floorsButtons = document.getElementById('floors-buttons');

   floorDropdown.innerHTML = '';
   floorsButtons.innerHTML = '';

   for (let i = 1; i <= numFloors; i++) {
      // Create a new option for the floor dropdown
      const option = document.createElement('option');
      option.value = i.toString();
      option.textContent = i === 1 ? '-' : i.toString();
      floorDropdown.appendChild(option);

      // Create a new floor button
      const floorButton = document.createElement('h3');
      const radioButton = document.createElement('input');
      radioButton.name = 'floor-num';
      radioButton.value = i.toString();
      radioButton.type = 'radio';
      radioButton.classList.add('input-radio');
      floorButton.appendChild(radioButton);
      floorButton.textContent = i === -1 ? '-' : i.toString();
      floorsButtons.appendChild(floorButton);
   }
}
//will do this later
*/