const butInsert = document.getElementById("insertMessage");
const butInsertByGet = document.getElementById("insertMessageByGet");
const txtToSend = document.getElementById("messageToSend");
const txtDisplay = document.getElementById("messagesDisplay");

/////////////////////////////////////////////////////////////////////
// Function to Insert Row using POST
/////////////////////////////////////////////////////////////////////
butInsert.onclick = function()
{
    axios.post('http://localhost:5000/messages', { message : txtToSend.value })
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
    axios.get('http://localhost:5000/messages', { params: {message : txtToSend.value} })
    .then((response) => {
        console.log(response.data); //View in Browser's Developer Tools
        txtDisplay.textContent = "RECIEVE GET: "+response.data.message;
    })
    .catch(function (error) {
        console.log(error);
    });
}

