import { formatDistanceToNow } from "date-fns";

function dateFormatter(date) {
    const result = formatDistanceToNow(
        date,
        {includeSeconds: true}
    )
    return result;
}

export default dateFormatter;