//Reference Type --> object

let user: {
  company: "TechnoCrat"; // literal type
  firstName: string;
  middleName?: string; // optional property
  lastName: string;
  readonly isMarried?: boolean; // optional property //used access modifier
} = {
  company: "TechnoCrat",  //we cant change literal type
  firstName: "Saheen",
  middleName: "Alam",
  lastName: "Shuvo",
  isMarried: false,
};

