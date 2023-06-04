export const sliceArr = (arr, size) => {
    const resultArr = [];

    while (arr.length > 0) {
        resultArr.push(arr.splice(0, size));
    }

    return resultArr;
};

export const numCompareFn = (a, b) => parseFloat(a) - parseFloat(b);

export const strCompareFn = (a, b) => a?.toLowerCase().replace(/\s+/g, '').localeCompare(b?.toLowerCase().replace(/\s+/g, ''));

export const sortByKey = (array, sortKey, descSort) => {
    const arrayOfSortKeys = array.map(el => typeof sortKey === 'function' ? sortKey(el) : el[sortKey]);
    if (new Set(arrayOfSortKeys).size <= 1) return;

    array.sort((a, b) => {
        const aVal = typeof sortKey === 'function' ? sortKey(a) : a[sortKey];
        const bVal = typeof sortKey === 'function' ? sortKey(b) : b[sortKey];
        const isNumComparison = !isNaN(parseFloat(aVal) && parseFloat(bVal));

        return isNumComparison ? numCompareFn(aVal, bVal) : strCompareFn(aVal, bVal);
    });

    if (descSort) {
        array.reverse();
    }
};
