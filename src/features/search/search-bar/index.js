import { useDispatch, useSelector } from 'react-redux';
import { selectSearchTerm, setSearchTerm } from '../search.slice';
import './search-bar.css';

export default function SearchBar() {
    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch(); // Task 10

    function handleChange({ target: { value } }) {
        dispatch(setSearchTerm(value)); // Task 11
    }

    return (
        <form className="search-bar">
            <label htmlFor="search">Search by caption: </label>
            <input
                id="search"
                name="search"
                onChange={handleChange}
                placeholder="e.g., terrier"
                type="search"
                value={searchTerm}
            />
        </form>
    );
}
