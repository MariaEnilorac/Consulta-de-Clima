const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null = document.querySelector("#input-localizacao");
const sectionTempoInfo = document.querySelector('#tempo-info');

form?.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!input || !sectionTempoInfo) return;

    const localizacao = input.value.trim();

    if (localizacao.length < 3) {
        alert("O local precisa ter pelo menos 3 letras.");
        return;
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(localizacao)}&appid=992efcddadbe837d3325fc0684e903fa&lang=pt_br&units=metric`;
        console.log(`Requesting URL: ${url}`);

        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Erro ${resposta.status}: ${resposta.statusText}`);
        }

        const dados = await resposta.json();

        if (!dados || !dados.main || !dados.weather || !dados.weather[0]) {
            throw new Error("Dados do tempo não encontrados.");
        }

        if (typeof dados.main.temp !== 'number') {
            throw new Error("Temperatura não encontrada nos dados.");
        }

        const infos = {
            temperatura: Math.round(dados.main.temp),
            local: dados.name,
            icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,
        };
        
        sectionTempoInfo.innerHTML = 
        `<div class="tempo-dados">
            <h2>${infos.local}</h2>
            <span>${infos.temperatura}°C</span>
            <img src="${infos.icone}" alt="Ícone do tempo para ${infos.local}">
        </div>`;
    } catch (error) {
        console.error("Erro ao buscar os dados do tempo:", error);
        alert("Ocorreu um erro ao buscar os dados do tempo.");
        sectionTempoInfo.innerHTML = '';
    }
});
