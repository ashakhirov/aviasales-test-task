import { Answer, request } from 'lib/request'

import { SearchId, SearchIdResponse, TicketsResponse } from './types'

export const getSearchId = (): Promise<Answer<SearchIdResponse>> =>
  request<SearchIdResponse>({ method: 'get', path: 'search' })

export const getTickets = (
  searchId: SearchId,
): Promise<Answer<TicketsResponse>> =>
  request<TicketsResponse>({
    method: 'get',
    path: 'tickets',
    params: { searchId },
  })
