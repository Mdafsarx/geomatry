
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

