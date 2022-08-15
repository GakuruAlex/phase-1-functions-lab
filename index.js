// Code your solution in this file!

function distanceFromHqInBlocks(distance){

    return Math.abs( distance-42);
}




function distanceFromHqInFeet(distance){

const distanceInFeets=  (distanceFromHqInBlocks(distance) *264);

return distanceInFeets;

}

function distanceTravelledInFeet(start, destination){


    const distanceTravelled = Math.abs((destination-start)* 264);

return distanceTravelled;

}


function calculatesFarePrice(start,destination){
   const distance = distanceTravelledInFeet(start,destination);
   let fare;

if(distance < 400 ){
    fare = 0;

}
else if (distance > 400 && distance < 2000){
    fare = ((distance - 400 )*0.02);

}
else if(distance > 2000 && distance < 2500){
    fare = 25;

}
else{
fare =`cannot travel that far`;
}
return fare;
}







