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

// Create sparkles
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    // Random position across the full width
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    
    // Start from random positions above the viewport
    sparkle.style.top = -10 + 'px';
    
    // Random size between 2px and 4px
    const size = 2 + Math.random() * 2;
    sparkle.style.width = size + 'px';
    sparkle.style.height = size + 'px';
    
    // Random animation duration between 2 and 4 seconds
    const duration = 2 + Math.random() * 2;
    sparkle.style.animation = `sparkle ${duration}s linear`;
    
    document.body.appendChild(sparkle);
    
    // Remove sparkle after animation
    setTimeout(() => {
        sparkle.remove();
    }, duration * 1000);
}

// Create multiple sparkles at once
function createSparkles() {
    const count = 2 + Math.floor(Math.random() * 2); // Create 2-3 sparkles at once
    for (let i = 0; i < count; i++) {
        setTimeout(createSparkle, Math.random() * 100);
    }
}

// Create new sparkles periodically
setInterval(createSparkles, 100);

// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // Check if element is in viewport
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

// Add fade-in class to elements
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section, #letreiro-header');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
    
    // Initial check for elements in viewport
    handleScrollAnimations();
});

// Listen for scroll events
window.addEventListener('scroll', handleScrollAnimations);

