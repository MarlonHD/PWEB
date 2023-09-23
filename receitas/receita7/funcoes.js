const carregar = (cs, divId="cervejasDiv", cabecalho = ['Nome','Álcool','Estilo','Amargor'], props=['name','alcohol','style','ibu']) => {

    const div = document.getElementById(divId)

    //const itensHtml = cs.map( ({props}) => `<div>${name} -- ${alcohol} -- ${style} -- ${ibu}</div>` ) 
    const itensHtml = cs.map(item => `<tr>`+props.map(prop => `<td>${item[prop]}</td>`).join('')+`</tr>`)

    const tabelaH = `<table id="customers"><tr>`+cabecalho.map(item => `<th>${item}</th>`).join('')+`</tr>`
    const tabelaF = `</table>`

    div.innerHTML = tabelaH + `${itensHtml.join("\n")}` + tabelaF

    //div.innerHTML = `${itensHtml.join("\n")}`

}

 

 async function carregarCoisas(divId="cervejasDiv", url="https://random-data-api.com/api/v2/beers?size=3", cabecalho = ['Nome','Álcool','Estilo','Amargor'], props=['name','alcohol','style','ibu']){

    try{

       let res = await fetch(url)

       coisas = await res.json()

       carregar(coisas, divId=divId, cabecalho=cabecalho,props=props)

    }catch(err){

       document.getElementById(divId).innerHTML = "Fudeu..."

    }
}