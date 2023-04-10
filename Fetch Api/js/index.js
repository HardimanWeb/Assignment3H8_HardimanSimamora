const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b1570f4cd0msh30a5a7b935af987p1403fcjsn84c57e533e4e',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
};


const dataHistory=()=>{
   let inputCountry = document.getElementById('InputCountry').value;
   let activeCases = document.getElementById('activeCases');
   let newCases = document.getElementById('newCases');
   let recoveredCases = document.getElementById('recoveredCases');
   let totalCases = document.getElementById('totalCases');
   let totalDeaths = document.getElementById('totalDeaths');
   let totalTests = document.getElementById('totalTests');

    fetch('https://covid-193.p.rapidapi.com/statistics', options)   // mendapatkan data dari endpoint
    .then(response => response.json())              // mengubah data dalam format json
    .then(response =>{
     let data = response.response;                     //hasil data yg didapatkan
     const DataFilter= data.filter((datas) => datas.country.toLowerCase() === inputCountry.toLowerCase()); // memfilter data berdasarkan countrynta
     console.log(DataFilter);
     
     let GetData = DataFilter[0];
     let Active = GetData.cases.active; 
     let NewCases = GetData.cases.new; 
     let Recovered = GetData.cases.recovered;
     let TotalCases = GetData.cases.total; 
     let TotalDeaths = GetData.deaths.total; 
     let TotalTests = GetData.tests.total;  
     
     activeCases.innerText = Active;
     newCases.innerText = NewCases;
     recoveredCases.innerText = Recovered;
     totalCases.innerText = TotalCases;
     totalDeaths.innerText = TotalDeaths;
     totalTests.innerText = TotalTests;

    })

    .catch(err => console.error(err));

}