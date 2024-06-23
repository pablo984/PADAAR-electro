*ERRORES:
*Tenía el error de que no se realizaban los efectos a los botones cuando cambiaba de sección. 
Cómo los efectos a los botones eran los mismos para las distintas secciones, al leer el "ID"
de la primera sección, sólo realizaba los efectos para tales botones. 
Como los botones de las otras secciones tenian las IDs repetidas, no se le aplicaban los efectos. 
LA SOLUCIÓN: poner ID's diferentes para todos los botones. NUNCA REPETIR IDs en ninguna parte del HTML.

*Tenía el error de que al crear variables locales en una función, como por ejemplo, las de: 
"let mostrarSeccionResultado = seccionResultadoCorriente.style.display = "block";" 
"let mostrarSeccionResultado2 = seccionResultadoCorriente2.style.display = "block";"
Cuando invocaca alguna de las 2 variables para imprimirlas en el documento, resulta de que se imprimían
las 2 variables, es decir, que estaban "block" las 2. Eso era debido a que ambas variables no estaban
en ningún condicional dentro de la función, sino que simplemente estaban por encima de los condicionales, 
solas. 
LA SOLUCIÓN: no guardar "seccionResultadoCorriente.style.display = "block";" y seccionResultadoCorriente2.style.display = "block";"
en variables locales, sino que escribir de forma literal cada línea en cada una de los condicionales. 

*Tenía el error de que la imagen background del "header" se veía bien en mi archivo local con VSC y Live-server, pero cuando lo 
subí a github y creé la github-page, dicha imagen no se veía. La ruta de la imagen en el CSS estaba escrita de la siguiente manera:
header{       
    background-image: url("/img/fondo-header.png");    
}
LA SOLUCIÓN: escribir la ruta de la imagen de la siguiente manera: 
header{       
    background-image: url("/img/fondo-header.png");    
}
Esto se debe a que GitHub-Pages utiliza una Ruta Relativa (../img/fondo-header.png): Esta ruta es relativa a la ubicación del archivo CSS. 
Los .. indican "subir un nivel en el árbol de directorios". Por ejemplo, si tu archivo CSS está en css/estilos.css y tu imagen está en 
img/fondo-header.png, ../img/fondo-header.png sube un nivel desde css a la raíz del proyecto y luego entra en img.