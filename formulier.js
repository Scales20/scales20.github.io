/*Niels Oerlemans
Dokkie: een programma om kosten mee te delen*/


import mysql from 'mysql2';

/**
 * Entry point
 */



/*
Deze functie maakt de invoervelden op de pagina aan.
Het herhaalde blok code maakt een invoerveld aan voor elke gebruiker.
Bovenaan vraag ik de namen van de gebruikers op, en ik geef deze weer boven elk invoerveld.
Als de deelnemers zin toegevoegd, en er op de knop is geklikt,
verschijnen de invoervelden voor de kosten.
Als daar op de knop wordt gedrukt, verschijnen invoervelden voor de omschrijving van de kosten
en voor wie moet betalen voor een bepaald bedrag.
*/

async function maakInvoerveldenAan() {
    const uitvoerGebruiker = document.querySelector("#uitvoer-gebruiker");
    const pGebruiker = document.createElement("p");
    const invoerveldGebruiker = document.createElement("input");
    const buttonGebruiker = document.createElement("button");
    const gebruikerBoodschap = "Vul hieronder in wie u bent.";
    const ok = "Ok";

    uitvoerGebruiker.appendChild(pGebruiker);
    uitvoerGebruiker.appendChild(invoerveldGebruiker);
    uitvoerGebruiker.appendChild(buttonGebruiker);
    pGebruiker.innerHTML = gebruikerBoodschap;
    buttonGebruiker.innerHTML = ok;
    invoerveldGebruiker.className = "invoer-gebruiker";

    buttonGebruiker.addEventListener("click", function () {
        const pUitje = document.createElement("p");
        const invoerveldUitje = document.createElement("input");
        const buttonUitje = document.createElement("button");
        const uitjeBoodschap = "Vul hieronder uw uitje in.";

        const uitvoerUitje = document.querySelector("#uitvoer-uitje");
        uitvoerUitje.appendChild(pUitje);
        uitvoerUitje.appendChild(invoerveldUitje);
        uitvoerUitje.appendChild(buttonUitje);
        pUitje.innerHTML = uitjeBoodschap;
        buttonUitje.innerHTML = ok;
        invoerveldUitje.className = "invoer-uitje";

        const uitvoerKostenAantal = document.querySelector("#uitvoer-kosten-aantal");
        const pKostenAantal = document.createElement("p");
        const invoerveldKostenAantal = document.createElement("input");
        const buttonKostenAantal = document.createElement("button");
        const hoeveelKostenBoodschap = "Hoeveel bedragen heeft u?";

        uitvoerKostenAantal.appendChild(pKostenAantal);
        uitvoerKostenAantal.appendChild(invoerveldKostenAantal);
        uitvoerKostenAantal.appendChild(buttonKostenAantal);
        pKostenAantal.innerHTML = hoeveelKostenBoodschap;
        buttonKostenAantal.innerHTML = ok;

        const uitvoerDeelnemersAantal = document.querySelector("#uitvoer-deelnemers-aantal");
        const pDeelnemersAantal = document.createElement("p");
        const invoerveldDeelnemersAantal = document.createElement("input");
        const buttonDeelnemersAantal = document.createElement("button");
        const hoeveelDeelnemersBoodschap = "Hoeveel deelnemers waren er?";

        uitvoerDeelnemersAantal.appendChild(pDeelnemersAantal);
        uitvoerDeelnemersAantal.appendChild(invoerveldDeelnemersAantal);
        uitvoerDeelnemersAantal.appendChild(buttonDeelnemersAantal);
        pDeelnemersAantal.innerHTML = hoeveelDeelnemersBoodschap;
        buttonDeelnemersAantal.innerHTML = ok;

        buttonDeelnemersAantal.addEventListener("click", async function () {
            const uitvoerDeelnemers = document.querySelector("#uitvoer-deelnemers");
            const deelnemerHeading = document.createElement("p");
            const boodschapDeelnemers = "Wie waren de deelnemers?";
            uitvoerDeelnemers.appendChild(deelnemerHeading);
            deelnemerHeading.innerHTML = boodschapDeelnemers;
            for (let i = 0; i < invoerveldDeelnemersAantal.value; i++) {

                const invoerveldDeelnemers = document.createElement("input");
                const buttonDeelnemers = document.createElement("button");
                const pDeelnemers = document.createElement("p");

                uitvoerDeelnemers.appendChild(pDeelnemers);
                uitvoerDeelnemers.appendChild(invoerveldDeelnemers);
                uitvoerDeelnemers.appendChild(buttonDeelnemers);
                invoerveldDeelnemers.className = "invoer-deelnemers";
                buttonDeelnemers.innerHTML = ok;

            }
        });

        buttonKostenAantal.addEventListener("click", async function () {
            const boodschapKosten = "Wat waren de bedragen?";
            const headerKosten = document.querySelector("#header-kosten");
            const boodschapOmschrijving = "Vul hier de omschrijving van uw kosten in.";
            const headerOmschrijvingKosten =
                document.querySelector("#header-omschrijving-kosten");
            headerKosten.innerHTML = boodschapKosten;
            headerOmschrijvingKosten.innerHTML = boodschapOmschrijving;

            for (let i = 0; i < invoerveldKostenAantal.value; i++) {

                const uitvoerOmschrijvingKosten = document.querySelector("#uitvoer-omschrijving-kosten");
                const uitvoerKosten = document.querySelector("#uitvoer-kosten");

                const invoerveldOmschrijvingKosten = document.createElement("input");
                const buttonOmschrijvingKosten = document.createElement("button");
                const pOmschrijvingKosten = document.createElement("p");
                const betalerHeading = document.createElement("p");

                const boodschapBetalers = "Vul bij dit bedrag de deelnemers in die hebben betaald.";

                uitvoerOmschrijvingKosten.appendChild(pOmschrijvingKosten);
                uitvoerOmschrijvingKosten.appendChild(invoerveldOmschrijvingKosten);
                uitvoerOmschrijvingKosten.appendChild(buttonOmschrijvingKosten);
                uitvoerOmschrijvingKosten.appendChild(betalerHeading);
                invoerveldOmschrijvingKosten.className = "invoer-omschrijving-kosten";
                buttonOmschrijvingKosten.innerHTML = ok;

                const invoerveldKosten = document.createElement("input");
                const buttonKosten = document.createElement("button");
                const pKosten = document.createElement("p");

                uitvoerKosten.appendChild(pKosten);
                uitvoerKosten.appendChild(invoerveldKosten);
                uitvoerKosten.appendChild(buttonKosten);
                invoerveldKosten.className = "invoer-kosten";
                buttonKosten.innerHTML = ok;


                buttonKosten.addEventListener("click", async function () {
                    const betalers = document.createElement("p");
                    uitvoerKosten.appendChild(betalers);
                    betalers.innerHTML = boodschapBetalers;
                    for (let j = 0; j < invoerveldDeelnemersAantal.value; j++) {

                        const pBetalers = document.createElement("p");
                        const invoerveldBetalers = document.createElement("input");
                        const buttonBetalers = document.createElement("button");

                        betalers.appendChild(pBetalers);
                        betalers.appendChild(invoerveldBetalers);
                        betalers.appendChild(buttonBetalers);
                        buttonBetalers.innerHTML = ok;
                        invoerveldBetalers.className = "invoer-betalers";

                    };


                });
            }




        });



    });

}

maakInvoerveldenAan();





/* Deze functie maakt contact met de database
en voegt alle relevante gegevens toe*/
async function maakUitjeGebruikerDeelnemersEnKostenAan() {
    const deelnemerElementen = document.getElementsByClassName("invoer-deelnemers");
    const uitjeOmschrijving = document.getElementsByClassName("invoer-uitje");
    const gebruikerOmschrijving = document.getElementsByClassName("invoer-gebruiker");
    const kostenElementen = document.getElementsByClassName("invoer-kosten");
    const kostenOmschrijvingElementen = document.getElementsByClassName("invoer-omschrijving-kosten");
    const betalerElementen = document.getElementsByClassName("invoer-betalers");
    const uitvoerBalans = document.querySelector("#uitvoer-bon");

    /*Dit is een functie die de som van een lijst berekent.
    Ik gebruik deze functie 
    om het bedrag te berekenen dat iedere deelnemer heeft betaald*/

    function berekenSom(lijst) {
        let som = 0;
        for (let i = 0; i < lijst.length; i++) {
            som += lijst[i];
        }
        return (som);
    }

    const deelnemerNamen = [];
    const gebruikerIds = [];
    const betalerLijst = [];
    const lijstKosten = [];
    const lijstKostenOmschrijving = [];
    const balansLijst = [];
    const kostenLijst = [];




    /*De eerste functie vult het uitje in met de huidige datum erbij
    De tweede functie vult de gebruiker in, met een vooraf ingesteld wachtwoord en email*/
    const resultUitje =
        (await api.queryDatabase("INSERT INTO event (description, dateCreated) VALUES (?, ?)",
            uitjeOmschrijving[0].value, (new Date().toISOString().slice(0, 10))));
    const resultGebruiker =
        (await api.queryDatabase("INSERT INTO user(password, email, username) VALUES (?, ?, ?)",
            "gannet+50", "rhunter@gmail.com", gebruikerOmschrijving[0].value));



    /*Deze functie haalt de gebruikerId van elke gebruiker op. 
    Deze moet in de deelnemertabel worden ingevuld*/

    for (let i = 0; i < deelnemerElementen.length; i++) {
        const query2 = ("SELECT userId FROM user WHERE username IN ('"
            + deelnemerElementen[i].value + "')");
        const resultGebruikers = await api.queryDatabase(query2, ...deelnemerNamen);
        gebruikerIds.push(resultGebruikers[0].userId);
    }

    /* Deze functie vult de deelnemers in in de tabel
    Het koppelt de gebruikers aan een uitje en vult ook hun Id in.*/
    let query = "INSERT INTO participant(username, eventId, userId) VALUES";

    Array.from(deelnemerElementen).forEach((el, i) => {
        query += "('" + deelnemerElementen[i].value + "', "
            + resultUitje.insertId + ", '" + gebruikerIds[i] + "')";
        if (i < deelnemerElementen.length - 1) {
            query += ",";
        }
        deelnemerNamen.push(el.value);
    });
    await api.queryDatabase(query, ...deelnemerNamen);

    /*Deze functie verzamelt eerst de kosten
    en slaat deze op pin een lijst.
    Vervolgens verzamelt het de betalers
    en slaat deze ook op. Hierna worden bedragen
    waarbij geen betaler staan op 0 gezet.*/




    Array.from(betalerElementen).forEach((el, i) => {
        Array.from(kostenElementen).forEach((el, j) => {
            for (let k = 0; k < deelnemerElementen.length; k++) {
                kostenLijst.push(kostenElementen[j].value);
            }
        });
        if (betalerElementen[i].value === "") {
            betalerLijst.push("JanSm");
        }
        else {
            betalerLijst.push(betalerElementen[i].value);
        }
        if (betalerElementen[i].value === "") {
            lijstKosten.push(0);
        }
        else
            lijstKosten.push(kostenLijst[i]);
    });




    /*Deze functie legt de omschrijvingen van de kosten vast 
    en slaat deze op in een lijst*/
    Array.from(kostenOmschrijvingElementen).forEach((el, i) => {
        for (let j = 0; j < kostenOmschrijvingElementen.length; j++) {
            lijstKostenOmschrijving.push(kostenOmschrijvingElementen[i].value);
        }
    });



    /*Deze functie slaat de betaling op in de database
    Hiervoor gebruikt het de Id van het uitje, 
    de huidige datum, de omschrijving, het bedrag en de naam*/

    let queryBetaling =
        "INSERT INTO payment(eventId, datePaid, description, amount, name) VALUES";

    Array.from(betalerElementen).forEach((el, i) => {
        queryBetaling += "(" +
            resultUitje.insertId +
            ", " +
            "'" +
            new Date().toISOString().slice(0, 10) +
            "', '" +
            lijstKostenOmschrijving[i] +
            "', '" +
            lijstKosten[i] +
            "', '" +
            betalerLijst[i] +
            "')";
        if (i < betalerElementen.length - 1) {
            queryBetaling += ",";
        }
    });
    await api.queryDatabase(queryBetaling, ...deelnemerNamen);




    /*Deze functie haalt de bedragen op die elke gebruiker heeft betaald, 
    en slaat ze op in een lijst*/
    for (let i = 0; i < deelnemerNamen.length; i++) {
        const gebruikerSom = [];
        let query5 =
            await api.queryDatabase("SELECT amount FROM payment WHERE eventId = ? AND name = ?",
                resultUitje.insertId, deelnemerNamen[i]);
        for (let j = 0; j < query5.length; j++) {
            gebruikerSom.push(query5[j].amount);
        }
        const somGebruiker = berekenSom(gebruikerSom);
        balansLijst.push(somGebruiker);
    }



    /*Deze functie berekent hoeveel elke deelnemer moet betalen of terug moet krijgen
    en geeft dit onderaan de pagina weer*/
    const gemiddelde = (berekenSom(balansLijst) / deelnemerNamen.length);


    Array.from(deelnemerNamen).forEach((el, i) => {
        const p = document.createElement("p");
        uitvoerBalans.appendChild(p);
        if (gemiddelde - balansLijst[i] > 0.00) {
            p.innerHTML = deelnemerNamen[i] + " moet " +
                (gemiddelde - balansLijst[i]).toFixed(2) + " euro betalen.";
        }
        if (gemiddelde - balansLijst[i] === 0.00) {
            p.innerHTML = deelnemerNamen[i] + " hoeft niets te betalen.";
        }
        if (gemiddelde - balansLijst[i] < 0.00) {
            p.innerHTML = deelnemerNamen[i] + " moet " +
                (balansLijst[i] - gemiddelde).toFixed(2) + " euro krijgen.";
        }

    });

    
}



/*Hier worden al de functies uitgevoerd*/

const okKnopBon = document.querySelector("#ok-knop-bon");

okKnopBon.addEventListener("click", function () {
    maakUitjeGebruikerDeelnemersEnKostenAan();
});