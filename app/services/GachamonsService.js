import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"
import { saveState } from "../utils/Store.js"

function _saveMyGachamons() {
  saveState('myGachamons', AppState.myGachamons)
}



class GachamonsService {
  rollForGachamon() {

    if (AppState.coins < 1) {
      Pop.error("No coins detected!")
      return
    }

    AppState.coins--

    const gachamons = AppState.gachamons

    let randomIndex = Math.floor(Math.random() * gachamons.length)

    const randomGachamon = gachamons[randomIndex]

    console.log('random!', randomGachamon);



    AppState.myGachamons.push(randomGachamon)
    _saveMyGachamons()

    // AppState.myGachamons = AppState.myGachamons
    // AppState.myGachamons = [...AppState.myGachamons]

    // NOTE triggers our listener
    AppState.emit('myGachamons')

    console.log('my gachamons', AppState.myGachamons);

    AppState.activeGachamon = randomGachamon

  }
  showcaseGachamon(gachamonName) {
    const gachamons = AppState.gachamons

    // const foundGachamon = gachamons.find(gachamon => gachamon.name == gachamonName)
    const foundGachamon = gachamons.find(g => g.name == gachamonName)

    console.log('Did I find something?', foundGachamon);

    AppState.activeGachamon = foundGachamon

    // console.log('Here is the appstate:', AppState);
  }

}

export const gachamonsService = new GachamonsService()