
const rectangle=getId('rectangleBtn');
rectangle.addEventListener('click',()=>{
    
const width=getValueById('rectangleWidth');
const length=getValueById('rectangleLength');
const area=width*length;
setInnerText('rectangleDisplay',area);
setValueInContainer(area)

})