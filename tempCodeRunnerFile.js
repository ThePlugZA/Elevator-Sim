document.addEventListener('DOMContentLoaded', function () {
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
   const currentFloorInput = document.getElementById('dropdown');
   const destinationFloorInput = document.getElementById('floors-buttons');

   currentFloorInput.addEventListener('change', getCurrFloor);
   destinationFloorInput.addEventListener('change', getDestination);

   function getCurrFloor() {
      const currentFloor = currentFloorInput.value;
      console.log('Current Floor:', currentFloor);
      // You can do more with the current floor if needed
   }

   function getDestination() {
      const destinationFloor = document.querySelector('input[name="floor-num"]:checked').value;
      console.log('Destination Floor:', destinationFloor);
      // You can do more with the destination floor if needed
   }

});

function moveUP(){

}

function moveDown(){

}