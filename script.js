// Achat via MetaMask (PC)
document.getElementById("buy-pc").addEventListener("click", async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            alert("✅ Paiement simulé via MetaMask Desktop !");
            window.location.href = "confirmation.html";
        } catch (error) {
            alert("❌ Paiement échoué : " + error.message);
        }
    } else {
        alert("❌ MetaMask n'est pas installé !");
    }
});

// Achat via MetaMask (Mobile)
document.getElementById("buy-mobile").addEventListener("click", () => {
    const deepLink = "https://metamask.app.link/dapp/rjb611.github.io/rjbcoin-presale/";
    window.location.href = deepLink;
});

// Conversion dynamique RJB → BNB / ETH
const rjbInput = document.getElementById("rjb-amount");
const bnbOutput = document.getElementById("bnb-value");
const ethOutput = document.getElementById("eth-value");

rjbInput.addEventListener("input", () => {
    const rjb = parseFloat(rjbInput.value);
    if (!isNaN(rjb)) {
        const bnb = (rjb * 0.00012).toFixed(6); // 1 RJB = 0.00012 BNB
        const eth = (rjb * 0.000034).toFixed(6); // 1 RJB = 0.000034 ETH
        bnbOutput.textContent = bnb;
        ethOutput.textContent = eth;
    }
});

