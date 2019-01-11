export function queryBuilder (queries) {
    let segments = [];
    for ( var key in queries ) {
        segments.push(`${key}=${queries[key]}`);
    }

    if ( segments.length > 0 ) {
        return segments.join('&');
    }

    return '';
}