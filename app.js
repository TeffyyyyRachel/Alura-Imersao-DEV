let section = document.getElementById("resultados-pesquisa");
console.log(section);

let resultados = "";

for (let dado of mangas) {
    resultados += `
    <div class="item-resultado">
        <div>
            <img src="${dado.capa}" alt="${dado.alt}">
        </div>

        <div>
            <h2>${dado.titulo}</h2>

            <p class="descricao-meta">${dado.descricao}</p>
            <div class="infos">
                <div>
                    <p class="autor">Escrita por: ${dado.escritor}</p>
                    <p class="autor">Desenhada por: ${dado.desenhista}</p>
                </div>
                <p class="link"><a href="${dado.link}" target="_blank">Mais informações sobre a obra</a></p>
            </div>
        </div>
    </div>
    `
}

section.innerHTML = resultados