import { appState } from "../AppState.js"
import { House } from "../Models/House.js"


class HousesService {
    createHouse(formData) {
        console.log(formData)
        let house = new House(formData)
        appState.houses.push(house)
        // console.log(appState.houses)
        appState.emit('houses')
    }

    deleteHouse(id) {

    }

}

export const housesService = new HousesService()