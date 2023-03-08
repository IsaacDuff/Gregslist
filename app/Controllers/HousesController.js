import { appState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";
import { setHTML } from "../Utils/Writer.js";
import { House } from "../Models/House.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";


function _drawHouses() {
  const houses = appState.houses
  let template = ''
  houses.forEach(h => template += h.HouseCard)
  setHTML('listings', template)
}

function _drawHouseForm() {
  setHTML('form', House.HouseForm())
}

export class HousesController {
  constructor() {
    console.log('houses controller loaded', appState.houses);
    _drawHouses()
    appState.on('houses', _drawHouses)
  }

  showHouses() {
    _drawHouses()
    _drawHouseForm()
  }

  createHouse() {
    event.preventDefault()
    console.log('creating a house');
    const form = event.target
    console.log(form.address.value, form.bed.value, form.bath.value);
    let formData = getFormData(form)
    console.log(formData)
    housesService.createHouse(formData)
    form.reset()
  }

  async deleteHouse(id) {
    if (await Pop.confirm("Are you sure you wish to delete")) {
      housesService.deleteHouse(id)
    }


  }
}