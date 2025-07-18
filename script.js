document.getElementById('buy-metamask').addEventListener('click', async () => {
    const crypto = document.getElementById('crypto-choice').value;

    if (typeof window.ethereum === 'undefined') {
        alert("MetaMask est requis pour cette opération.");
        return;
    }

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const user = accounts[0];

    const amountEth = crypto === 'eth' ? '0.01' : '0.003'; // exemple montant
    const receiver = crypto === 'eth'
        ? "0xb4fc22c825803B7Ef88Fd2158d7C0BF5AC3DAf6C"
        : "0x4ecc97a9b76daa354a46736bfdf2b2567ad004d3";

    const params = [{
        from: user,
        to: receiver,
        value: (BigInt(parseFloat(amountEth) * 1e18)).toString(16),
    }];

    try {
        await ethereum.request({
            method: 'eth_sendTransaction',
            params: params,
        });

        const response = await fetch('/enregistrer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user, crypto, amount: amountEth })
        });

        window.location.href = "confirmation.html";
    } catch (error) {
        alert("Transaction annulée ou erreur.");
        console.error(error);
    }
});
