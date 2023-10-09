document.getElementById('submitBtn').addEventListener('click', async function() {
    const employeeId = document.getElementById('employeeId').value;
    if (employeeId.length !== 5) {
        document.getElementById('validationMessage').innerText = 'ID harus terdiri dari 5 karakter.';
        setTimeout(() => {
            document.getElementById('validationMessage').innerText = '';
        }, 5000);
        return;
    }

    const response = await fetch('http://localhost:3000/absensi', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ employeeId })
    });

    const data = await response.json();
    if (data.success) {
        document.getElementById('validationMessage').innerText = 'Absensi berhasil.';
        setTimeout(() => {
            document.getElementById('validationMessage').innerText = '';
        }, 1000); // Hapus pesan setelah 3 detik
    } else {
        document.getElementById('validationMessage').innerText = 'Gagal melakukan absensi.';
    }
});

document.getElementById('getAbsensiBtn').addEventListener('click', async function() {
    const response = await fetch('http://localhost:3000/absensiData');
    const data = await response.json();

    const listContainer = document.getElementById('absensiList');
    listContainer.innerHTML = '';
    document.getElementById('employeeId').value = '';

    if (data.length === 0) {
        const noDataMessage = document.createElement('tr');
        noDataMessage.innerHTML = '<td colspan="3">Belum ada data yang dimasukkan</td>';
        listContainer.appendChild(noDataMessage);

        setTimeout(() => {
            noDataMessage.remove();
        }, 1000); // Hapus pesan setelah 3 detik
        return;
    }

    data.forEach((employeeId, index) => {
        const listItem = document.createElement('tr');
        listItem.innerHTML = `
            <td>${index + 1}</td>
            <td>${employeeId}</td>
            <td>${getCurrentDate()}</td>
        `;
        listContainer.appendChild(listItem);
    });
});

function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
