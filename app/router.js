import { AboutController } from "./controllers/AboutController.js";
import { CoinsController } from "./controllers/CoinsController.js";
import { GachamonsController } from "./controllers/GachamonsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: [CoinsController, GachamonsController],
    view: ''
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]