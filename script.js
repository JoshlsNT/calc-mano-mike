function calcularCashback() {
  const perda = parseFloat(document.getElementById("perda").value);
  const resultadoDiv = document.getElementById("resultado");

  if (isNaN(perda) || perda < 10) {
      resultadoDiv.textContent = "Por favor, insira um valor válido maior ou igual a R$10.";
      return;
  }

  let porcentagem = 0;

  if (perda >= 10 && perda <= 999.99) {
      porcentagem = 2.5;
  } else if (perda >= 1000 && perda <= 1499.99) {
      porcentagem = 5;
  } else if (perda >= 1500 && perda <= 2499.99) {
      porcentagem = 7;
  } else if (perda >= 2500) {
      porcentagem = 12;
  }

  let cashback = (perda * porcentagem) / 100;

  if (cashback > 500) {
      cashback = 500;
  }

  resultadoDiv.innerHTML = `
      <p>Perda Real: R$${perda.toFixed(2)}</p>
      <p>Porcentagem de Cashback: ${porcentagem}%</p>
      <p>Cashback Recebido: <strong>R$${cashback.toFixed(2)}</strong></p>
      <p>Tipo de Cashback: Bônus com ROLLOVER de 1x.</p>
  `;
}
