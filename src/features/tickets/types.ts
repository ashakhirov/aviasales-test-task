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
  price: string
  carrier: string
  segments: Segment[]
}

export type TicketsResponse = {
  stop: boolean
  tickets: Ticket[]
}

export type TicketsState = {
  entities: Ticket[]
  isLoading: boolean
  error: boolean
}
