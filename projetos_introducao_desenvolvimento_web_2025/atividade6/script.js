
function numeroInformado() {
  let num = document.getElementById('num2').value;
  document.getElementById('res2').innerText = `O número informado foi ${num}`;
}

function somar() {
  let a = parseFloat(document.getElementById('num3a').value);
  let b = parseFloat(document.getElementById('num3b').value);
  document.getElementById('res3').innerText = `A soma é ${a + b}`;
}

function media() {
  let notas = [1, 2, 3, 4].map(i => parseFloat(document.getElementById('n' + i).value));
  let soma = notas.reduce((acc, val) => acc + val, 0);
  document.getElementById('res4').innerText = `Média final: ${(soma / 4).toFixed(2)}`;
}

function converterMetros() {
  let metros = parseFloat(document.getElementById('metros').value);
  document.getElementById('res5').innerText = `${metros}m = ${metros * 100}cm`;
}

function areaCirculo() {
  let r = parseFloat(document.getElementById('raio').value);
  let area = Math.PI * r * r;
  document.getElementById('res6').innerText = `Área do círculo: ${area.toFixed(2)}`;
}

function areaQuadrado() {
  let lado = parseFloat(document.getElementById('lado').value);
  let area = lado * lado;
  document.getElementById('res7').innerText = `Área: ${area}, Dobro da área: ${area * 2}`;
}

function salario() {
  let valor = parseFloat(document.getElementById('valorHora').value);
  let horas = parseFloat(document.getElementById('horasMes').value);
  document.getElementById('res8').innerText = `Salário mensal: R$ ${(valor * horas).toFixed(2)}`;
}

function fToC() {
  let f = parseFloat(document.getElementById('fah').value);
  let c = 5 * ((f - 32) / 9);
  document.getElementById('res9').innerText = `${f}°F = ${c.toFixed(2)}°C`;
}

function cToF() {
  let c = parseFloat(document.getElementById('cel').value);
  let f = (c * 9 / 5) + 32;
  document.getElementById('res10').innerText = `${c}°C = ${f.toFixed(2)}°F`;
}
