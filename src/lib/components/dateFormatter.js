import { format } from 'date-fns';

export const formatDateTime = (dateTime) => {
    const date = new Date(dateTime)
    return format(date, 'd MMMM u')
};
