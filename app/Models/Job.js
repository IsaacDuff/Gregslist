import { generateId } from "../Utils/generateId.js"


export class Job {
    constructor(data) {
        this.id = generateId()
        this.position = data.position
        this.company = data.company
        this.location = data.location
        this.salary = data.salary
        this.shift = data.shift
        this.description = data.description
        this.img = data.img
    }


    get JobCard() {
        return `
        <div class="col-6 col-md-4">
        <div class="card elevation-2 text-dark fw-bold text-shadow">
        <img
            src="${this.img}"
            alt="${this.position}-${this.company}">
        <div class="p-2">
        <div class="color px-5 rounded" style="background: #111927">
        <h3 class="text-center border-bottom border-dark text-light">${this.company}</h3>
        <h4 class="text-center border-bottom border-dark text-light">${this.position}</h4>
        </div>
        <h5 class="text-center border-bottom border-dark"> Shift: ${this.shift} | Salary: $${this.salary}/hr</h5>
            <p>${this.description}</p>
            <p class="text-end">🗺️${this.location}</p>
            <button class="btn btn-outline-danger" title="delete car" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete" ></i></button>
        </div>
        </div>
    </div>
    `
    }
}