export function convertStockStatus(availability: string) {
    if (availability === 'in stock') {
        return "IN_STOCK";
    } else if (availability === 'out of stock' {
        return "OUT_OF_STOCK";
    } else if (availability === 'preorder') {
        return "PRE_ORDER";
    }

    throw new TypeError('Invalid availability type.');
}