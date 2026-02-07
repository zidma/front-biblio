import { useState } from "react";
export default function AutoComplete({suggestions,handleChoose,placeholder}){
    const [filteredSuggestions,setFilteredSuggestions]=useState([])
    const [inputValue,setInputValue]=useState('')
    const handleChange=(event)=>{
        const inputValue=event.target.value;
        setInputValue(inputValue)
         const filteredSuggestions=
    suggestions.filter(suggestion=>suggestion.toLowerCase().includes(inputValue.toLowerCase()));
 setFilteredSuggestions(filteredSuggestions)
    };
    const handleSelect=(value)=>{
        handleChoose(value)
        setInputValue(value)
        setFilteredSuggestions([])
    }
   
    return <div className="autocomplete-container">
        <input
        className="form-control"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}/>
        <ul className="autocomplete-suggestions">
            {
                filteredSuggestions.map((suggestion,index)=>(
                    <li key={index} className="autocomplete-suggestion" 
                    onClick={()=>handleSelect(suggestion)}>
                        {suggestion}
                    </li>
                ))
            }
        </ul>
    </div>
}