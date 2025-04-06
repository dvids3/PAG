const carrito = document.getElementById("carrito");
const elemetos1 = document.getElementById("lista-1");
const elemetos2 = document.getElementById("lista-2");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

cargareventListeners();

function cargareventListeners() {
  elemetos1.addEventListener("click", comprarElemento);
  elemetos2.addEventListener("click", comprarElemento);
  carrito.addEventListener("click", eliminarElemento);
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
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}