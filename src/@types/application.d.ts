namespace Application {
  export interface Location {
    lat: number;
    lng: number;
  }

  export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: Location;
  }

  export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    address: Address;
  }
}
