{
  //type alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student: Student= {
    name: "Shuvo",
    age: 30,
    gender: "male",
    contactNo: "0140294",
    address: "Dhaka",
  };
  const student2: Student= {
    name: "Sujon",
    age: 40,
    gender: "male",
    address: "Chittagong",
  };

  //Type Alias for function

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;

}
