function ticketPrice(ticketquantity) {
  const first100 = 100; // first 100 ticket price.
  const second100 = 90; // second 100 ticket price.
  const third100 = 70; // third 100 ticket price.
  if (ticketquantity <= 100) {
    const price = ticketquantity * first100;
    return price;
  } else if (ticketquantity <= 200) {
    const first100Price = first100 * 100;  // first 100 tickets price.
    const restTicketQuantity = ticketquantity - first100;
    const restTicketPrice = restTicketQuantity * second100;
    const totalPrice = first100Price + restTicketPrice;  //second 100(rest of ticket) ticket price
    return totalPrice;
  } else {
    const first100Price = first100 * 100;  //first 100 tickets price
    const second100Price = second100 * 100;  //second 100 tickets price
    const restTicketQuantity = ticketquantity - 200;
    const restTicketCost = restTicketQuantity * third100;
    const totalCost = first100Price + second100Price + restTicketCost; // third 100 (rest of tickets price)
    return totalCost;
  }
}

const totalTicket = ticketPrice(300);
console.log(totalTicket);
