function connectMetaMask() {
  const selectedCrypto = document.getElementById('crypto').value;
  let address = '';

  if (selectedCrypto === 'bnb') {
    address = '0x4ecc97a9b76daa354a46736bfdf2b2567ad004d3';
  } else if (selectedCrypto === 'eth') {
    address = '0xb4fc22c825803B7Ef88Fd2158d7C0BF5AC3DAf6C';
  }

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const metamaskLink = isMobile
    ? `https://metamask.app.link/send/${address}`
    : `https://metamask.io`;

  window.open(metamaskLink, '_blank');

  // Affiche la confirmation temporairement
  setTimeout(() => {
    document.getElementById('confirmation').style.display = 'block';
  }, 2000);
}

