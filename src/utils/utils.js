import { formatDistanceToNow } from "date-fns";

function dateFormatter() {
    const result = formatDistanceToNow(
        new Date(2024, 4, 0, 13, 48, 15),
        {includeSeconds: true}
    )
    return result;
}

export default dateFormatter;