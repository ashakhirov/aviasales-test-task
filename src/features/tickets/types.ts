export type SearchId = string

export type SearchIdResponse = {
  searchId: string
}

export type Segment = {
  origin: string
  destination: string
  date: Date
  stops: string[]
  duration: number
}

export type Ticket = {
  id: string
  price: number
  logo: string
  carrier: string
  duration: number
  stopCounts: number[]
  segments: Segment[]
}

export type TicketEntity = {
  price: number
  carrier: string
  duration: number
  segments: Segment[]
}

export type TicketsResponse = {
  stop: boolean
  tickets: Ticket[]
}

export type TicketsState = {
  entities: Ticket[]
  polling: boolean
  isLoading: boolean
  error: string | null
}
