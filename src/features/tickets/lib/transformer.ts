import { nanoid } from 'nanoid'

import { TicketEntity, Ticket } from '../types'

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
  }
}
