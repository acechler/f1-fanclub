
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
            ["Stroll", "src/assets/images/racers/lance.jpg"],
            ["Ocon", "src/assets/images/racers/esteban.jpg"],
            ["Gasly", "src/assets/images/racers/pierre.jpg"],
            ["Bottas", "src/assets/images/racers/valtteri.jpg"],
            ["Zhou", "src/assets/images/racers/zhou.jpg"],
            ["Magnussen", "src/assets/images/racers/kevin.jpg"],
            ["Hulkenberg", "src/assets/images/racers/nico.jpg"],
            ["Albon", "src/assets/images/racers/alexander.jpg"],
            ["Sargeant", "src/assets/images/racers/logan.jpg"],
            ["Tsunoda", "src/assets/images/racers/yuki.jpg"],
            ["Ricciardo", "src/assets/images/racers/daniel.jpg"]
        ]);
    }

    getImageSrc(racerLastName) {
        return this.f1Racers.get(racerLastName) || null;
    }
}

export default RacerMap;
