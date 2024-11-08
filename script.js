document.getElementById("tellFortuneButton").addEventListener("click", tellFortune);

function tellFortune() {
    const nameText = document.getElementById('nameText').value;
    const places = "Aika, Lotaw, Lovaw, Ccangho, Pangva, Ramcci, Sihanthung, Zawngnak, Angraw, Polei, Vuakkhipaw, Lavoikum, Darcung, Khawboi, Setlai, Lungkhin, Leipi, Calthawng, Langly, Sensi, Khawtua, Tuinia, Rovaw, Rezua, Ccawtui, Ransae, Etang, Thandya, Tuibyn, Hrinthang, Siangaw, Lungthlialia, Thawlang, Hunglei, Raso, Tuilaw, Tingsi, Zesaw, Thesi, Lungring, Sungpi, Votui, Kailung, Belae, Lungngo, Sempi, Tuphae, Lungdua, Suiton, Daidin, Din, Voiru, Narbung";

    const alphabetArray = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    const randomLetter = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];

    // Convert the string into an array and select a random place
    const placesArray = places.split(', ').map(place => place.trim());
    const randomPlace = placesArray[Math.floor(Math.random() * placesArray.length)];

    if (nameText) {
        const messages = [
            "Your soulmate is from " + randomPlace + ", Zotung",
            "Look for love in " + randomPlace + ", Zotung",
            "Your true love hails from " + randomPlace + ", Zotung",
            "Find your soulmate in " + randomPlace + ", Zotung",
            "Your partner is waiting for you in " + randomPlace + ", Zotung",
            "Sorry ;(, seems like you will never find one."
        ];
        let randomGenMgs = messages[Math.floor(Math.random() * messages.length)];
        let randomMessage = nameText + ", " + randomGenMgs + ", Chin. and starts with '" + randomLetter + "'.";
        let equal = randomGenMgs == messages[5];
        if (equal) {
               randomMessage = nameText + ", " + randomGenMgs;
        };

        // Ensure 'fortuneResult' is passed, not 'name'
        window.location.href = "result.html?fortuneResult=" + encodeURIComponent(randomMessage);
    } else {
        alert("Please enter your name!");
    }
}
