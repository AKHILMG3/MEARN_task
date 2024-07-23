//  Q) Create a class MovieTicket with the following specifications:


//    1) A constructor that initializes the movie name, the theater name, the number of seats, and the price per ticket.
//       2) A method bookTickets that decreases the number of available seats by the number of tickets requested and returns the total cost.
//       3) A method printDetails that prints the movie name, the theater name, the number of available seats, and the price per ticket.
//       4) A method isAvailable that returns true if the requested number of seats are available, otherwise returns false.
//       5) Add a method cancelTickets that increases the number of available seats by the number of tickets canceled and returns the refund amount.
//       6) Add a method applyDiscount that applies a discount to the price per ticket for a promotional offer.





class MovieTicket{
      constructor(moviename, theatername,numberofseat,ticketprice){
            this.moviname= moviename;
            this.movitheatername= theatername;
            this.movinumberofseat= numberofseat;
            this.moviticketprice= ticketprice;
      }
      BookTickets(tickets){
            this.movinumberofseat-=tickets
            return`total cost of ${tickets} ticket: ${tickets*this.ticketprice}`
      }
      
      printDetail(){
            console.log(this.moviname,this.movitheatername,this.movinumberofseat,this.moviticketprice);
      }

       Available(seat){
            if (tickets<=this.movinumberofseat) {
                  return true;
            }
            else{
                  return false;
            }
       }
      

}

m1= new MovieTicket("vettam","EVM",250,130,)
m1.printDetail()