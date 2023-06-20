import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"
import { saveState } from "../utils/Store.js"

function _saveMyGachamons() {
  saveState('myGachamons', AppState.myGachamons)
}



class GachamonsService {
  rollForGachamon() {

    if (AppState.coins < 1) {
      // NOTE Pop utility to bring in Sweet Alerts
      Pop.error("No coins detected!")
      // REVIEW full stop!
      return
    }

    // NOTE triggers the listener in the CoinsController
    AppState.coins--

    const gachamons = AppState.gachamons

    // NOTE creates a random number between 0 and the last index of our array

    let randomIndex = Math.floor(Math.random() * gachamons.length)

    // NOTE pulls out a random gachamon using the random index from the line above
    const randomGachamon = gachamons[randomIndex]

    console.log('random!', randomGachamon);


    // NOTE adds the gachamon to our array Gachamons that I own
    AppState.myGachamons.push(randomGachamon)

    // NOTE private function that saves our gachamon array to local storage
    _saveMyGachamons()

    // AppState.myGachamons = AppState.myGachamons
    // AppState.myGachamons = [...AppState.myGachamons]

    // NOTE manually triggers our listener. 📢 yells at our guy watching the AppState and tells him to run his function
    AppState.emit('myGachamons')

    console.log('my gachamons', AppState.myGachamons);

    // NOTE triggers the listener by using the assignment operator
    AppState.activeGachamon = randomGachamon

  }
  showcaseGachamon(gachamonName) {
    const gachamons = AppState.gachamons

    // NOTE does the exact same thing as the line below it
    // const foundGachamon = gachamons.find(gachamon => gachamon.name == gachamonName)
    const foundGachamon = gachamons.find(g => g.name == gachamonName)

    console.log('Did I find something?', foundGachamon);

    // NOTE change the null property in our AppState to the Gachamon we just found, the assignment operator triggers our event listener set up by the constructor in GachamonsController
    AppState.activeGachamon = foundGachamon

    // console.log('Here is the appstate:', AppState);
  }

}

export const gachamonsService = new GachamonsService()