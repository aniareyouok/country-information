import axios from "axios";

console.log('Hallo daar!');

async function getCountries(){
    try {
        //get and sort from api
        const countriesUnsorted = await axios.get("https://restcountries.com/v2/all");
        const countries = countriesUnsorted.data.sort((a, b) => {
            return a.population - b.population;
        })

        //get html-element
        let ul = document.getElementById("countries");

        //build innerhtml
        let innerhtml = "";

        //sort out useful variables and plug them into innerhtml
        for (let i = 0; i < countries.length; i++) {
            const country = countries[i];
            const name = country.name;
            const flag = country.flag;
            const region = country.region;
            const population = country.population;
            innerhtml += `<li> <span> <img class="flags" src="${flag}" alt="${name}">${namecolor(name, region)}</span> <br> has a population of: ${population} people</li>`;
        }

        //put innerhtml on the page
        ul.innerHTML = innerhtml;
    } catch(e){
        console.log(e);
    }
}
function namecolor(name, region) {
    //gives a name the color of the region it belongs to
    const colormapping = {
        Africa: "blue",
        Americas: "green",
        Asia: "red",
        Europe: "yellow",
        Oceania: "purple",
    }
    return `<span style=color:${colormapping[region]}> ${name} </span>`

}

getCountries();