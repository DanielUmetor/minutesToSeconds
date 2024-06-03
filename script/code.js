function convertToSeconds() {
    let minutes = document.getElementById('minutesInput').value;
    if (minutes === '') {
        document.getElementById('result').innerText = 'Please enter a value';
        return;
    }

    let seconds = minutes * 60;
    document.getElementById('result').innerText = `${minutes} minutes is equal to ${seconds} seconds`;
}
