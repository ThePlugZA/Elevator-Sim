/*
const app = new Vue({
   el: '#app',
   data: {
     numFloors: 0,
     numElevators: 0
   },
   computed: {
      floorOptions() {
         const options = ['G']; // Start with ground floor

         for (let i = 1; i <= this.numFloors; i++) {
            options.push(i.toString());
         }

         return options;
      }
   },
   methods: {
   addElevatorsFloors()
   {
      const numElevatorsInput = document.getElementById('num-elevators')
      const numFloorsInput = document.getElementById('num-floors')

      const numElevators = parseInt(numElevatorsInput.value)
      const numFloors = parseInt(numFloorsInput.value)

      const buildingElement = document.getElementById('building')
      buildingElement.innerHTML = '';

      for (let i = 0; i < numElevators; i++)
      {
         const elevatorELement = document.createElement('div');
         elevatorELement.classList.add('elevator');
         buildingElement.appendChild(elevatorELement);
      }

      for (let i = 0; i < numFloors; i++)
      {
         const floorElement = document.createElement('div');
         floorElement.classList.add('floor')

         const elevatorChannel = document.createElement('div')
         elevatorChannel.classList.add('elevator-channel')
         floorElement.appendChild(elevatorChannel)

         buildingElement.appendChild(floorElement)
      }


      const floorDropdown = document.getElementById('dropdown');
      const floorsButtons = document.getElementById('floors-buttons');

      floorDropdown.innerHTML = '';
      floorsButtons.innerHTML = '';

      for (let i = 1; i <= numFloors; i++) 
      {
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
}
})

const addElements = document.getElementById('start-btn')
addElements.addEventListener('click', app.addElevatorsFloors)
*/