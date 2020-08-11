namespace example5 {
  interface Address {
    streetnumber: number;
    streetname: string;
    zipcode: string;
  }
  interface Person {
    name: string;
  }
  interface House {
    id: number;
    address: Address;
    people: Person[];
  }

  function displayAddress(address: Address): void {
    console.log(
      `I live at ${address.streetname} of the street name ${address.streetname}`
    );
  }

  const myHouse: House = {
    id: 1,
    address: { streetnumber: 123, streetname: "ABC", zipcode: "0A0A0A" },
    people: [{ name: "Patrick" }, { name: "Jacob" }],
  };

  type ReadOnlyType<T> = { readonly [key in keyof T]: T[key] }; // Lookup

  function transformToReadonly<T>(input: T): ReadOnlyType<T> {
    return input;
  }
  const houseReadonly = transformToReadonly(myHouse);
  houseReadonly.id = 2; // Does not compile
}
