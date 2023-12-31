import { AppState } from "../AppState.js";
import { gachamonsService } from "../services/GachamonsService.js";
import { setHTML } from "../utils/Writer.js";

function _drawGachamons() {
  const gachamons = AppState.gachamons

  let template = ''

  gachamons.forEach(gachamon => template += gachamon.GachamonSmallTemplate)

  setHTML('gachamonCatalog', template)

}

function _drawMyGachamons() {
  const myGachamons = AppState.myGachamons

  let template = ''

  myGachamons.forEach(gachamon => template += gachamon.GachamonSmallTemplate)

  setHTML('myGachamons', template)

}

function _drawActiveGachamon() {
  const singleGachamon = AppState.activeGachamon

  console.log('draw active', singleGachamon);

  // NOTE don't need to foreach over this, it's only one object in our AppState
  setHTML('activeGachamon', singleGachamon.GachamonLargeTemplate)

}

export class GachamonsController {
  constructor () {

    // SECTION page load
    console.log('Look at these lil dudes', AppState.gachamons);
    _drawGachamons()
    // NOTE we use this to draw our gachamons after they've been brought in from localStorage
    _drawMyGachamons()


    // SECTION Application State changes
    AppState.on('activeGachamon', _drawActiveGachamon)
    AppState.on('myGachamons', _drawMyGachamons)
  }

  showcaseGachamon(gachamonName) {
    console.log('Do I work?', gachamonName);
    gachamonsService.showcaseGachamon(gachamonName)

    // NOTE no longer need to do this, our listeners will draw for us now
    // _drawActiveGachamon()
  }


  rollForGachamon() {
    gachamonsService.rollForGachamon()
  }
}