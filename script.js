function toggleButtons() {
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
    var toggle = document.getElementById('small-ul');

    if (button1.style.display !== 'none') {
        // Button 1 is visible, hide it and show Button 2 and nav-form
        button1.style.display = 'none';
        button2.style.display = 'block';
        toggle.style.display = 'block';
    } else {
        // Button 2 and nav-form are visible, hide them and show Button 1
        button1.style.display = 'block';
        button2.style.display = 'none';
        toggle.style.display = 'none';
    }
}