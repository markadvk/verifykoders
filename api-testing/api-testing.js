const API_BASE = "https://rapidtest-api.onrender.com/api";

let authToken = null;

// ===== LOGIN =====
document.getElementById("login-btn").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const loginMsg = document.getElementById("login-msg");

    try {
        const res = await fetch(`${API_BASE}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        if (!res.ok) throw new Error("Login failed");

        const data = await res.json();
        authToken = data.token;
        localStorage.setItem("authToken", authToken);

        loginMsg.style.color = "green";
        loginMsg.textContent = "Login successful!";
        document.getElementById("table-section").style.display = "block";

        loadTableData();
    } catch (err) {
        loginMsg.style.color = "red";
        loginMsg.textContent = err.message;
    }
});

// ===== FETCH TABLE =====
async function loadTableData() {
    const tableMsg = document.getElementById("table-msg");
    const tbody = document.querySelector("#api-table tbody");

    try {
        const res = await fetch(`${API_BASE}/table`, {
            headers: { Authorization: `Bearer ${authToken}` }
        });

        if (!res.ok) throw new Error(`Failed to fetch table: ${res.status}`);

        const data = await res.json();
        tbody.innerHTML = "";

        data.forEach(row => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${row.id}</td>
                <td contenteditable="true" class="name">${row.name}</td>
                <td contenteditable="true" class="age">${row.age}</td>
                <td contenteditable="true" class="role">${row.role}</td>
                <td>
                    <button class="update-btn" data-id="${row.id}">Update</button>
                    <button class="delete-btn" data-id="${row.id}">Delete</button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        tableMsg.textContent = "";
        attachRowEvents();
    } catch (err) {
        tableMsg.textContent = err.message;
    }
}

// ===== ATTACH ROW EVENTS =====
function attachRowEvents() {
    const updateBtns = document.querySelectorAll(".update-btn");
    const deleteBtns = document.querySelectorAll(".delete-btn");

    updateBtns.forEach(btn => {
        btn.addEventListener("click", async () => {
            const tr = btn.closest("tr");
            const id = btn.dataset.id;
            const updatedData = {
                name: tr.querySelector(".name").textContent,
                age: parseInt(tr.querySelector(".age").textContent),
                role: tr.querySelector(".role").textContent
            };
            await fetch(`${API_BASE}/table/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`
                },
                body: JSON.stringify(updatedData)
            });
            loadTableData();
        });
    });

    deleteBtns.forEach(btn => {
        btn.addEventListener("click", async () => {
            const id = btn.dataset.id;
            await fetch(`${API_BASE}/table/${id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${authToken}` }
            });
            loadTableData();
        });
    });
}

// ===== ADD ROW =====
document.getElementById("add-row").addEventListener("click", async () => {
    await fetch(`${API_BASE}/table`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({ name: "New Name", age: 0, role: "New Role" })
    });
    loadTableData();
});

// ===== REFRESH TABLE =====
document.getElementById("refresh-table").addEventListener("click", loadTableData);
