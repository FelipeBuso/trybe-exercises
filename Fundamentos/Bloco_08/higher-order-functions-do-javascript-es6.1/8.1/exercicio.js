const wakeUp = () => console.log(`Acordando!`);
const coffeTime = () => console.log(`Bora tomar café`);
const goSleep = () => console.log(`Partiu Dormir`);

const doingThings = thing => thing(); 

doingThings(wakeUp);
doingThings(coffeTime);
doingThings(goSleep);
