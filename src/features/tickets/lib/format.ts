import { Currency } from 'features/filtering'
import { PRICE_LOCALE } from 'consts'

export const formatPrice = (price: number, currency?: Currency) => {
  const format = new Intl.NumberFormat(PRICE_LOCALE, {
    style: 'currency',
    maximumFractionDigits: 2,
    currency: currency?.value || 'RUB',
  }).format
  return format(price * (currency?.rate || 1))
}
