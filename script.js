
function ModoOscuro(){
    let fondo = document.getElementById("fondo");
    if(fondo.style.backgroundColor == "bisque"){
        fondo.style.backgroundColor ="grey";
    }else{
        fondo.style.backgroundColor ="bisque";
    }
}

function OcultarElemento(){

    let noticia = document.getElementById("noticia");
    if(noticia.style.display == "block"){
        noticia.style.display = "none";
    }else{
        noticia.style.display ="block";
    }
}