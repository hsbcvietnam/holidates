const API_KEY = "d22b046e-1d67-45f9-b518-bff0b0f2cb7d"

const renderCountries = async()=>{
    try{
        const data = await getCountries()
        const countriesList = document.getElementById("countries-list")
        const ulCountriesList = countriesList.children[2]
        ulCountriesList.innerHTML=""
        data.countries.forEach((country, index)=>{
            const x = document.createElement("li")
            x.innerHTML = `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
                <div class="li-title">${country.name}</div>
                <div>Code: ${country.code}</div>
            </div>`;
            ulCountriesList.appendChild(x)
        })
    } catch(err){
        console.log("err", err)
    }
}

document.getElementById("countries-list-btn").addEventListener("click", () =>{
    renderCountries()
})

const getCountries = async ()=>{
    try{
        const url = `https://holidayapi.com/v1/countries?pretty&key=${API_KEY}`
        //here is how we add a dynamic value (API KEY) to the url
        const res = await fetch(url)
        const data = await res.json()
        console.log("data", data) //have a look the retrieved data
        return data
    } catch(err) {
        console.log("err", err)
    }
}
