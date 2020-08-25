import { nanoid } from 'nanoid'

import { TicketEntity, Ticket, Segment } from '../types'

/**
 * calculate total duration of a flight
 * @param segments - ticket segments
 * @returns total duration of a flight
 */
const calculateTotalDuration = (segments: Segment[]): number =>
  segments.reduce((acc, { duration }) => acc + duration, 0)

/**
 * generate logo
 * @param carrier - carrier abbreviated name of the carrier
 * @returns logo link
 */
const generateLogoLink = (carrier: string) =>
  `${process.env.CDN_URL}/${carrier}.png`

/**
 * generate a list of stops length
 * @param segments - segments
 * @returns stop counts
 */
const findStopCounts = (segments: Segment[]) =>
  segments.reduce<number[]>((count, { stops }) => [...count, stops.length], [])

/**
 * transform tickets for the view
 * @param tickets - tickets from the backend
 * @returns transformed tickets
 */
export const transformTickets = (tickets: TicketEntity[]): Ticket[] =>
  tickets.map((ticket) => ({
    ...ticket,
    id: nanoid(),
    logo: generateLogoLink(ticket.carrier),
    duration: calculateTotalDuration(ticket.segments),
    stopCounts: findStopCounts(ticket.segments),
  }))
