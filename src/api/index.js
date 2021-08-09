import axios from "axios";

const urlAll = "https://disease.sh/v3/covid-19/all";
const urlCountries = "https://disease.sh/v3/covid-19/countries"
const urlDaily = "https://disease.sh/v3/covid-19/historical/all?lastdays=all";

export const fetchData = async () => {
    try {
        const { data } = await axios.get(urlAll);
        return data;
    }
    catch (err) {
        console.error(err);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(urlDaily);
        return data;
    }
    catch (err) {
        console.error(err);
    }
}
export const fetchCountriesName = async () => {
    try {
        const { data } = await axios.get(urlCountries);
        return data.map(response => response.country);
    } 
    catch (err){
        console.error(err);
    }
}

export const fetchCountriesData = async (country) => {
    let changeableURL = urlCountries;
    
    if(country && country !== 'global') {
        changeableURL = `${urlCountries}/${country}`;
        try {
            const { data } = await axios.get(changeableURL);
            return data;
        } 
        catch (err){
            console.error(err);
        }
    } else {
        try {
            const { data } = await axios.get(urlAll);
            return data;
        } 
        catch (err){
            console.error(err);
        }
    }

}
