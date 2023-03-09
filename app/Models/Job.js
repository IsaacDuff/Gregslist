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
            <p class="text-end">Address: ${this.location}</p>
            <button class="btn btn-outline-danger" title="delete car" onclick="app.jobsController.deleteJob('${this.id}')"><i class="mdi mdi-delete" ></i></button>
        </div>
        </div>
    </div>
    `
    }



    static JobForm() {
        return `
    <form onsubmit="app.jobsController.createJob()" class="row bg-white rounded elevation-2 p-4">
    <h3>List a Job</h3>
    <div class="mb-2 col-12">
        <label for="position">Position</label>
        <input type="text" name="position" id="position" class="form-control" required 
        placeholder="Position name here...">
    </div>
    <div class="mb-2 col-6">
        <label for="company">Company</label>
        <input type="text" name="company" id="company" class="form-control" required 
        placeholder="Company Name">
    </div>
    <div class="mb-2 col-6">
        <label for="location">Location</label>
        <input type="text" name="location" id="location" class="form-control" required 
        placeholder="Address Here">
    </div>
    <div class="mb-2 col-12">
        <label for="img">Image URL</label>
        <input type="url" name="img" id="img" class="form-control" required
        placeholder="please enter a url for an image...">
    </div>
    <div class="mb-2 col-12">
        <label for="description">Description</label>
        <input type="text" name="description" id="description" class="form-control" maxlength="50">
    </div>
    <div class="mb-2 col-6">
        <label for="shift">Shift Available</label>
        <input type="text" name="shift" id="shift" class="form-control" required 
        placeholder="Full-Time">
    </div>
    <div class="mb-2 col-6">
    <label for="salary">Salary</label>
    <input type="number" name="salary" id="salary" class="form-control" required min="1">
</div>
    <div class="text-end mt-2">
        <button class="btn" type="button">cancel</button>
        <button class="btn btn-primary" type="submit">submit</button>
    </div>
    </form>
    `
    }
}
