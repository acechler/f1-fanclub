// RacerMap.js

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
            ["Ricciardo", "src/assets/images/racers/daniel.png"]
        ]);

        this.racerBios = new Map([
            ["Verstappen", "Max Verstappen is a Dutch racing driver currently competing in Formula One for Red Bull Racing. His father, Jos Verstappen, is a former Formula One driver. Max started his career as a go-kart racer at the age of four. By the age of seven, he was already competing in go-kart championships. Like his father before him, Max is now a professional Formula One driver and is considered one of the best drivers in the sport."],
            ["Perez", "Sergio Pérez, also known as 'Checo', is a Mexican racing driver for Red Bull Racing. Like most professional Formula One drivers, Sergio started his career by competing in go-kart competitions at the age of six. He has a brother named Antonio who is also a professional racer, but Antonio competed in NASCAR. Sergio now competes as a professional Formula One racer."],
            ["Hamilton", "Lewis Hamilton is a British racing driver for Mercedes-AMG Petronas Formula One Team, with seven World Championship titles. When he was six years old, his father got him a go-kart for Christmas. Lewis started his racing career by competing in go-kart competitions. Hamilton is considered one of the greatest Formula One racers, having competed in the sport since 2007."],
            ["Russell", "George Russell is a British racing driver currently competing in Formula One for Mercedes-AMG Petronas Formula One Team. Russell started his racing career with go-karts at the age of eight. He has a brother named Benjy who also took part in go-kart competitions. Russell began his Formula One career in 2015. Although young, he has proven that he has the potential to be one of the best Formula One racers."],
            ["Leclerc", "Charles Leclerc is a Monegasque racing driver currently competing in Formula One for Scuderia Ferrari. Charles started as a competitive go-kart racer in 2005, making him eight years old when he started."],
            ["Sainz", "Carlos Sainz Jr. is a Spanish racing driver currently competing in Formula One for Scuderia Ferrari. Carlos started his career as a go-kart racer in 2006 at the age of twelve. He is the son of Carlos Sainz Sr., who raced in World Rally. Carlos began competing in Formula One in 2010."],
            ["Norris", "Lando Norris is a British-Belgian racing driver currently competing in Formula One for McLaren. Lando started competing in go-kart competitions at the age of seven. He also has a brother named Oliver who competed as a go-kart racer around this time. Norris began his Formula One career in 2019 as a rookie."],
            ["Piastri", "Oscar Piastri is an Australian racing driver currently competing in Formula One for McLaren."],
            ["Alonso", "Fernando Alonso is a Spanish racing driver currently competing in Formula One for Aston Martin. Fernando started his career as a go-kart racer at the age of three. He began his Formula One career in 2003."],
            ["Stroll", "Lance Stroll is a Canadian racing driver currently competing in Formula One for Aston Martin."],
            ["Ocon", "Esteban Ocon is a French racing driver currently competing in Formula One for Alpine."],
            ["Gasly", "Pierre Gasly is a French racing driver currently competing in Formula One for Alpine."],
            ["Bottas", "Valtteri Bottas is a Finnish racing driver currently competing in Formula One for Alfa Romeo."],
            ["Zhou", "Zhou Guanyu is a Chinese racing driver currently competing in Formula One for Alfa Romeo."],
            ["Magnussen", "Kevin Magnussen is a Danish racing driver currently competing in Formula One for Haas."],
            ["Hulkenberg", "Nico Hülkenberg is a German racing driver currently competing in Formula One for Haas."],
            ["Albon", "Alexander Albon is a Thai-British racing driver currently competing in Formula One for Williams."],
            ["Sargeant", "Logan Sargeant is an American racing driver currently competing in Formula One for Williams."],
            ["Tsunoda", "Yuki Tsunoda is a Japanese racing driver currently competing in Formula One for AlphaTauri."],
            ["Ricciardo", "Daniel Ricciardo is an Australian racing driver currently competing in Formula One for AlphaTauri."]
        ]);
    }

    getImageSrc(racerLastName) {
        return this.f1Racers.get(racerLastName) || null;
    }

    getRacerBio(racerLastName) {
        return this.racerBios.get(racerLastName) || "Bio not available.";
    }
}

export default RacerMap;
