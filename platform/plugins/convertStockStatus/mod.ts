export function convertStockStatus(availability: string) {
	switch(availability) {
		case 'in stock':
			return "IN_STOCK";
		case 'out of stock':
			return "OUT_OF_STOCK";
		case 'preorder':
			return "PRE_ORDER"
		default: 
			throw new TypeError('Invalid availability type.');
	}
}