
function getId(id){

const element=document.getElementById(id);
return element;

};

function setBg(id,color){

getId(id).classList.add(color)

};


function removeBg(id){

    getId(id).classList.add('bg-white')

};

const getInputValue=(id)=>{
    const value=parseInt(getId(id).value);
    return value;

}

function setInnerText(id,value){

getId(id).innerText=value;

};


function setContainer(area){
    const p=document.createElement('p');
    p.innerText='area : '+area;
    getId('container').appendChild(p)
}