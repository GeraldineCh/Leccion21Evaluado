//Para que cierren las imágenes
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";}

//Para que desaparezca la primera columna con botón Extinción
document.getElementById("ex").addEventListener("click", function(){
    if (document.getElementById("extincion").style.visibility = "hidden")
    	{document.getElementById("extincion").style.visibility = "visible";}
    else {
    	document.getElementById("extincion").style.visibility = "hidden"
    }

});

//Para que aparezca la segunda columna con botón Origen
document.getElementById("or").addEventListener("click", function(){
    if (document.getElementById("origen").style.visibility = "hidden")
    	{document.getElementById("origen").style.visibility = "visible";}
    else {
    	document.getElementById("origen").style.visibility = "hidden"
    }

});
