fetch("https://www.apicountries.com/countries")
  .then(response => response.json())
  .then(data => console.log(data));