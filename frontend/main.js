window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://aqgetresumecounter.azurewebsites.net/api/GetResumeCount?code=9yxATT3oQ-OIkdrKnyE_Ujnx4Ks3qRw2vAT5kba1K9AxAzFuUu1Q9Q%3D%3D'
const localfunctionApi = 'http://localhost:7071/api/GetResumeCount';

const getVisitCount = () =>{
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}