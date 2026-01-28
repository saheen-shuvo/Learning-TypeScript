{
    //nullable type - which is null name: null

    //unknown type -> makes decision depends on type during run time using typeof
    const getSpeenInMeter = (value: unknown) => {
        if(typeof value === 'number'){
            const convertedSpeed = (value*1000);
        }
        else if(typeof value === 'string'){
            const convertedSpeed = parseInt(value) * 1000;
        }
        else{
            console.log("Wrong Input");
        }
    }

    //never
    //we will use this type when we are damn sure that it will never return anything 

}