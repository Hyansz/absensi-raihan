let absensiData = [];

function validateEmployeeId(employeeId) {
    return employeeId.length === 5;
}

function tambahAbsensi(employeeId, timestamp) {
    absensiData.push({ employeeId, timestamp });
}

function isEmployeeIdExists(employeeId) {
    return absensiData.some(entry => entry.employeeId === employeeId);
}

module.exports = { validateEmployeeId, tambahAbsensi, absensiData, isEmployeeIdExists };