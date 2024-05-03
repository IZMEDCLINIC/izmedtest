var WebApp = window.Telegram.WebApp;

WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);

document.addEventListener('DOMContentLoaded', function () {
    var currentTime = new Date();
    var formattedTime = currentTime.toLocaleTimeString('uz-Latn', { hour: '2-digit', minute: '2-digit' });
    document.getElementById('time').value = formattedTime;

    var currentDate = new Date().toISOString().split('T')[0];
    document.getElementById('date').value = currentDate;

    var currentTime = new Date();
    var formattedTime = currentTime.toLocaleTimeString('uz-Latn', { hour: '2-digit', minute: '2-digit' });
    document.getElementById('time').value = formattedTime;


    var currentDate = new Date().toISOString().split('T')[0];
    document.getElementById('date').value = currentDate;


    var dateInput = document.getElementById('date');
    dateInput.addEventListener('input', function () {
        var enteredDate = dateInput.value;
        if (!/^20\d{2}-\d{2}-\d{2}$/.test(enteredDate)) {
            dateInput.setCustomValidity("Yil 20 bilan boshlanib 4 ta sondan tashlik topishi kerak");
        } else {
            dateInput.setCustomValidity('');
        }
    });
});


