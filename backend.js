let absensiData = [];

function validateEmployeeId(employeeId) {
    return employeeId.length === 5;
}

function tambahAbsensi(employeeId, timestamp) {
    absensiData.push({ employeeId, timestamp });
}

module.exports = { validateEmployeeId, tambahAbsensi, absensiData };