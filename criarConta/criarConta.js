'use strict'

const senhaInput = document.getElementById('senhaInput');

senhaInput.addEventListener('input', function(event) {
    const inputLength = event.target.value.length;
    let maskedValue = '';

    for (let i = 0; i < inputLength; i++) {
        maskedValue += '*';
    }

    event.target.value = maskedValue;
});

const confirmacaosenhaInput = document.getElementById('confirmacaosenhaInput');

confirmacaosenhaInput.addEventListener('input', function(event) {
    const inputLength = event.target.value.length;
    let maskedValue = '';

    for (let i = 0; i < inputLength; i++) {
        maskedValue += '*';
    }

    event.target.value = maskedValue;
});