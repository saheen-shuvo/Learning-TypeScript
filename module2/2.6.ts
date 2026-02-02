{

    //generic constraints with keyof operator
    type Vehicle = {
        bike: string;
        car: string;
        boat: string;
    }

    type Owner = "bike" | "car" | "truck"; //manually creating union type

    type Owner2 = keyof Vehicle; //using keyof to create union type










}