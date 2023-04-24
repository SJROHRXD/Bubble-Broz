// quick placeholder function

export function formatPrice(price, currency = 'USD', locale = 'en-US') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(price);
}
