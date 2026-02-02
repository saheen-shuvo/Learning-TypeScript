{
    //utility types
    //Pick
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type NameAge = Pick<Person, "name" | "age">;

    // Omit
    type ContactDetails = Omit<Person, "email" | "age">;

    // Required
    type MandatoryPerson = Required<Person>;

    // Partial
    type PartialPerson = Partial<Person>;

    // Readonly
    type PersonReadonly = Readonly<Person>;

    const person1: PersonReadonly = {
        name: "Shuvo",
        age: 25,
        contactNo: "1234567890"
    };

    // person1.age = 26; // Error: Cannot assign to 'age' because it is a read-only property.


    // Record
    // type MyObj = {
    //     a: string;
    //     b: string;
    // }

    type MyObj = Record<string, string>;

    const obj1: MyObj = {
        a: "hello",
        b: "world",
        c: "!"
    }

}