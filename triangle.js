

function triangle(){

const base=getValueById('baseInput');
const hight=getValueById('hightInput');
const area=0.5 * base * hight;
setInnerText('triangleDisplay',area);
setValueInContainer(area)

    
}