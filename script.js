window.onload= function(){
    alert("Welcome to the Skill Test!");
}

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("message").value.trim();

    if (name === "" || email === "" || msg === "") {
        message.style.color = "red";
        message.textContent = "Error: All fields are required.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Form submitted successfully!";
});

// Theme toggle
const toggleButton = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "Switch to Light Mode";
} else {
    toggleButton.textContent = "Switch to Dark Mode";
}

toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Switch to Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        toggleButton.textContent = "Switch to Dark Mode";
        localStorage.setItem("theme", "light");
    }
});


// Function to update the student count
function updateStudentCount() {
    const tableBody = document.querySelector("table tbody");
    const totalRows = tableBody.getElementsByTagName("tr").length;
    document.getElementById("studentCount").textContent = totalRows;
}

// Call it once on page load
updateStudentCount();

// Handle Add Student form submission
document.getElementById("addStudentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get input values
    const name = document.getElementById("newName").value.trim();
    const age = document.getElementById("newAge").value.trim();
    const skill = document.getElementById("newSkill").value.trim();

    if (name && age && skill) {
        // Create new row
        const tableBody = document.querySelector("table tbody");
        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${name}</td>
            <td>${age}</td>
            <td>${skill}</td>
        `;

        // Add new row to table
        tableBody.appendChild(newRow);

        // Update count
        updateStudentCount();

        // Clear form fields
        document.getElementById("addStudentForm").reset();
    }
});

