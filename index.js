// Add your code here



/*const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      dogName: "Byron",
      dogBreed: "Poodle",
    }),
  };
  
  fetch("http://localhost:3000/dogs", configurationObject);
*/
// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify({
//         name: joe,
//         email: joemail.com
//     }),
//};
function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`
        }),
    })
    .then(function (response) {
        return response.json();
      })
    .then(function (object) {
        document.body.innerHTML=object["id"];
      })
    .catch(function (error) {
        document.body.innerHTML = error.message
  }) 
}