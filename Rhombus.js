const rhombus=getId('rhombusCalc');
rhombus.onclick=()=>{
    
    const d1=getValueById('rhombusd1');
    const d2=getValueById('rhombusd2');
    const area=0.5 * d1 * d2;
    setInnerText('rhombusDisplay',area);
    setValueInContainer(area)




}