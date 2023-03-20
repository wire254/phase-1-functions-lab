// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    return Math.abs(distance - 42)
};

function distanceFromHqInFeet(feet){
    distanceFromHqInBlocks(feet);
    return distanceFromHqInBlocks(feet) * 264;
};

function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * 264
};

function calculatesFarePrice(start2, destination2){
    if (distanceTravelledInFeet(start2, destination2) <= 400){
        return 0;
    } else if (distanceTravelledInFeet(start2, destination2) >= 400 && distanceTravelledInFeet(start2, destination2) <= 2000){
        return Math.abs((distanceTravelledInFeet(start2, destination2)- 400) * .02)
    } else if (distanceTravelledInFeet(start2, destination2) >= 2000 && distanceTravelledInFeet(start2, destination2) <= 2500){
        return 25;
    } else if (distanceTravelledInFeet(start2,destination2) >= 2500) {
        return 'cannot travel that far'
    }
};
