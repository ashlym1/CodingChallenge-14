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

// Task 3 : Highlighting the high priotity ticket 
function highlightHighPriorityTickets() {
    let highPriorityTickets = document.querySelectorAll(".ticket-card"); // Selecting  all the  tickets
    let ticketArray = Array.from(highPriorityTickets); // this converts the  nodeList to an array list 

    ticketArray.forEach(ticket => {
        let priorityLabel = ticket.querySelector("p:nth-of-type(2)"); // selecting the priority paragraph
        if (priorityLabel.textContent.includes("High")) {
            ticket.style.border = "2px solid red"; // this will highlight the high-priority tickets
            ticket.style.backgroundColor = "#ffcccb"; // the color should be Light red background
        }
    });
}
//** Test Case:  running the function to high the high priority tiket
highlightHighPriorityTickets()

// Task 4- Implementign Ticket resolution with event Bubbling 
 // Attaching the event listener to the ticket 
ticketContainer.addEventListener("click", function(event) {
    // attaching an event listner, this will show when a ticket was clicked
    if (event.target.classList.contains("ticket-card")) {
        console.log("Support ticket clicked!");
    }
});

// Attach event listener to resolve button ( this is inside the addticket funtion)
resolveButton.addEventListener("click", function(event) {
    event.stopPropagation(); // Stop event bubbling
    ticketContainer.removeChild(ticket); // Remove ticket
});

