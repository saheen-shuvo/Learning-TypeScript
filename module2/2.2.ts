{
  //Extending using type
  type UserWithRole1 = User1 & { role: string };

  //Extending using extends and interface
  interface UserWithRole2 extends User1 {
    role: string;
  }
}
