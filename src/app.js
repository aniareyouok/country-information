import axios from "axios";

console.log('Hallo daar!');

async function getCountries(){
    const countriesUnsorted = await axios.get("https://restcountries.com/v2/all");
    const countries = countriesUnsorted.data.sort((a, b) => {
        return a.population - b.population;
    })g
    let ul = document.getElementById("countries");
    console.log(countries);
    let innerhtml = "";

    for(let i = 0; i < countries.length; i++){
        const country = countries[i];
        //console.log("komt ik hier wel?");
        //console.log(country);
        const name = country.name;
        const flag = country.flag;
        const region = country.region;
        const population = country.population;
        console.log("name: "+name);
        console.log("flag: " +flag);
        console.log("population: "  +population);
        innerhtml += `<li> <span> <img class="flags" src="${flag}" alt="${name}">${namecolor(name, region)}</span> <br> has a population of: ${population}</li>`;
    }
    ul.innerHTML=innerhtml;
}
function namecolor(name, region) {
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