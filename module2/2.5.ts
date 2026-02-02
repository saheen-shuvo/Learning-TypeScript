{
  //
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArrayWithGeneric<string>("shuvo");
  const resGeneric = createArrayWithGeneric("sujon"); //type inference

  type User = { id: number; name: string };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 1,
    name: "shuvo",
  });
  //
}
