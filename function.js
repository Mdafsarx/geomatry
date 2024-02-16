

const getId=(id)=>{

    const element=document.getElementById(id);
    return element;


}

function setInnerText(id,value){

const element=getId(id);
element.innerText='Ans :'+value;

}


function getValueById(id){

let value=getId(id).value;
value=parseInt(value)
return value;



}

function setValueInContainer(text){

const p=document.createElement('p');
p.innerText='Area '+text;
const element=getId('container');
element.appendChild(p)

}