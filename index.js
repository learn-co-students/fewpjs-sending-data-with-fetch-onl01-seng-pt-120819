// Add your code here
function submitData() {
    let formData = {
        name: "Steve",
        email: "steve@steve.com"
    };

    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };

    return fetch("http://localhost:3000/users", configObj) 
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            console.log(object);
            document.body.innerHTML = object["id"]
        })
        .catch(function(error) {
            document.body.innerHTML = error.message
        });
 
}

// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
   
//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
   
//   fetch("http://localhost:3000/dogs", configObj);