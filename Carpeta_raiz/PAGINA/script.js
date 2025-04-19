const elemetos1 = document.getElementById("lista-1");
const elemetos2 = document.getElementById("lista-2");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

cargareventListeners();

function cargareventListeners() {
  elemetos1.addEventListener("click", comprarElemento);
  elemetos2.addEventListener("click", comprarElemento);
  document.getElementById("carrito-modal").addEventListener("click", eliminarElemento);
  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
}

function comprarElemento(e) {
  e.preventDefault();
  if(e.target.classList.contains("agregar-carrito")) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
  }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector("img").src,
        titulo: elemento.querySelector("h3").textContent,
        precio: elemento.querySelector(".precio").textContent,
        id: elemento.querySelector("a").getAttribute("data-id"),
    };
    insertarCarrito(infoElemento);
    }

function insertarCarrito(Elemento) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td><img src="${Elemento.imagen}" width=100></td>
        <td>${Elemento.titulo}</td>
        <td>${Elemento.precio}</td>
        <td><a href="#" class="borrar" data-id="${Elemento.id}">X</a></td>
    `;
    lista.appendChild(row);
    actualizarContador();
}

function actualizarContador() {
    const contador = document.getElementById("contador-carrito");
    const totalItems = lista.querySelectorAll("tr").length;
  
    if (totalItems > 0) {
      contador.textContent = totalItems;
      contador.style.display = "inline-block";
    } else {
      contador.style.display = "none";
    }
  }
  

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if (e.target.classList.contains("borrar")) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector("a").getAttribute("data-id");
    }
    actualizarContador();
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    actualizarContador();
}
  
document.addEventListener('DOMContentLoaded', () => {
    const btnServicios = document.getElementById('btn-servicios');
    const tooltip = document.getElementById('tooltip-servicios');

    btnServicios.addEventListener('click', (e) => {
        e.preventDefault();
        tooltip.classList.toggle('oculto');
    });

    document.addEventListener('click', (e) => {
        if (!btnServicios.contains(e.target) && !tooltip.contains(e.target)) {
            tooltip.classList.add('oculto');
        }
    });
});

const btnContacto = document.getElementById('btn-contacto');
const tooltipContacto = document.getElementById('tooltip-contacto');

btnContacto.addEventListener('click', (e) => {
    e.preventDefault();
    tooltipContacto.classList.toggle('oculto');
});

document.addEventListener('click', (e) => {
    if (!btnContacto.contains(e.target) && !tooltipContacto.contains(e.target)) {
        tooltipContacto.classList.add('oculto');
    }
});

function copiarTexto(id) {
    const texto = document.getElementById(id).textContent;
    navigator.clipboard.writeText(texto)
        .then(() => {
            alert('Copiado al portapapeles: ' + texto);
        })
        .catch(err => {
            console.error('Error al copiar:', err);
        });
}

  const logoSticky = document.getElementById("logoSticky");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      logoSticky.classList.add("visible");
    } else {
      logoSticky.classList.remove("visible");
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const carritoIcon = document.getElementById("img-carrito");
    const modal = document.getElementById("carrito-modal");
    const cerrarModal = document.getElementById("cerrar-modal");
  
    carritoIcon.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.remove("oculto");
    });
  
    cerrarModal.addEventListener("click", () => {
      modal.classList.add("oculto");
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("oculto");
      }
    });
  });

  const botonesInfo = document.querySelectorAll('.abrir-info');
  const modalInfo = document.getElementById('info-modal');
  const textoInfo = document.getElementById('info-texto');
  const cerrarInfo = document.getElementById('cerrar-info-modal');
  
  botonesInfo.forEach(boton => {
    boton.addEventListener('click', e => {
      e.preventDefault();
      const textoBoton = boton.getAttribute('data-texto');
      textoInfo.textContent = textoBoton;
      modalInfo.classList.remove('oculto');
      logoSticky.style.display = 'none'; // Oculta la barra amarilla
    });
  });
  
  cerrarInfo.addEventListener('click', () => {
    modalInfo.classList.add('oculto');
    if (window.scrollY > 100) {
      logoSticky.style.display = 'flex'; // Vuelve a mostrar si debe estar visible
    }
  });
  


