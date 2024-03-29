const API_KEY = "6ff34260-b9e4-47ef-b91d-b4aff25d5874"

//Get the list of countries
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

// Get the language list
document.getElementById("languages-list-btn").addEventListener("click", () =>{
    renderLanguages()
})

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

const renderLanguages = async () => {
    try {
        const languagesList = document.getElementById("languages-list")
        const ulLangList = languagesList.children[2]
        ulLangList.innerHTML =""
        const data = await getLanguages()
        data.languages.forEach((languages, index) => {
            const x = document.createElement("li")
            x.innerHTML = `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
                <div class="li-title">${languages.name}</div>
                <div>Code: ${languages.code}</div>
            </div>`;
            ulLangList.appendChild(x);
        });
    } catch (err) {
        console.log("err", err);
    }
};

// Get holiday
document.getElementById("holidays-btn").addEventListener("click", () =>{
    renderHolidays()
})

const getHolidays = async ()=>{
    try{
        const Country_Key = document.getElementById("country-query").value
        const Month = document.getElementById("month-query").value
        const Day = document.getElementById("day-query").value
        const Languages = document.getElementById("language-query").value
        const Search = document.getElementById("search-query").value
        let QueryText = ""
        if (Country_Key) {
          QueryText += `&country=${Country_Key}`
        } else {
          QueryText = "&country=VN"
        }
        if (Month) {
          QueryText += `&month=${Month}`
        }
        if (Day) {
          QueryText += `&day=${Day}`
        }
        if (Languages) {
          QueryText += `&language=${Languages}`
        }
        if (Search) {
          QueryText = `&search=${Search}`
        } else {
          changeCountry(Country_Key)
        }
        const url = `https://holidayapi.com/v1/holidays?pretty&key=${API_KEY}&year=2021${QueryText}`
        const res = await fetch(url)
        const data = await res.json()
        console.log("data", data) //have a look the retrieved data
        return data
    } catch(err) {
        console.log("err", err)
    }
}

const renderHolidays = async()=>{
    try{
        const data = await getHolidays()
        const holidayList = document.getElementById("holidays-list")
        const ulHolidayList = holidayList.children[1]
        ulHolidayList.innerHTML=""
        data.holidays.forEach((holidays, index)=>{
            const x = document.createElement("li")
            x.innerHTML = `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
                <div class="li-title">${holidays.name}</div>
                <div class="li-text">${holidays.weekday.date.name}, ${holidays.date}, ${holidays.country}</div>
            </div>`;
            ulHolidayList.appendChild(x)
        })
    } catch(err){
        console.log("err", err)
    }
}

const changeCountry = async(countryCheck)=>{
  try {
    const data = await getCountries()
    const holidayList = document.getElementById("holidays-list")
    const ulHolidayList = holidayList.children[0]
    data.countries.forEach((countries, index)=>{
      if (countries.code===countryCheck) {
        ulHolidayList.innerText = `Holidays of ${countries.name}`;
      }
    })
  } catch(err){
      console.log("err", err)
  }
}
