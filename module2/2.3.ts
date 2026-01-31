{
    //generic type
    type GenericArray<T> = Array<T>;

    const rollNumbers: GenericArray<number> = [1, 2, 3, 4];
    
    const mentors: GenericArray<string> = ["shuvo", "sujon"];

    const user: GenericArray<{name: string, age: number}> = [
        {
            name: "shuvo",
            age: 21
        },
        {
            name: "sujon",
            age: 22
        }
    ]

    //generic tuple
    type GenericTuple<X,Y> = [X, Y];
    const manush : GenericTuple<string, string> = ["shuvo", "sujon"];
}
