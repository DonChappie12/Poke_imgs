$(document).ready(function(){
    var html_str= "";
    for(i=1; i<152; i++){
        html_str+="<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+[i]+".png'>"
    }
    $(".pokemons").append(html_str)
})