const key = '2b070ac33f1f5e0bc6e2f4a2dc51b0e9';

// const baseURL = 'http://api.lopenweathermap.org/data/2.5/weather?q=Lagos&appid=cbe3dd267a18f6c89943b3eff94f1ed7';

// fetch(baseURL)
//     .then((data) => { console.log('response', data.json()) })
//     .catch((error) => {
//         console.log(error);
//     });

const requestCity = async (city) => {
    Const baseURL = http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city},uk&APPID=2b070ac33f1f5e0bc6e2f4a2dc51b0e9`;

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);

    //promise data
    const data = await response.json();
    return data;

}
