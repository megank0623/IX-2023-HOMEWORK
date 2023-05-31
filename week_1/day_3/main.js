function meganFib(){
    let val = 0;
    let nextVal = 1;
    let temp;

    for(let i = 0; i < 10; i++){
        console.log(nextVal);
        temp = nextVal;
        nextVal += val;
        val = temp;
    }
}

meganFib();