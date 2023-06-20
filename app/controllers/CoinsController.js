import { AppState } from "../AppState.js";
import { coinsService } from "../services/CoinsService.js";
import { setText } from "../utils/Writer.js";

function _drawCoins() {

  let stringOfCoins = ''

  for (let i = 0; i < AppState.coins; i++) {
    stringOfCoins += '🪙'
  }

  setText('coinsCount', stringOfCoins)
}

export class CoinsController {
  constructor () {
    // SECTION page load
    console.log('Coins controller is working');

    // SECTION application state changes
    // NOTE event listener (observer pattern)
    // registers a listener that watches a specific property of our AppState for changes
    // changes are triggered by an assignment operator (=) or manually by calling AppState.emit()
    // the first argument passed to the "on" method must be a property in our AppState. This listener is tied to AppState.coins
    // the second argument passed to the "on" method is a function, which will be called every time this property in the AppState changes
    AppState.on('coins', _drawCoins)
  }



  addCoin() {
    console.log('The button was clicked');
    coinsService.addCoin()

    // NOTE no longer need to manually call draw, our listener calls draw for us now
    // _drawCoins()
  }
}
