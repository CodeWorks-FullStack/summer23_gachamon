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
    console.log('Coins controller is working');

    AppState.on('coins', _drawCoins)
  }



  addCoin() {
    console.log('The button was clicked');
    coinsService.addCoin()
    // _drawCoins()
  }
}
