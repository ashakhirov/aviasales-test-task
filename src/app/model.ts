import { forward } from 'effector'
import { createGate } from 'effector-react'

import { loadSearchIdFx } from 'features/tickets'

export const AppGate = createGate()

forward({
  from: AppGate.open,
  to: loadSearchIdFx,
})
