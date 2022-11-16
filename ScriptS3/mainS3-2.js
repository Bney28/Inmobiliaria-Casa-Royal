//Mock API
const API_URL = "http://localhost:3000/catalogo"

let data;
// Async / Await Función que trae la info de la API
const traerCasa = async () => {
    try {
        let response = await fetch(API_URL)
        data = await response.json()
        cardHotDeal()

    } catch (error) {
        alert("Oh! Parece que tenemos un error: " + error)
        console.log("Oh! Parece que tenemos un error: " + error);
    }
}

traerCasa()

//Función que imprime la Tarjeta del Hot Deal

const cardHotDeal = () => {

    let traerId = JSON.parse(localStorage.getItem("_id"))
    let infoFiltrada = data.filter((element) => {
        return element.id == traerId
    })

    let divHotDeal = document.querySelector(".hotdealcard")

     divHotDeal.innerHTML = `
    <div class="imghotdeal">
                <img src= ${infoFiltrada[0].image}>
                <p class="photosbtn">Photos (4)</p>
            </div>

            <div class="infohotdeal">
                <p class="ubication">Residencial Zone</p>
                <h2 class="address">${infoFiltrada[0].name}</h2>
                <p class="ubication">${infoFiltrada[0].ubication}</p>
                <button type="button" class="btnprice"> Desde ${infoFiltrada[0].price}</button>
                <p class="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quos ab ut animi sed alias ad modi inventore sunt quidem, hic illum suscipit at earum id accusamus temporibus odit ea!</p>
                <div class="iconsareahotdeal">
                    <img src="./3 Hot Deal/Area Icon.png" alt="Area-icon" class="icon">
                    <p>${infoFiltrada[0].area}</p>

                    <img src="./3 Hot Deal/Garage Icon.png" alt="Garage-icon" class="icon">
                    <p>${infoFiltrada[0].parking}</p>

                    <img src="./3 Hot Deal/Bathroom Icon.png" alt="Bathroom-icon" class="icon">
                    <p>${infoFiltrada[0].wc}</p>

                    <img src="./3 Hot Deal/Bedroom Icon.png" alt="Bedroom-icon" class="icon">
                    <p>${infoFiltrada[0].rooms}</p>
                </div>

            </div>
            `

}