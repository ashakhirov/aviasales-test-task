import { request } from 'lib/request'

import { SearchId, SearchIdResponse, TicketsResponse } from './types'

export const getSearchId = (): Promise<SearchIdResponse> =>
  request<SearchIdResponse>({ method: 'get', path: 'search' })

export const getTickets = (searchId: SearchId): Promise<TicketsResponse> =>
  request<TicketsResponse>({
    method: 'get',
    path: 'tickets',
    params: { searchId },
  })
