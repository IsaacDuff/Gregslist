import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { saveState } from "../Utils/Store.js"


function _saveHouses() {
    saveState('houses', appState.houses)
}

class HousesService {
    createHouse(formData) {
        console.log(formData)
        let house = new House(formData)
        appState.houses.push(house)
        // console.log(appState.houses)
        appState.emit('houses')
        _saveHouses()
    }

    deleteHouse(id) {
        let houseFilter = appState.houses.filter(f => f.id != id)
        console.log('found', houseFilter);
        appState.houses = houseFilter

        appState.emit('houses')
        _saveHouses()
    }

}

export const housesService = new HousesService()