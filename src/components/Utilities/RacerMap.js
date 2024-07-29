class RacerMap {
    constructor() {
      // Initialize the dictionary with some racers and their image sources
        const f1Racers = new Map([
        ["Verstappen", ""],
        ["Perez", ""],
        ["Hamilton", ""],
        ["Russell", ""],
        ["Leclerc", ""],
        ["Sainz", ""],
        ["Norris", ""],
        ["Piastri", ""],
        ["Alonso", ""],
        ["Stroll", ""],
        ["Ocon", ""],
        ["Gasly", ""],
        ["Bottas", ""],
        ["Zhou", ""],
        ["Magnussen", ""],
        ["Hulkenberg", ""],
        ["Albon", ""],
        ["Sargeant", ""],
        ["Tsunoda", ""],
        ["Ricciardo", ""]
        ]);
    };



    // Remove the extra closing brace
  
    // Method to get the image source by racer's full name
    getImageSrc(racerFullName) {
      return this.f1Racers[racerFullName] || null;
    }
  

}
  
