function getSelectedAddress() {
    const crypto = document.getElementById('crypto').value;
    if (crypto === 'bnb') {
        return '0x4ecc97a9b76daa354a46736bfdf2b2567ad004d3';
    } else if (crypto === 'eth') {
        return '0xb4fc22c825803B7Ef88Fd2158d7C0BF5AC3DAf6C';
    }
    return '';
}

function buyWithMetaMaskDesktop() {
    const address = getSelectedAddress();
    window.open('https://metamask.io', '_blank');
}

function buyWithMetaMaskMobile() {
    const address = getSelectedAddress();
    const deeplink = `https://metamask.app.link/send/${address}`;
    window.open(deeplink, '_blank');
}

