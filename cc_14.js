// Task 2: Adding support Tickets Dynamically :
// selecting the container for support tickets 
const ticketContainer = document.getElementById("ticketContainer");
function addTicket(customername, issueDescription,priorityLevel) {
    const ticket= document.createElement ("div"); // Creating the ticker card
    ticket.className="ticket-card"; // This assigns the class for syling 

    const nameHeading = document.createElement("h3"); // Heading for customer name
    nameHeading.textContent = customername;  

    const issuePara = document.createElement("p"); // issue description
    issuePara.textContent = issueDescription;

    const priorityLabel = document.createElement("p"); // the priority label
    priorityLabel.textContent = `Priority: ${priorityLevel}`;

    const resolveButton = document.createElement("button"); // resolve button
    resolveButton.textContent = "Resolve"; 
    resolveButton.className = "resolve-button"; // Assigning the  class for styling
   
    // resolve button functionaloty 
resolveButton.addEventListener("click",function() {
    ticketContainer.removeChild(ticket);// removing the ticket when it's clicked
});
   //adding the elements to the ticket
   ticket.appendChild(nameHeading);
   ticket.appendChild(issuePara);
   ticket.appendChild(priorityLabel);
   ticket.appendChild(resolveButton);
   // appendinf the tickets toi the ticket container 
   ticketContainer.appendChild(ticket);
}
// ** Test case 
addTicket("Miriam Jennifer"," Warning: Website is not loading", "High");
addTicket("Tito Blue", "Warning: Paymentnot accepted", "Medium")