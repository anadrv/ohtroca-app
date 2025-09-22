const form = document.getElementById('itemForm');
const descricao = document.getElementById('descricao');
const contador = document.getElementById('contador');
const imagensInput = document.getElementById('imagens');
const preview = document.getElementById('preview');
const categoriasInput = document.getElementById('categorias');
const catInfo = document.getElementById('catInfo');


descricao.addEventListener('input', () => {
  contador.textContent = `${descricao.value.length}/200`;
});


imagensInput.addEventListener('change', () => {
  preview.innerHTML = "";
  const files = Array.from(imagensInput.files).slice(0,5);
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement('img');
      img.src = e.target.result;
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
});


categoriasInput.addEventListener('input', () => {
  const lista = categoriasInput.value.split(',').map(c => c.trim()).filter(c => c !== "");
  if (lista.length > 5) {
    catInfo.textContent = "Máximo de 5 categorias permitido";
    catInfo.style.color = "red";
  } else {
    catInfo.textContent = `${lista.length}/5 categorias adicionadas`;
    catInfo.style.color = "#666";
  }
});


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  if (!nome || !descricao.value.trim()) {
    alert("Preencha os campos obrigatórios!");
    return;
  }

  
  alert("Item cadastrado com sucesso!");
  form.reset();
  preview.innerHTML = "";
  contador.textContent = "0/200";
});
