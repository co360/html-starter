import './main.css';
import './pic_trulli.jpg';
// import Pic from './pic_trulli.jpg';

function helloEventHandler (event) {
    console.log("Received event", event);
}

// Make function global
window.helloEventHandler = helloEventHandler;
