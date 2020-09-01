const fetchThisCommaDog = () => {
  let formData = {
    dogName: 'Ollie',
    dogBreed: 'Boston Terrier'
  }

  let configObject = {
      // trigger catch on line 22 by commenting out the following line
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
  }

  let dogUrl = 'http://localhost:3000/dogs/'

  fetch(dogUrl, configObject)
    .then(response => response.json())
    .then(jsonResponse => console.log(jsonResponse))
    .catch(error => {
        alert("Bad Thing!!")
        console.log(error.message)
      })
}

const submitData = (name, email) => {
  let config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name,
      email
    })
  }

  let userUrl = "http://localhost:3000/users"

  return fetch(userUrl, config)
    .then(response => response.json())
    .then(jsonResponse => document.body.innerHTML = jsonResponse['id'])
    .catch(error => document.body.innerHTML = error.message)
}