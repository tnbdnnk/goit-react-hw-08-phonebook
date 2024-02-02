import { useSelector } from 'react-redux';
import {
    getContacts,
    getError,
    getLoading,
    getRecentlyAdded,
    getSortedAlphabetic,
    getVisibleContacts,
} from 'reduxx/contacts/selectors';

export const useContacts = () => {
    const contacts = useSelector(getContacts);
    const visibleContacts = useSelector(getVisibleContacts);
    const error = useSelector(getError);
    const isLoading = useSelector(getLoading);
    const sortedAlphabetic = useSelector(getSortedAlphabetic);
    const recentlyAdded = useSelector(getRecentlyAdded);

    return {
        contacts,
        visibleContacts,
        error,
        isLoading,
        sortedAlphabetic,
        recentlyAdded,
    };
};