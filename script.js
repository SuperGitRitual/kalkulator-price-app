document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('calculate').addEventListener('click', function() {
    calculateResult(false);
  });

  document.getElementById('calculate-iva').addEventListener('click', function() {
    calculateResult(true);
  });

  document.getElementById('calculate-margin').addEventListener('click', function() {
    calculateMargin();
  });

  document.getElementById('reset').addEventListener('click', function() {
    resetFields();
  });
});

function calculateResult(includeIVA) {
  const cost = parseFloat(document.getElementById('cost').value);
  const percentage = parseFloat(document.getElementById('percentage').value);
  const errorElement = document.getElementById('error');
  const resultContainer = document.getElementById('result-container');
  const resultElement = document.getElementById('result');

  if (isNaN(cost) || isNaN(percentage)) {
    errorElement.textContent = 'Please enter both values.';
    resultContainer.style.display = 'none';
    return;
  }

  if (percentage >= 100) {
    errorElement.textContent = 'Percentage must be less than 100.';
    resultContainer.style.display = 'none';
    return;
  }

  const porcentaje = percentage / 100;
  let calculatedResult = cost / (1 - porcentaje);

  if (includeIVA) {
    calculatedResult *= 1.16; // Añadir el 16% de IVA
  }

  resultElement.textContent = calculatedResult.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  errorElement.textContent = '';
  resultContainer.style.display = 'block';
}

function calculateMargin() {
  const sellPrice = parseFloat(document.getElementById('sell-price').value);
  const cost = parseFloat(document.getElementById('cost').value);
  const errorElement = document.getElementById('error');
  const resultContainer = document.getElementById('result-container');
  const resultElement = document.getElementById('result');

  if (isNaN(sellPrice) || isNaN(cost)) {
    errorElement.textContent = 'Please enter both values.';
    resultContainer.style.display = 'none';
    return;
  }

  const margin = ((sellPrice - cost) / sellPrice) * 100;
  resultElement.textContent = margin.toFixed(2) + '%';
  errorElement.textContent = '';
  resultContainer.style.display = 'block';
}

function resetFields() {
  document.getElementById('cost').value = '';
  document.getElementById('sell-price').value = '';
  document.getElementById('percentage').value = '';
  document.getElementById('error').textContent = '';
  document.getElementById('result-container').style.display = 'none';
}
