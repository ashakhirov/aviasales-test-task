import { request } from '~/lib/request'

import { Rates } from './types'

export const getCurrencyRates = (): Promise<Rates> =>
  request<Rates>({
    method: 'get',
    path: `${process.env.CURRENCY_RATES_API_URL}/rub.json`,
  })
