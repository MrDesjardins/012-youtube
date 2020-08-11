namespace example6 {
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

  type scalarFieldZipCode = Address["zipcode"];
  type objectFieldAddress = House["address"];
  type arrayPeople = House["people"];
  type arrayTypePerson = House["people"][0];
}
