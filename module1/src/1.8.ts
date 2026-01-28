// Destructuring
const user = {
    id: 241,
    name: {
        firstName: "Saheen",
        middleName: "Alam",
        lastName: "Shuvo",
    },
    contactNo: "01751967704",
    address: "Bangladesh"
};

const {
    contactNo,
    name: {middleName: midName} //here we cant declare type, that was name alias
} = user;

//array destructuring
const myFriends = ['shuvo', 'sujon', 'alif', 'halim', 'rafu'];
const [, , bff, ...rest] = myFriends;