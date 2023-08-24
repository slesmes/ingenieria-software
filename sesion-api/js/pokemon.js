const mensajePrueba = ()=>{
    console.log("hola desde pokemon.js")
    /* mostrar mensaje en la web */
    /* window.alert("Hola desde Pokemon.js") para comentar es shif+alt+a*/
    /* window.confirm("hola desde Pokemon.js") */
    /* window.prompt("hola desde Pokemon.js") promp es para escribir */
}
/* response.json() se utiliza para determinar el formate en el que queremos ver la rerspuesta de la api que en este caso es un JSON {clave:valor} */
const consultaApi=async () =>{
    const url = "https://pokeapi.co/api/v2/pokemon/1/"
    fetch(url)
    .then((Response)=>Response.json())
    .then((data)=> {
        const ver_nombre = (document.getElementById("api-response").innerHTML =
        JSON.stringify(data.abilities[0].ability.name));
        const ver_oculto = (document.getElementById("api-response2").innerHTML =
        JSON.stringify(data.abilities[0].is_hidden));
        const ver_forms = (document.getElementById("api-response3").innerHTML =
        JSON.stringify(data.forms[0].name));
        const img_url= data.sprites.front_default
        const img = (document.getElementById("image-pokemon")).src = img_url
        console.log(data)
    })
    .catch((error) => console.log(error))
}