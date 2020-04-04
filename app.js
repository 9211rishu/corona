// OBJECT
const status = {
    total: {},
    state: [],
    confirmed: [],
    recovered: [],
    deaths: [],
    active: []
};

// ELEMENTS
const totalConfirmed = document.querySelector(".confirmed span");
const totalRecovered = document.querySelector(".recovered span");
const totalDeaths = document.querySelector(".deaths span");
const totalActive = document.querySelector(".active span");

api = "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise"
fetch(api)
    .then(function (response) {
        let data = response.json();
        return data;
    })
    .then(function (data) {
        status.total.confirmed = data.data.total.confirmed;
        status.total.recovered = data.data.total.recovered;
        status.total.deaths = data.data.total.deaths;
        status.total.active = data.data.total.active;
        status.lastRefreshed = data.lastRefreshed;
        status.lastOriginUpdate = data.lastOriginUpdate;

        for (i = 0; i < data.data.statewise.length; i++) {
            const apiData = data.data.statewise[i];
            status.state[i] = apiData.state;
            status.confirmed[i] = apiData.confirmed;
            status.recovered[i] = apiData.recovered;
            status.deaths[i] = apiData.deaths;
            status.active[i] = apiData.active;
        }

    })
    .then(function () {
        displayStatus();
    });

function displayStatus() {
    totalConfirmed.innerHTML = `${status.total.confirmed}`;
    totalRecovered.innerHTML = `${status.total.recovered}`;
    totalDeaths.innerHTML = `${status.total.deaths}`;
    totalActive.innerHTML = `${status.total.active}`;

    for (let i = 0; i < status.state.length; i++) {
        document.getElementById("main").innerHTML += `
        <div class="column">
            <li class="list">
                <div class="card">
                    <h1 class='name'><span>${status.state[i]}</span></h1>
                    <h3>Confirmed:&emsp;<span>${status.confirmed[i]}</span></h3>
                    <h3>Recovered:&emsp;<span>${status.recovered[i]}</span></h3>
                    <h3>Deaths:&emsp;<span>${status.deaths[i]}</span></h3>
                    <h3>Active:&emsp;<span>${status.active[i]}</span></h3>
                </div>
            </li>
        </div>
        `;
    }
}