{
    //Union types
    // type FrontendDeveloper = 'Fakibaz' | 'junior';  //Union..we use | instead of ||

    // const newDeveloper : FrontendDeveloper = 'Fami tw ekta akibaz';

    //Intersection Type
    type FrontendDeveloper = {
        skills: string[];
        designation1: "Frontend Developer"
    };

    type BackendDeveloper = {
        skills: string[];
        designation2: "Backend Developer"
    };

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper; //Intersection..we use & instead of &&

}