// function to add a new row
function newRow() {
    const table = document.getElementById('activitiesTable').getElementsByTagName('tbody')[0];
    const rowCount = table.rows.length + 1;
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>Activity ${rowCount}</td>
        <td>A${rowCount}</td>
        <td><input type="text" class="input-box weight" /></td>
        <td>
            <input type="text" class="input-box small grade" oninput="updatePercent(this)" /> / 
            <input type="text" class="input-box small total" oninput="updatePercent(this)" />
        </td>
        <td class="percent"></td>
    `;
}

// function to update the percentage
function updatePercent(element) {
    const row = element.closest('tr');
    const grade = row.querySelector('.grade').value;
    const total = row.querySelector('.total').value;
    const percentCell = row.querySelector('.percent');

    if (grade && total) {
        const percentage = (parseFloat(grade) / parseFloat(total)) * 100;
        percentCell.textContent = `${percentage.toFixed(2)}%`;
    } else {
        percentCell.textContent = '';
    }
}

// function to calculate mean of grades
function calculateMean() {
    const table = document.getElementById('activitiesTable');
    const grades = table.querySelectorAll('.grade');
    const totals = table.querySelectorAll('.total');
    let sum = 0;
    let count = 0;

    grades.forEach((grade, index) => {
        const total = totals[index].value;
        if (grade.value && total) {
            sum += parseFloat(grade.value) / parseFloat(total);
            count++;
        }
    });

    const mean = (sum / count) * 100;
    document.getElementById('result').textContent = `Mean: ${mean.toFixed(2)}%`;
}

// function to calculate weighted grades
function calculateWeighted() {
    const table = document.getElementById('activitiesTable');
    const grades = table.querySelectorAll('.grade');
    const totals = table.querySelectorAll('.total');
    const weights = table.querySelectorAll('.weight');
    let weightedSum = 0;
    let weightSum = 0;

    grades.forEach((grade, index) => {
        const total = totals[index].value;
        const weight = weights[index].value;
        if (grade.value && total && weight) {
            weightedSum += (parseFloat(grade.value) / parseFloat(total)) * parseFloat(weight);
            weightSum += parseFloat(weight);
        }
    });

    const weightedMean = (weightedSum / weightSum) * 100;
    document.getElementById('result').textContent = `Weighted Mean: ${weightedMean.toFixed(2)}%`;
}
