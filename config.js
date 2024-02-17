
// coloring

getId('TriangleContainer').addEventListener('click',()=>{

    setBg('TriangleContainer','bg-yellow-100');

    getId('TriangleContainer').ondblclick=()=>{
        removeBg('TriangleContainer');
    }

});


getId('rectangleContainer').onclick=()=>{
    setBg('rectangleContainer','bg-cyan-400');

getId('rectangleContainer').addEventListener('dblclick',()=>{
    removeBg('rectangleContainer')
})

};


getId('ParallelogramContainer').onclick=function (){

setBg('ParallelogramContainer','bg-lime-200');

getId('ParallelogramContainer').addEventListener('dblclick',()=>{
    removeBg('ParallelogramContainer')
});



};


getId('RhombusContainer').addEventListener('click',()=>{

setBg('RhombusContainer','bg-lime-700')

getId('RhombusContainer').addEventListener('dblclick',()=>{

    removeBg('RhombusContainer')
})

})


function Parallelogram2Container(){

setBg('Parallelogram2Container','bg-rose-400');

getId('Parallelogram2Container').addEventListener('dblclick',()=>{

removeBg('Parallelogram2Container')

})

};


getId('ellipseContainer').addEventListener('click',()=>{
    setBg('ellipseContainer','bg-zinc-400');

    getId('ellipseContainer').ondblclick=()=>{
        removeBg('ellipseContainer')
    }
})