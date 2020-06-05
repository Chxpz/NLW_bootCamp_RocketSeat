function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then((res) => { return res.json()})
        .then( states => {
            for (state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}

populateUFs ()


function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")


    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value> Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
        .then((res) => { return res.json()})
        .then( cities => {
            for (city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

            citySelect.disabled = false
        })


}


document
.querySelector("select[name=uf]")
.addEventListener("change", getCities)

//itens de coleta
//pegar todos os lis

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

function handleSelectedItem(event){
    const itemLi = event.target
    //adicionar ou remover uma class com javaScript
    itemLi.classList.toggle("selected")
    
    /**trazer a numeração dos id criados para cada item */
    //const itemId = event.target.dataset.id
    const itemId = itemLi.dataset.id
}
