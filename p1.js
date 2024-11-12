// Sample Data
var data = [
    { id: 1, name: "Janu", English: 50, Maths: 86, Science: 77, SocialScience: 88 },
    { id: 2, name: "Tanu", English: 75, Maths: 96, Science: 67, SocialScience: 91 },
    { id: 3, name: "Tara", English: 90, Maths: 35, Science: 86, SocialScience: 100 },
    { id: 4, name: "Glen", English: 79, Maths: 68, Science: 77, SocialScience: 78 },
    { id: 5, name: "Zara", English: 80, Maths: 85, Science: 96, SocialScience: 68 }
];

// Populate Table Function
function populateTable(data) {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    data.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.English}</td>
            <td>${student.Maths}</td>
            <td>${student.Science}</td>
            <td>${student.SocialScience}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Initial Table Load
populateTable(data);

// Filtering Logic
function applyFilter() {
    const subject = document.getElementById("subject").value;
    const filterType = document.querySelector("input[name='filterType']:checked").value;
    const filterValue1 = parseFloat(document.getElementById("filterValue1").value);
    const filterValue2 = parseFloat(document.getElementById("filterValue2").value);

    let filteredData = data.filter(student => {
        const score = student[subject];
        if (filterType === "above") return score > filterValue1;
        if (filterType === "below") return score < filterValue1;
        if (filterType === "between") return score >= filterValue1 && score <= filterValue2;
    });
    
    populateTable(filteredData);
}

// Clear Filter
function clearFilter() {
    populateTable(data);
    document.getElementById("filterValue1").value = "";
    document.getElementById("filterValue2").value = "";
}

// Sort Table Function
let sortDirection = true;
function sortTable(column) {
    sortDirection = !sortDirection;
    data.sort((a, b) => {
        if (a[column] > b[column]) return sortDirection ? 1 : -1;
        if (a[column] < b[column]) return sortDirection ? -1 : 1;
        return 0;
    });
    populateTable(data);
}

// Show or Hide Second Filter Value Input
document.querySelectorAll("input[name='filterType']").forEach(radio => {
    radio.addEventListener("change", function() {
        document.getElementById("filterValue2").style.display = radio.value === "between" ? "inline" : "none";
    });
});
