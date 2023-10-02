//const carregarDiv = cs => {
//    const div = document.getElementById("cervejasDiv")
//    const itensHtml = cs.map( ({name,alcohol}) => `<div>${name} -- ${alcohol}</div>` ) 
//    div.innerHTML = `${itensHtml.join("\n")}`
//}

const carregar = (cs, divId="cervejasDiv", cabecalho = ['Nome','Álcool','Estilo','Amargor'], props=['name','alcohol','style','ibu']) => {

    const div = document.getElementById(divId)

    //const itensHtml = cs.map( ({props}) => `<div>${name} -- ${alcohol} -- ${style} -- ${ibu}</div>` ) 
    const itensHtml = cs.map(item => `<tr>`+props.map(prop => `<td>${item[prop]}</td>`).join('')+`</tr>`)

    const tabelaH = `<table id="customers"><tr>`+cabecalho.map(item => `<th>${item}</th>`).join('')+`</tr>`
    const tabelaF = `</table>`

    div.innerHTML = tabelaH + `${itensHtml.join("\n")}` + tabelaF

    //div.innerHTML = `${itensHtml.join("\n")}`

}


function carregarCoisas(divId="cervejasDiv", url="https://random-data-api.com/api/v2/beers?size=3", cabecalho = ['Nome','Álcool','Estilo','Amargor'], props=['name','alcohol','style','ibu']){
    fetch(url).then(
       res => res.json()
    ).then( 
       json => carregar(json, divId=divId, cabecalho=cabecalho, props=props) 
    ).catch(
       err => document.getElementById(divId).innerHTML = `Fudeu... ${err}`
    )
    document.getElementById(divId).innerHTML = `Fazendo requisição`          
 }