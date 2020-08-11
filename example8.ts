namespace example7 {
  interface Address {
    streetnumber: number;
    streetname: string;
    zipcode: string;
  }

  type SimpleAddress = Address["streetnumber" | "streetname"];
  type Adress2 = { [key in keyof Address]: Address[key] };
}
