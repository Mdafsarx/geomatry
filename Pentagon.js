const pentagon=getId('pentagonCalc');
pentagon.addEventListener('click',()=>{

const p=getValueById('pentagonP');
const b=getValueById('pentagonb');
const area=0.5 * p * b;
setInnerText('pentagonDisplay',area);
setValueInContainer(area)

})