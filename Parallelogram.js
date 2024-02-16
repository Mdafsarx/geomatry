function parallelogram(){

    const base=getValueById('ParallelogramBase');
    const hight=getValueById('ParallelogramHight');
    const area= base * hight;
    setInnerText('parallelogramDisplay',area);
    setValueInContainer(area)


}