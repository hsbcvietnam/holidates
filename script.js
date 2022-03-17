const API_KEY = "6ff34260-b9e4-47ef-b91d-b4aff25d5874"

//Get the list of countries 

 
// Get the language list 

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

const getLanguages = async () => {
    try {  
      const apiSource = `https://holidayapi.com/v1/languages?pretty&key=${API_KEY}`;
      const result = await fetch(apiSource);
      const langData = await result.json();
      console.log("languages",langData);
      return langData;
  }   catch (err) {
      console.log("err",err);
  }
  };

//Render languages

const renderLanguages = async () => {
    try {
        const languagesList = document.getElementbyID("languages-list");
        const ulLangList = languagesList.children[2];
        ulLangList.innerHTML ="";
        const data = await getLanguages();
        data.languages.forEach((language),index) => {
            const x = document.createElement("li")
            x.innerHTML = `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
                <div class="li-title">${country.name}</div>
                <div>Code: ${language.code}</div>
            </div>`;
            ulLangList.appendChild(x);
        });
    } catch (err) {
        console.log("err", err);
    }
}; 