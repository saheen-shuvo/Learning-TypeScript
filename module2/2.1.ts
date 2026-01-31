{
    //type assertion
    let anything : any;
    anything = "Next Level";
    anything = 222;
    // (anything as number)...we know what will be the type

    type CustomError = {
        message: string
    }

    try{

    } catch(error){
        console.log((error as CustomError).message);
    }
}