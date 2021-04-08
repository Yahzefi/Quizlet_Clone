import { startGameOne } from "./firstGame.js";
import { startGameTwo } from "./secondGame.js";

// this is the main function for the games page
// the first game I created as I followed along with a Canvas tutorial on W3Schools
// Anything afterwards is something I did as an offshoot of that original tutorial/file

$(document).ready(()=>{
    startGameOne();
    startGameTwo();
});
