import './bootstrap';

const alertButton = document.getElementById('open-alert');

    const openAlertButton = document.querySelector('#exampleBtn');
    console.log(openAlertButton)
    const modal = document.querySelector('#exampleModal');
console.log(modal)
    openAlertButton.addEventListener('click', () => {
        modal.style.display = 'block'
        modal.classList.remove('fade')
    });
    const closeButton = document.querySelectorAll('.btn-accept')
for (const button of closeButton) {
    button.addEventListener('click', () => {
        modal.style.display = 'none'
        modal.classList.add('fade')
    });
}


if(alertButton) {
    alertButton.addEventListener('click', () => {
        alert('ok');
    })
}
