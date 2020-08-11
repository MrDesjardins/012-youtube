namespace example2 {
  interface House {
    id: number;
    address: {
      streetnumber: number;
      streetname: string;
      zipcode: string;
    };
    people: { name: string }[];
  }
  function displayAddress(address: House["address"]): void {
    console.log(
      `I live at ${address.streetname} of the street name ${address.streetname}`
    );
  }

  const myHouse: House = {
    id: 1,
    address: { streetnumber: 123, streetname: "ABC", zipcode: "0A0A0A" },
    people: [{ name: "Patrick" }, { name: "Jacob" }],
  };
  displayAddress(myHouse.address);
}
