function calcular() {
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const sexo = document.getElementById('sexo').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const atividade = parseFloat(document.getElementById('atividade').value);
    const distancia = parseFloat(document.getElementById('distancia').value) || 0;
    const metaKg = parseFloat(document.getElementById('metaKg').value) || 0;
    const diasMeta = parseInt(document.getElementById('diasMeta').value) || 0;
  
    let tmb;
    if (sexo === 'masculino') {
      tmb = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade);
    } else {
      tmb = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade);
    }
  
    const gcdt = tmb * atividade;
    const agua = peso * 35;
    const gastoCaminhada = peso * distancia * 0.9;
    const deficitDiario = (metaKg > 0 && diasMeta > 0) ? ((7700 * metaKg) / diasMeta) : 0;
  
    document.getElementById('resultados').innerHTML = `
      <h2>Resultados para ${nome}</h2>
      <div class="resultado-item"><strong>TMB:</strong> ${tmb.toFixed(2)} kcal/dia</div>
      <div class="resultado-item"><strong>Gasto Calórico Diário Total:</strong> ${gcdt.toFixed(2)} kcal/dia</div>
      <div class="resultado-item"><strong>Necessidade Hídrica:</strong> ${(agua / 1000).toFixed(2)} L/dia</div>
      <div class="resultado-item"><strong>Gasto com Caminhada:</strong> ${gastoCaminhada.toFixed(2)} kcal</div>
      ${deficitDiario ? `<div class="resultado-item"><strong>Déficit Diário para perder ${metaKg} kg em ${diasMeta} dias:</strong> ${deficitDiario.toFixed(2)} kcal/dia</div>` : ''}
    `;
  }
  