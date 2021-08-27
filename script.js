const loadWeather = async () => {
    const searchField = document.getElementById('search-field')
    const searchFieldText = searchField.value
    searchField.value = ''
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchFieldText}&units=metric&APPID=02359e7d1bc37145e30d006a1bd99da0`
    const res = await fetch(url)
    const data = await res.json()
    showWeather(data)
}


const showWeather = data => {
    const containerDiv = document.getElementById('weather')
    containerDiv.textContent = ""
    const div = document.createElement('div')
    div.innerHTML = `
    <img class="mx-auto d-block" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
    <h1 class="text-center text-white">${data.name}</h1>
    <h2 class="text-center text-white">${data.main.temp}&#8451</h2>
    <h5 class="text-center text-white">${data.weather[0].main}</h5>
    `
    containerDiv.appendChild(div)
}