// aparecer e ocultar a seção de presentes de ambos
function mostrarCasamento() {
  document.getElementById('marriage').style.display = 'block';
  document.getElementById('kitchen').style.display = 'none';

  document.getElementById('colorCasamento').classList.add('ativo');
  document.getElementById('colorCha').classList.remove('ativo');
}

function mostrarCha() {
  document.getElementById('marriage').style.display = 'none';
  document.getElementById('kitchen').style.display = 'block';

  document.getElementById('colorCasamento').classList.remove('ativo');
  document.getElementById('colorCha').classList.add('ativo');
}

window.onload = () => {
  mostrarCasamento();
};

// voltar para página incial
function homePage() {
  window.location = ('/index.html');
}

// CONTAGEM REGRESSIVA
const dataCasamento = new Date("2026-02-22T15:00:00").getTime();
      const timer = document.getElementById("timer");

      const intervalo = setInterval(() => {
        const agora = new Date().getTime();
        const distancia = dataCasamento - agora;

        if (distancia < 0) {
          clearInterval(intervalo);
          timer.innerHTML = "🎉 Já estamos casados!";
          return;
        }

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        timer.innerHTML = `
          ${dias} <span class="label">dias</span> 
          ${horas} <span class="label">horas</span> 
          ${minutos} <span class="label">minutos</span> 
          ${segundos} <span class="label">segundos</span>
        `;
      }, 1000);

const corFiltro = document.getElementById('filtro-cor');
const catFiltro = document.getElementById('filtro-categoria');
const itensCha = document.querySelectorAll('.presentestwo li');

function filtrarCha() {
  const cor = corFiltro.value;
  const cat = catFiltro.value;

  itensCha.forEach(item => {
    const itemCor = item.getAttribute('data-cor');
    const itemCat = item.getAttribute('data-cat');

    const corOk = !cor || itemCor === cor;
    const catOk = !cat || itemCat === cat;

    if (corOk && catOk) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

corFiltro.addEventListener('change', filtrarCha);
catFiltro.addEventListener('change', filtrarCha);
