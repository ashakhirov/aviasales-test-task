import { nanoid } from 'nanoid'

import { TicketEntity, Ticket, Segment } from '../types'

/**
 * format flight price for Russian locale
 * @param {number} price flight price
 * @returns {string} fligt price in Russian locale
 */
const formatPriceValue = (price: number): string =>
  price.toLocaleString('ru-Ru')

/**
 * calculate total duration of a flight
 * @param {Array<Segment>} segments - ticket segments
 * @returns {number} - total duration of a flight
 */
const calculateTotalDuration = (segments: Segment[]): number =>
  segments.reduce((acc, { duration }) => acc + duration, 0)

/**
 * generate logo
 * @param {string} carrier carrier abbreviated name of the carrier
 * @returns {string} logo link
 */
const generateLogoLink = (carrier: string) =>
  `${process.env.CDN_URL}/${carrier}.png`

/**
 * prepare ticket for the view
 * @param {TicketEntity} ticket ticket from the backend
 * @returns {Ticket} prepared ticket
 */
export const transformTicket = (ticket: TicketEntity): Ticket => {
  return {
    ...ticket,
    id: nanoid(),
    logo: generateLogoLink(ticket.carrier),
    duration: calculateTotalDuration(ticket.segments),
    price: formatPriceValue(ticket.price),
  }
}
