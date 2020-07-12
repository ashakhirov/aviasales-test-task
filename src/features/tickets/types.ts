export type SearchId = string

export type SearchIdResponse = {
  searchId: string
}

export type SegmentEntity = {
  origin: string
  destination: string
  date: Date
  stops: string[]
  duration: number
}

export type Segment = {
  id: string
  origin: string
  destination: string
  date: Date
  stops: string[]
  duration: number
}

export type TicketEntity = {
  price: string
  carrier: string
  segments: Segment[]
}

export type Ticket = {
  id: string
  price: string
  logo: string
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
