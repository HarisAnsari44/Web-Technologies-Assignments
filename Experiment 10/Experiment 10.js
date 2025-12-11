let students = [];
let editingIndex = -1;

// 1. Add Student
function addStudent() {
    let name = document.getElementById("name").value;
    let sid = document.getElementById("sid").value;
    let dept = document.getElementById("dept").value;
    let cgpa = parseFloat(document.getElementById("cgpa").value);

    if (name === "" || sid === "") {
        alert("Name and Student ID required");
        return;
    }

    let student = { name: name, sid: sid, dept: dept, cgpa: cgpa };
    students.push(student);
    displayStudents();
    clearForm();
}

// 2. Display
function displayStudents(list = students) {
    let tbody = document.querySelector("#studentTable tbody");
    tbody.innerHTML = "";

    let topCGPA = getTopCGPA(list);

    for (let i = 0; i < list.length; i++) {
        let row = "<tr";

        if (list[i].cgpa === topCGPA) {
            row += " class='top'";
        }

        row += ">" +
            "<td>" + (i + 1) + "</td>" +
            "<td>" + list[i].name + "</td>" +
            "<td>" + list[i].sid + "</td>" +
            "<td>" + list[i].dept + "</td>" +
            "<td>" + list[i].cgpa + "</td>" +
            "<td>" +
            "<button onclick='startUpdate(" + i + ")'>Edit</button>" +
            "<button onclick='deleteStudent(" + i + ")'>Delete</button>" +
            "</td>" +
            "</tr>";

        tbody.innerHTML += row;
    }
}

// 3. Delete Student
function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

// 4. Start Update
function startUpdate(index) {
    editingIndex = index;

    document.getElementById("name").value = students[index].name;
    document.getElementById("sid").value = students[index].sid;
    document.getElementById("dept").value = students[index].dept;
    document.getElementById("cgpa").value = students[index].cgpa;
}

// 5. Update student
function updateStudent() {
    if (editingIndex === -1) {
        alert("Select a record to update");
        return;
    }

    students[editingIndex].name = document.getElementById("name").value;
    students[editingIndex].sid = document.getElementById("sid").value;
    students[editingIndex].dept = document.getElementById("dept").value;
    students[editingIndex].cgpa = parseFloat(document.getElementById("cgpa").value);

    displayStudents();
    clearForm();
}

// 6. Search
document.getElementById("search").addEventListener("input", function () {
    let text = this.value.toLowerCase();
    let filtered = students.filter(function (s) {
        return s.name.toLowerCase().includes(text) ||
               s.sid.toLowerCase().includes(text) ||
               s.dept.toLowerCase().includes(text);
    });

    displayStudents(filtered);
});

// 7. Find Top CGPA
function getTopCGPA(list) {
    if (list.length === 0) return null;

    let top = list[0].cgpa;
    for (let i = 1; i < list.length; i++) {
        if (list[i].cgpa > top) {
            top = list[i].cgpa;
        }
    }
    return top;
}

// Clear form
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("sid").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("cgpa").value = "";
    editingIndex = -1;
}

// Buttons
document.getElementById("addBtn").onclick = addStudent;
document.getElementById("updateBtn").onclick = updateStudent;
