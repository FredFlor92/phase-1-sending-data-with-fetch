// Add your code here
// makes a POST request to /users with a name and email
function submitData(userName, userEmail){
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        })
    })
    .then(function (response){
        return response.json()
    })
    .then(function (object){
        // console.log(object);
        document.body.innerHTML = object["id"]
    })
    // handles a failed POST request using catch, appends the error message to the DOM
    .catch(function (error){
        document.body.innerHTML = error.message
    })
}
