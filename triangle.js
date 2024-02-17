
const triangle=()=>{

    const Base=getInputValue('baseInput');
    const hight=getInputValue('hightInput');

    const area= 0.5 * Base * hight;
    if(isNaN(Base)||isNaN(hight)){
        return alert('please enter a valid number');
    }

    setInnerText('triangleDisplay',area);
    setContainer(area)


}



// Rectangle

getId('rectangleBtn').addEventListener('click',()=>{

const width=getInputValue('rectangleWidth');
const length=getInputValue('rectangleLength');
const area=width*length;
if(isNaN(length)||isNaN(width)){
    return alert('please enter a valid number');
}
setInnerText('rectangleDisplay',area);
setContainer(area)


});


// Parallelogram

function parallelogram(){

    const b=getInputValue('ParallelogramBase');
    const h=getInputValue('ParallelogramHight');
    if(isNaN(b)||isNaN(h)){
        return alert('please enter a valid number');
    }
    const area=b*h;
    setInnerText('parallelogramDisplay',area);
    setContainer(area)
}

// rhombus
getId('rhombusCalc').onclick=()=>{

const d1=getInputValue('rhombusd1');
const d2=getInputValue('rhombusd2');
if(isNaN(d1)||isNaN(d2)){
    return alert('please enter a valid number');
};

const area=0.5 * d1 * d2;
setContainer(area);
setInnerText('rhombusDisplay',area)

}

// Pentagon

getId('pentagonCalc').addEventListener('click',()=>{

const p=getInputValue('pentagonP');
const b=getInputValue('pentagonb');
const area=0.5 * p * b;
if(isNaN(p)||isNaN(b)){
    return alert('please enter a valid number');
}
setInnerText('pentagonDisplay',area);
setContainer(area)

});


// Ellipse

function ellipse(){

const a=getInputValue('ellipsea');
const b=getInputValue('ellipseb');
if(isNaN(a)||isNaN(b)){
    return alert('please enter a valid number');
}
const area=Math.PI * a * b;
setInnerText('ellipseDisplay',area.toFixed(2));
setContainer(area.toFixed(2))


}