import brushTeeth from "./brushTeeth.js";
import skincare from "./skincare.js";
import putOnClothes from "./putOnClothes";
import sortOutHair from "./sortOutHair";

function getReadyForBed() {
    brushTeeth();
    skincare();
    putOnClothes();
    sortOutHair();
    turnOffLights();
    getIntoBed();
    closeEyes();
}

function getReadyForWork() {
    skincare();
    brushTeeth();
    sortOutHair();
}