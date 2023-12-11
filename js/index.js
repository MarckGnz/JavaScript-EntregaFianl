const shopcontent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("carrito-container")

let carrito = []

const tickets = [
    {
        id: "ticket 01",
        titulo: "Duki",
        imagen: '../images/Duki.jpg',
        categoria: "river",
        precio: "22.000"
    },
    {
        id: "ticket 02",
        titulo: "CRO",
        imagen: "../images/cro.jpg",
        categoria: "obras",
        precio: "10.000"
    },
    {
        id: "ticket 03",
        titulo: "Maria",
        imagen: "../images/maria.png",
        categoria: "river",
        precio: "35.000"
    },
    {
        id: "ticket 04",
        titulo: "RHCP",
        imagen: "../images/RHCP.jpg",
        categoria: "river",
        precio: "45.000"
    },
    {
        id: "ticket 05",
        titulo: "Taylor",
        imagen: "../images/Taylor.jpg",
        categoria: "river",
        precio: "56.000"
    },
    {
        id: "ticket 06",
        titulo: "YSY A",
        imagen: "../images/ysy.webp",
        categoria: "huracan",
        precio: "14.000"
    }
]
const conTickets = document.querySelector("#conTickets")

tickets.forEach(tickets => {

        const div = document.createElement("div");
        div.classList.add("tickets");
        div.innerHTML =  `
        <img class="tickets-imagen" src="${tickets.imagen}"alt="${tickets.titulo}">
        <div class="tickets-detalles">
            <h1 class="tickets-precio">$${tickets.precio}</1>
            <button class="agregar" id="${tickets.id}">Agregar</button>
        </div>
    `;

    conTickets.append(div)

    div.addEventListener("click",() => {
        carrito.push({
            id: tickets.id,
            img: tickets.img,
            titulo: tickets.titulo,
            precio: tickets.precio,
        })
        console.log(carrito)
    })
})

verCarrito.addEventListener("click", () => {
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-tittle">carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "x";
    modalButton.className = "modal-header-button";

    modalHeader.append(modalButton);

    carrito.forEach((tickets) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
          <img src="${tickets.img}">
          <h3>${tickets.titulo}</h3>
          <p>${tickets.precio} $<p>        
        `;

        modalContainer.append(carritoContent)
    });
});