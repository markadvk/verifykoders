document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("test-table");
    const addRowBtn = document.getElementById("add-row");
    const deleteRowBtn = document.getElementById("delete-row");
    const mergeCellsBtn = document.getElementById("merge-cells");
    const filterInput = document.getElementById("filter-input");
    const selectAllCheckbox = document.getElementById("select-all");

    // Add Row
    addRowBtn.addEventListener("click", () => {
        const tbody = table.querySelector("tbody");
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td><input type="checkbox" class="row-select"></td>
            <td>New Name</td>
            <td>0</td>
            <td>New Role</td>
        `;
        tbody.appendChild(newRow);
    });

    // Delete Selected Rows
    deleteRowBtn.addEventListener("click", () => {
        const selectedRows = table.querySelectorAll(".row-select:checked");
        selectedRows.forEach(row => row.closest("tr").remove());
    });

    // Merge Selected Cells
    mergeCellsBtn.addEventListener("click", () => {
        const selectedCells = table.querySelectorAll("td input:checked");
        if (selectedCells.length > 1) {
            const firstCell = selectedCells[0].closest("td");
            const mergeContent = Array.from(selectedCells).map(cell => cell.closest("tr").cells[1].textContent).join(", ");
            firstCell.colSpan = selectedCells.length;
            firstCell.textContent = mergeContent;
            selectedCells.forEach((cell, index) => {
                if (index !== 0) cell.closest("tr").remove();
            });
        }
    });

    // Filter Rows
    filterInput.addEventListener("input", (e) => {
        const filterText = e.target.value.toLowerCase();
        const rows = table.querySelectorAll("tbody tr");
        rows.forEach(row => {
            const nameCell = row.cells[1].textContent.toLowerCase();
            row.style.display = nameCell.includes(filterText) ? "" : "none";
        });
    });

    // Select All Checkbox
    selectAllCheckbox.addEventListener("change", (e) => {
        const isChecked = e.target.checked;
        const rowCheckboxes = table.querySelectorAll(".row-select");
        rowCheckboxes.forEach(checkbox => checkbox.checked = isChecked);
    });
});
