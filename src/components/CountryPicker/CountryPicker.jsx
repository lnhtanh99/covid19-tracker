import { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from './CountryPicker.module.css';

import { fetchCountriesName } from '../../api';
const CountryPicker = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]); 

    useEffect(() => {
        const fetchCountries = async() => {
            setCountries(await fetchCountriesName());
        }

        fetchCountries();
    },[setCountries]);

    
    return ( 
    <FormControl className={styles.formControl}>
        <NativeSelect 
            defaultValue=""
            onChange={ (event) =>handleCountryChange(event.target.value) }
        >
            <option value="global">Global</option>
            {
                countries && countries.map((country, index) => (
                    <option 
                        key={ index }
                        value={ country }
                    >{ country }
                    </option>
                ))
            }
        </NativeSelect>
    </FormControl>
    );
}
 
export default CountryPicker;