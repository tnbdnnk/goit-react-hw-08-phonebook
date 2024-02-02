import { useDispatch } from "react-redux";
// import { useContacts } from "hooks/useContact";
import { sortByAdded, sortByName } from "reduxx/contacts/contactSlice";
// import {
//     TbSortAscendingLetters,
//     TbSortDescendingLetters,
//     TbSortAscending2,
//     TbSortDescending2,
// } from 'react-icons/tb';

import css from './SortingButtons.module.css';

const SortingButtons = () => {
    const dispatch = useDispatch();
    // const { sortedAlphabetic } = useContacts();
    // const { recentlyAdded } = useContacts();

    return (
        <div className={css.sortBtns__wrapper}>
            <button
                onClick={() => dispatch(sortByName())}
                className={css.sortBtns}
            >
                Sort by name 
                {/* {sortedAlphabetic ? (
                    <TbSortDescendingLetters size={'30'}/>
                ) : (
                    <TbSortAscendingLetters size={'30'} />
                )} */}
            </button>
            <button
                onClick={() => dispatch(sortByAdded())}
                className={css.sortBtns}
            >
                Recently added{' '}
                {/* {recentlyAdded ? (
                    <TbSortAscending2 size={'30'} />
                ) : (
                        <TbSortDescending2 size={'30'} />
                )} */}
            </button>
        </div>
    )
}

export default SortingButtons;