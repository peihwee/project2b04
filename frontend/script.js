function isLocalhost(url) 
{
    return url.includes('localhost') || url.includes('127.0.0.1');
}

API_URL = (isLocalhost(window.location.hostname) != true ? 'https://'+window.location.hostname : 'http://localhost:5000');
const txtHost = document.getElementById("hostname");
txtHost.innerHTML = window.location.hostname;
console.log("window.location.hostname",window.location.hostname);

const butInsert = document.getElementById("insertMessage");
const butInsertByGet = document.getElementById("insertMessageByGet");
const txtToSend = document.getElementById("messageToSend");
const txtDisplay = document.getElementById("messagesDisplay");

/////////////////////////////////////////////////////////////////////
// Function to Insert Row using POST
/////////////////////////////////////////////////////////////////////
butInsert.onclick = function()
{
    axios.post(API_URL+'/messages', { message : txtToSend.value })
    .then((response) => {
        console.log(response.data); //View in Browser's Developer Tools
        txtDisplay.textContent = response.data.message;
    })
    .catch(function (error) {
        console.log(error);
    });
}

butInsertByGet.onclick = function()
{
    axios.get(API_URL+'/messages', { params: {message : txtToSend.value} })
    .then((response) => {
        console.log(response.data); //View in Browser's Developer Tools
        txtDisplay.textContent = "RECIEVE GET: "+response.data.message;
    })
    .catch(function (error) {
        console.log(error);
    });
}

