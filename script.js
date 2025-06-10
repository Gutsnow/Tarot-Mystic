const flecha = document.getElementsByClassName("arrow")[0];
const detalhe = document.getElementById("detalhe");
const detalhe2 = document.getElementById("detalhe2");
const detalhe3 = document.getElementById("detalhe3");
const detalhe4 = document.getElementById("detalhe4");

flecha.addEventListener("click", () => {
    // Verifica se o conteúdo já existe
    let conteudoExiste = document.querySelector(".sla");

    if (conteudoExiste) {
        // Se o conteúdo existir, remove-o
        conteudoExiste.remove();
    } else {
        // Se não existir, cria e adiciona o conteúdo
        const conteudo = document.createElement("p");
        conteudo.classList.add("sla");
        conteudo.textContent = "O tarot é uma ferramenta de orientação que depende da conexão entre o consulente e a taróloga para extrair insights significativos.";
        detalhe.appendChild(conteudo);
    }
});



const detalhes = [
    {
      id: "detalhe1",
      texto: "O tarot é uma ferramenta de orientação que depende da conexão entre o consulente e a taróloga para extrair insights significativos."
    },
    {
      id: "detalhe2",
      texto: "Não necessariamente. O mais importante é estar aberto às mensagens e reflexões que as cartas proporcionam."
    },
    {
      id: "detalhe3",
      texto: "Não. As cartas indicam possibilidades, mas o livre-arbítrio é sempre soberano."
    },
    {
      id: "detalhe4",
      texto: "Sim, mas é ideal esperar um tempo entre consultas para permitir que as energias se ajustem."
    }
  ];

  detalhes.forEach((detalhe) => {
    const elementoDetalhe = document.getElementById(detalhe.id);
    const seta = elementoDetalhe.querySelector(".arrow");

    seta.addEventListener("click", () => {
      let conteudoExiste = elementoDetalhe.querySelector(".sla");

      if (conteudoExiste) {
        conteudoExiste.remove();
      } else {
        const conteudo = document.createElement("p");
        conteudo.classList.add("sla");
        conteudo.textContent = detalhe.texto;
        elementoDetalhe.appendChild(conteudo);
      }
    });
  });

