 // Selecting the container for support tickets 
const ticketContainer = document.getElementById("ticketContainer");

// Task 2: Adding support Tickets Dynamically :
function addTicket(customerName, issueDescription, priorityLevel) {
    const ticket = document.createElement("div"); // Creates the ticket card
    ticket.className = "ticket-card"; // Assigns  the class for styling 

    const nameHeading = document.createElement("h3"); // Heading for customer name
    nameHeading.textContent = customerName;  

    const issuePara = document.createElement("p"); // The description of the issue 
    issuePara.textContent = issueDescription;

    const priorityLabel = document.createElement("p"); // Priority level
    priorityLabel.textContent = `Priority: ${priorityLevel}`;

    // *Edit Button (should allow for edits to be made )
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-button";

    // **Resolve Button
    const resolveButton = document.createElement("button"); 
    resolveButton.textContent = "Resolve"; 
    resolveButton.className = "resolve-button"; 

    // Resolve button functionality (Removes selected ticket)
    resolveButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevents event from  bubbling
        ticketContainer.removeChild(ticket); // Removes the ticket when clicked
    });

    // ***Edit button functionality (when the edit button is clicked, allows for user to add changes)
        editButton.addEventListener("click", function() {
        enableEditing(ticket); // callling the function 
    });

    // Adding elements to the ticket
    ticket.appendChild(nameHeading); // heading 
    ticket.appendChild(issuePara); // issue 
    ticket.appendChild(priorityLabel); // priority level 
    ticket.appendChild(editButton); //  appending the edit button
    ticket.appendChild(resolveButton); // resolved 

    // Appending the ticket to the container
    ticketContainer.appendChild(ticket);
}

// ** Test Cases **
addTicket("Miriam Jennifer", "Warning: Website is not loading", "High");
addTicket("Tito Blue", "Warning: Payment not accepted", "Medium");

// Task 3 : Highlighting high-priority tickets 
function highlightHighPriorityTickets() {
    let highPriorityTickets = document.querySelectorAll(".ticket-card"); // Selecting all the tickets
    let ticketArray = Array.from(highPriorityTickets); // Converting nodelist to an array
    ticketArray.forEach(ticket => { // looping through the array
        let priorityLabel = Array.from(ticket.querySelectorAll("p"))
            .find(p => p.textContent.includes("Priority:")); // Finds the priority label

        // 
        if (priorityLabel && priorityLabel.textContent.includes("High")) { 
            ticket.style.border = "2px solid red"; // will highlight  high-priority tickets
            ticket.style.backgroundColor = "#ffcccb"; // will be in  Light red 
        }
    });
}

// ** Test Case: Runing the function to test that it highlights the high-priority ticket **
highlightHighPriorityTickets();

// Task 4 - Implementing Ticket Resolution with Event Bubbling 
ticketContainer.addEventListener("click", function(event) {
    let card = event.target.closest(".ticket-card"); // Find the closest ticket card
    if (card) {
        let nameHeading = card.querySelector("h3"); // Try to find the name heading
        // Name will show up when clicked 
        if (nameHeading && nameHeading.textContent.trim() !== "") {
            console.log(`${nameHeading.textContent}'s card was clicked!`);
        } 
    }
});

// Task 5 - Inline Editing of Support Tickets 
function enableEditing(ticket) {
    // Selecting ticket details elements 
    let nameHeading = ticket.querySelector("h3"); // Customer  name 
    let issuePara = Array.from(ticket.querySelectorAll("p")).find(p => !p.textContent.includes("Priority:"));  // Description of the issue 
    let priorityLabel = Array.from(ticket.querySelectorAll("p"))
         .find(p => p.textContent.includes("Priority:"));// Priority Level 
    let editButton = ticket.querySelector(".edit-button"); // Select the Edit button

    // Creating input fields for editing
    let nameInput = document.createElement("input");
    nameInput.value = nameHeading.textContent; // Using the existing name  

    let issueInput = document.createElement("input");
    issueInput.value = issuePara.textContent;  // Using the existing issue 

    let priorityInput = document.createElement("input");
    priorityInput.value = priorityLabel.textContent.replace("Priority: ", "");  // Removing "Priority: " so the user can edit the value 

    // Save button that should be confirming and store all edits being made
    let saveButton = document.createElement("button");
    saveButton.textContent = "Save";   
    saveButton.className = "save-button";  

    // Save button functionality : Updateing the ticket 
    saveButton.addEventListener("click", function() {
        nameHeading.textContent = nameInput.value; // Updated name
        issuePara.textContent = issueInput.value; // Updated issue
        priorityLabel.textContent = `Priority: ${priorityInput.value}`; // Updated priority
        // Having the backgroud color change based on priority 
      let newPriority = priorityInput.value.toLowerCase() ; // this is to format the words to lower case 
      if (newPriority === "high") {
        ticket.style.backgroundColor = "#ffcccb"; // Light red for high priority
    } else {
        ticket.style.backgroundColor = "#add8e6"; // Light blue for medium & low priority
    }

        // Reverting back to static text 
        ticket.replaceChild(nameHeading, nameInput);  // Replacing the input with the static text 
        ticket.replaceChild(issuePara, issueInput);
        ticket.replaceChild(priorityLabel, priorityInput);
        ticket.replaceChild(editButton, saveButton); // Restore the Edit button
    });

    // Swap to editing mode 
    ticket.replaceChild(nameInput, nameHeading);
    ticket.replaceChild(issueInput, issuePara);
    ticket.replaceChild(priorityInput, priorityLabel);
    ticket.replaceChild(saveButton, editButton);
}
