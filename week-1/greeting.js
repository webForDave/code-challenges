const greetingsDatabase = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso"
};

function welcome(language) {
    // Check if the language exists in the greetings database
    if (greetingsDatabase.hasOwnProperty(language)) {
        return greetingsDatabase[language];
    } else {
        return greetingsDatabase.english;
    }
}

console.log(welcome('spanish'));