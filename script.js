const tokenPriceBNB = 0.0001;
const tokenPriceETH = 0.00003;
const tokenPriceUSDT = 0.02;
const sold = 12500;

function updateEstimates() {
  const amount = parseInt(document.getElementById("rjbAmount").value || "0");

  document.getElementById("bnbAmount").textContent = (amount * tokenPriceBNB).toFixed(6);
  document.getElementById("ethAmount").textContent = (amount * tokenPriceETH).toFixed(6);
  document.getElementById("usdtAmount").textContent = (amount * tokenPriceUSDT).toFixed(2);

  // update bar
  const percent = Math.min((sold / 5000000) * 100, 100);
  document.getElementById("progress-bar").style.width = percent + "%";
  document.getElementById("tokens-sold").textContent = sold.toLocaleString();
}

function buyWithMetaMask() {
  alert("Connexion à MetaMask (version PC)... Paiement fictif BNB/ETH.");
}

function buyWithMetaMaskMobile() {
  const crypto = document.getElementById("crypto").value;
  const mobileLink = crypto === "bnb"
    ? "https://metamask.app.link/send/0x4ecc97a9b76daa354a46736bfdf2b2567ad004d3"
    : "https://metamask.app.link/send/0xb4fc22c825803B7Ef88Fd2158d7C0BF5AC3DAf6C";
  window.open(mobileLink, "_blank");
}

document.getElementById("rjbAmount").addEventListener("input", updateEstimates);
updateEstimates();

