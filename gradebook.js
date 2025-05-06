async function fetchGradeData() {
  try {
      const response = await fetch('http://localhost:3000/api/grades');
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      populateGradebook(data);
  } catch (error) {
      console.error('Error fetching grade data:', error);
  }
}

function populateGradebook(data) {
  const tableBody = document.getElementById('gradebook-body');
  tableBody.innerHTML = '';

  data.forEach(row => {
      const tr = document.createElement('tr');

      const nameTd = document.createElement('td');
      nameTd.textContent = row.student_name;
      tr.appendChild(nameTd);

      const subjectTd = document.createElement('td');
      subjectTd.textContent = row.subject;
      tr.appendChild(subjectTd);

      const gradeTd = document.createElement('td');
      gradeTd.textContent = row.grade;
      tr.appendChild(gradeTd);

      tableBody.appendChild(tr);
  });
}

// Load grade data when the page loads
window.onload = fetchGradeData;
