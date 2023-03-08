import { generateId } from "../Utils/generateId.js"



export class House {
  constructor(data) {
    this.id = generateId()
    this.address = data.address
    this.bed = data.bed
    this.bath = data.bath
    this.img = data.img
    this.description = data.description
    this.price = data.price
  }


  get HouseCard() {
    return `
    <div class="col-6 col-md-4">
    <div class="card elevation-2 text-dark fw-bold text-shadow">
      <img
        src="${this.img}"
        alt="${this.address}-${this.bed}">
      <div class="p-2">
      <div class="color px-5 rounded" style="background: #111927">
      <h3 class="text-center border-bottom border-dark text-light">${this.address}</h3> 
      </div>
      <h5 class="text-center border-bottom border-dark"> Bedrooms: ${this.bed} | Baths: ${this.bath}</h5>
        <p>${this.description}</p>
        <p class="text-end">🍔${this.price}</p>
        <button class="btn btn-outline-danger" title="delete car" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete" ></i></button>
      </div>
    </div>
  </div>`
  }


  static HouseForm() {
    return `
    <form onsubmit="app.housesController.createHouse()" class="row bg-white rounded elevation-2 p-4">
    <h3>List a House</h3>
    <div class="mb-2 col-6">
      <label for="address">Address</label>
      <input type="text" name="address" id="address" class="form-control">
    </div>
    <div class="mb-2 col-2">
      <label for="bed">Beds</label>
      <input type="number" name="bed" id="bed" class="form-control" required minlength="1" maxlength="10"
        value="0">
    </div>
    <div class="mb-2 col-2">
      <label for="bath">Baths</label>
      <input type="number" name="bath" id="bath" class="form-control" required min="1" max="10"
        value="0">
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
    <div class="mb-2 col-12">
      <label for="price">Price</label>
      <input type="number" name="price" id="price" class="form-control" required min="1">
    </div>
    <div class="text-end mt-2">
      <button class="btn" type="button">cancel</button>
      <button class="btn btn-primary" type="submit">submit</button>
    </div>
  </form>
    `
  }

}