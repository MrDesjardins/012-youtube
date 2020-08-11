namespace example4 {
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

  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  const address: Address = getProperty(myHouse, "address");
  console.log(address);
}
