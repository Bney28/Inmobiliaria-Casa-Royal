console.log("Buenas");

// Para ejecutar la página web correctamente, primero cargar el API en la terminal
//Mock API
const API_URL = "http://localhost:3000/catalogo"

let data;

//Async / Await para traer la info de las Tarjetas desde la API
const traerCasa = async () => {
    try {
        let response = await fetch(API_URL)
        data = await response.json()
        imprimirTarjetas(data)

    } catch (error) {
        alert("Oh! Parece que tenemos un error: " + error)
        console.log("Oh! Parece que tenemos un error: " + error);
    }
}


// Imprimir Tarjetas
const tarjetas = document.querySelector(".main")

const imprimirTarjetas = (casas) => {
    tarjetas.innerHTML = ""
    casas.forEach(element => {
        const { id, type, status, price, image, name, area, parking, wc, rooms, ubication, owner } = element
        const divTarjetas = document.createElement("div")
        divTarjetas.setAttribute("class", "cardsproperties")
        divTarjetas.setAttribute("onclick", `catchId(${id})`)
        divTarjetas.innerHTML = `
        <a href="./indexS3-2.html">
        <div class="cardsup">
            <div class="botones">
                <div class="btns">
                    <button type="button" class="btnhouse">${type}</button>
                    <button type="button" class="btnforsale">${status}</button>
                </div>
                <button type="button" class="btnfavorite">💗</button>
            </div>
            <p class="priceproperties">${price}</p>
            <img class="imgup" src=${image}>
        </div>

        <div class="cardsdown">
            <p class="imglocation">${ubication}</p>
            <h2 class="location">${name}</h2>

            <div class="hellenmattis">
                <p>${owner}</p>
                <p>4 months ago</p>
            </div>
            <hr>
            <div class="iconsarea">
                <img src="./3 Hot Deal/Area Icon.png" alt="Area-icon" class="icon">
                <p>${area}</p>

                <img src="./3 Hot Deal/Garage Icon.png" alt="Garage-icon" class="icon">
                <p>${parking}</p>

                <img src="./3 Hot Deal/Bathroom Icon.png" alt="Bathroom-icon" class="icon">
                <p>${wc}</p>

                <img src="./3 Hot Deal/Bedroom Icon.png" alt="Bedroom-icon" class="icon">
                <p>${rooms}</p>
            </div>
        </div>
        </a>
        `
        tarjetas.appendChild(divTarjetas)
    });
}

// Llamar la función para que se ejecute todo
traerCasa()

// Función para guardar el id en el LocalStorage cuando se dé click en las tarjetas
let catchId = (id) => {
    let _id = JSON.stringify(id)
    localStorage.setItem("_id", _id)
    console.log(localStorage);
}

// Función para filtrar las casas

let selectType = document.querySelector("#selecttype")
let selectStatus = document.querySelector("#selectstatus")
let btnFind = document.querySelector("#btnfind")

btnFind.addEventListener("click", () => {
    /*  console.log("Soy el Click"); */
    let filtrados = [];
    data.forEach(element => {                 //Recorre el data y compara los elementos para filtrarlos (También se puede hacer con .filter)

        if (selectType.value != "" && selectStatus.value != "") {
            if (selectType.value == element.type && selectStatus.value == element.status) {
                filtrados.push(element)
            }

        } else if (selectType.value != "") {
            if (selectType.value == element.type) {
                filtrados.push(element)
            }

        } else if (selectStatus.value != "") {
            if (selectStatus.value == element.status) {
                filtrados.push(element)
            }
        }

    })

    if (selectType.value == "" && selectStatus.value == "") {
        imprimirTarjetas(data)
    }

    //Llamar función para mostrar los elementos filtrados

    imprimirTarjetas(filtrados)
})

