function ellipse(){

const a=getValueById('ellipsea');
const b=getValueById('ellipseb');
const Pi=Math.PI;
let area=Pi*a*b;
area=area.toFixed(2)
setInnerText('ellipseDisplay',area);
setValueInContainer(area);

}