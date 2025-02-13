document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculate').addEventListener('click', function() {
      calculateResult(false);
    });
  
    document.getElementById('calculate-iva').addEventListener('click', function() {
      calculateResult(true);
    });
  });
  
  function calculateResult(includeIVA) {
    const a = parseFloat(document.getElementById('a').value);
    const percentage = parseFloat(document.getElementById('percentage').value);
    const errorElement = document.getElementById('error');
    const resultContainer = document.getElementById('result-container');
    const resultElement = document.getElementById('result');
  
    if (isNaN(a) || isNaN(percentage)) {
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
    let calculatedResult = a / (1 - porcentaje);
  
    if (includeIVA) {
      calculatedResult *= 1.16; // Añadir el 16% de IVA
    }
  
    resultElement.textContent = calculatedResult.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    errorElement.textContent = '';
    resultContainer.style.display = 'block';
  }
  