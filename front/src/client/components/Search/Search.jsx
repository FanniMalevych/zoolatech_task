import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid';
import getData from "../../../shared/getData/getData";


const Search = () => {
    const [value, setValue] = useState("");
    const [options, setOptions] = useState([])

    const handleChange = (e) => {
        setValue(e.target.value);
        const selectedHero = options.find(el => el.name === e.target.value)
        if (!selectedHero) {
            getData(`/search-people/?name=${e.target.value}`, setOptions)
        } else {
            setValue(`${selectedHero.name} (${selectedHero.homeworld})`)
        }
    }

    const optionsList = options.map(el => <option key={uuidv4()} value={el.name}/>)

    return (
        <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" name="name" id='name' list="names"
                   onChange={handleChange} value={value}/>
            <label htmlFor="name" className="form__label">Search</label>
            <datalist id="names">
                {optionsList}
            </datalist>
        </div>
    );
}
export default Search;