const tokenPriceBNB = 0.0001;
const tokenPriceETH = 0.00003;
const tokenPriceUSDT = 0.02;
const sold = 12500;

function updateEstimates() {
  const amount = parseInt(document.getElementById("rjbAmount").value || "0");

document.getElementById("rjbAmount").addEventListener("input", () => {
  const rjbAmount = parseFloat(document.getElementById("rjbAmount").value);
  const rjbPriceUSD = 0.20;
  const usdTotal = rjbAmount * rjbPriceUSD;

  const bnbPrice = 500; // valeur à ajuster en temps réel
  const ethPrice = 3000;
  const usdtPrice = 1;

  document.getElementById("bnbAmount").textContent = (usdTotal / bnbPrice).toFixed(6);
  document.getElementById("ethAmount").textContent = (usdTotal / ethPrice).toFixed(6);
  document.getElementById("usdtAmount").textContent = usdTotal.toFixed(2);
});

function buyWithMetaMaskDesktop() {
  window.location.href = "https://metamask.io";
}

function buyWithMetaMaskMobile() {
  const deepLink = "https://metamask.app.link/dapp/rjbcoin.io"; // change avec ton vrai domaine
  window.location.href = deepLink;
}

