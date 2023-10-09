const express = require('express');
const { validateEmployeeId, tambahAbsensi, absensiData } = require('./backend');

const app = express();
app.use(express.json());
app.use(express.static('./public'));

app.post('/absensi', (req, res) => {
    const { employeeId } = req.body;
    const timestamp = new Date();

    if (validateEmployeeId(employeeId)) {
        tambahAbsensi(employeeId, timestamp);
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.get('/absensiData', (req, res) => {
    res.json(absensiData.map(entry => entry.employeeId));
});

app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});
