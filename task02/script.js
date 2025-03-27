document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("userForm");
    const userTable = document.getElementById("userTable");

    // Handle form submission
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let contact = document.getElementById("contact").value;
            let address = document.getElementById("address").value;

            let user = { name, email, contact, address };

            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));

            alert("User registered successfully!");

            form.reset();
        });
    }

    // Display registered users
    if (userTable) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        userTable.innerHTML = users.length > 0
            ? users.map(user => `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.contact}</td>
                    <td>${user.address}</td>
                </tr>
            `).join("")
            : "<tr><td colspan='4' class='text-center'>No users registered yet.</td></tr>";
    }
});
