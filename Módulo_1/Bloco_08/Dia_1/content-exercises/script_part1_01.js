const wakeUp = () => 'Acordando!!';

const breakfast = () => 'Bora tomar café!!';

const goToBed = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func());

doingThings(wakeUp);
doingThings(breakfast);
doingThings(goToBed);
