const api = fetch(`https://restcountries.eu/rest/v2/all/`)

api
    .then( resp => resp.json())
    .then( (data) => {
       console.log( data )
    })
    .catch( console.warn );


const form = document.querySelector('#search');
const button = document.querySelector('#searchIcon');

const filter = ()=>{
    console.log(form.value);
        
    document.getElementById('search').value ='';
}

searchIcon.addEventListener('click',filter)

