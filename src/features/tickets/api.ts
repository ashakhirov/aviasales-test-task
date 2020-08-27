import { request } from 'lib/request'

import { SearchId, SearchIdResponse, TicketsResponse } from './types'

export const getSearchId = (): Promise<SearchIdResponse> =>
  request<SearchIdResponse>({
    method: 'get',
    path: `${process.env.API_URL}/search`,
  })

export const getTickets = (searchId: SearchId): Promise<TicketsResponse> =>
  request<TicketsResponse>({
    method: 'get',
    path: `${process.env.API_URL}/tickets`,
    params: { searchId },
  })
