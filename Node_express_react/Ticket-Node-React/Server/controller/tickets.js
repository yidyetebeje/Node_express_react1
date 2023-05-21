import { v4 as uuid } from "uuid";

let tickets = [
  {
    id: "1",
    title: "Rope Climbing",
    price: "100",
    description: "Rope Climbing",
    place: "Kathmandu",
    image: "https://images.unsplash.com/photo-1611095789909-4b0b2b2b0b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9wZSUyMGNsaW1iaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    date: "2021-05-01",
  }
];

export const getTickets = (req, res) => res.send(tickets);

export const createTicket = (req, res) => {
  const ticket = req.body;
  tickets.push({ ...ticket, id: uuid() });
  res.send("Ticket with detail has been added Successfully");
};
export const deleteTicket = (req, res) => {
  const id = req.params.id;
  const ticket = tickets.find((ticket) => ticket.id === id);
  if (ticket) {
    tickets = tickets.filter((ticket) => ticket.id !== id);
    res.send("Ticket has been deleted Successfully");
  } else {
    res.send("Ticket with id not found");
  }
};
export const updateTicket = (req, res) => {
  const id = req.params.id;
  const ticket = tickets.find((ticket) => ticket.id === id);
  if (ticket) {
    tickets = tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, ...req.body };
      }
      return ticket;
    });
    res.send("Ticket has been updated Successfully");
  } else {
    res.send("Ticket with id not found");
  }
};
export const getTicket = (req, res) => {
  const id = req.params.id;
  const ticket = tickets.find((ticket) => ticket.id == id);
  if (ticket) {
    res.send(ticket);
  } else {
    res.send("Ticket with id not found");
  }
};

export default tickets;
