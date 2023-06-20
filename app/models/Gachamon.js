export class Gachamon {

  constructor (data) {
    // debugger
    this.name = data.name
    this.rarity = data.rarity
    this.emoji = data.emoji
  }

  get GachamonSmallTemplate() {
    return /*html*/`
    <div class="col-1 p-1">
      <div onclick="app.GachamonsController.showcaseGachamon('${this.name}')" class="bg-secondary selectable text-center elevation-4 py-3" title="${this.name}">
        <p class="fs-1 mb-0">${this.emoji}</p>
      </div>
    </div>
    `
  }

  get GachamonLargeTemplate() {
    return `
    <div class="col-8 m-auto">
      <div class="bg-primary text-center p-5">
        <p class="active-gachamon">${this.emoji}</p>
        <div class="d-flex justify-content-between text-light fs-2">
          <p>Name: ${this.name}</p>
          <p>Rarity: ${this.rarity}</p>
        </div>
      </div>
    </div>
    `
  }
}