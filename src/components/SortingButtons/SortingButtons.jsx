import { useDispatch } from "react-redux";
import { sortByAdded, sortByName } from "reduxx/contacts/contactSlice";

import css from './SortingButtons.module.css';

const SortingButtons = () => {
    const dispatch = useDispatch();

    return (
        <div className={css.sortBtns__wrapper}>
            <button
                onClick={() => dispatch(sortByName())}
                className={css.sortBtns}
            >
                Sort by name 
            </button>
            <button
                onClick={() => dispatch(sortByAdded())}
                className={css.sortBtns}
            >
                Recently added
            </button>
        </div>
    )
}

export default SortingButtons;