import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { getCityNames } from "../../api/api"

const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null)

    // getCityNames is a function defined for making API calls in api.js
    // response of "loadOptions" should be an object with "options" prop, which contains array of options.
    const loadOptions = (inputValue) => {
        return getCityNames(inputValue)
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }

    return (
        <AsyncPaginate
            placeholder = "Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search