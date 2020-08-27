import { forward } from 'effector'
import { createGate } from 'effector-react'

import { loadSearchIdFx } from '~/features/tickets'
import { loadCurrencyRatesFx } from '~/features/filtering'

export const AppGate = createGate()

forward({
  from: AppGate.open,
  to: [loadSearchIdFx, loadCurrencyRatesFx],
})
