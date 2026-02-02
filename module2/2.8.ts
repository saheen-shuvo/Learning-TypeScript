{
    //promise

    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    };

    const getToDo = async() : Promise<Todo> => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        return data;
    }

    const createPromise = () : Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = "something";
            if(data){
                resolve(data);
            }
            else{
                reject("no data found");
            }
        })
    }

    //callng createPromise function
    const showData = async(): Promise<string> => {
        const data: string = await createPromise();
        // console.log(data);
        return data;
    }

    // showData();
}