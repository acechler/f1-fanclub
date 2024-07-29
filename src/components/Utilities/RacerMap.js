//todo convert to jpg and to firstname
class RacerMap {
    constructor() {
        this.f1Racers = new Map([
            ["Verstappen", "src/assets/images/racers/max.jpg"],
            ["Perez", "src/assets/images/racers/sergio.jpg"],
            ["Hamilton", "src/assets/images/racers/lewis.jpg"],
            ["Russell", "src/assets/images/racers/george.jpg"],
            ["Leclerc", "src/assets/images/racers/charles.jpg"],
            ["Sainz", "src/assets/images/racers/carlos.jpg"],
            ["Norris", "src/assets/images/racers/lando.jpg"],
            ["Piastri", "src/assets/images/racers/oscar.jpg"],
            ["Alonso", "src/assets/images/racers/fernando.jpg"],
            ["Stroll", "src/assets/images/racers/stroll.png"],
            ["Ocon", "src/assets/images/racers/ocon.png"],
            ["Gasly", "src/assets/images/racers/gasly.png"],
            ["Bottas", "src/assets/images/racers/bottas.png"],
            ["Zhou", "src/assets/images/racers/zhou.png"],
            ["Magnussen", "src/assets/images/racers/magnussen.png"],
            ["Hulkenberg", "src/assets/images/racers/hulkenberg.png"],
            ["Albon", "src/assets/images/racers/albon.png"],
            ["Sargeant", "src/assets/images/racers/sargeant.png"],
            ["Tsunoda", "src/assets/images/racers/tsunoda.png"],
            ["Ricciardo", "src/assets/images/racers/ricciardo.png"]
        ]);
    }

    getImageSrc(racerLastName) {
        return this.f1Racers.get(racerLastName) || null;
    }
}

export default RacerMap;
