namespace example1 {
  interface House {
    id: number;
    address: {
      streetnumber: number;
      streetname: string;
      zipcode: string;
    };
    people: { name: string }[];
  }
  const myHouse: House = {
    id: 1,
    address: { streetnumber: 123, streetname: "ABC", zipcode: "0A0A0A" },
    people: [{ name: "Patrick" }, { name: "Jacob" }],
  };
  type MyType1 = typeof myHouse.address; // From a variable
  type MyType2 = House["address"]; // From a type
  const address: MyType1 = {
    streetnumber: 12,
    streetname: "ABC",
    zipcode: "0A0A0A",
  };
  const address2: MyType2 = address;
  console.log(address);
  console.log(address2);
}
