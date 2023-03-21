import { Injectable } from '@angular/core';

export interface Parcel {
  name: string
  email: string
  destination: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor() { }
  parcels: Parcel[] = [
    {
      name: "Jesse Mucheke",
      email: "mucheke@gmail.com",
      destination: "Lodwar",
      description: 'Lorem ipsum d unde magni eveniet illum esse, quasi perferendis eum.'
    },
    {
      name: "Jesse Mucheke",
      email: "mucheke@gmail.com",
      destination: "Lodwar",
      description: 'Lorem ipsum d unde magni eveniet illum esse, quasi perferendis eum.'
    },
    {
      name: "Jesse Mucheke",
      email: "mucheke@gmail.com",
      destination: "Lodwar",
      description: 'Lorem ipsum d unde magni eveniet illum esse, quasi perferendis eum.'
    },
    {
      name: "Jesse Mucheke",
      email: "mucheke@gmail.com",
      destination: "Lodwar",
      description: 'Lorem ipsum d unde magni eveniet illum esse, quasi perferendis eum.'
    },
    {
      name: "Jesse Mucheke",
      email: "mucheke@gmail.com",
      destination: "Lodwar",
      description: 'Lorem ipsum d unde magni eveniet illum esse, quasi perferendis eum.'
    },
    {
      name: "Jesse Maina",
      email: "mucheke@gmail.com",
      destination: "Mombasa",
      description: 'Lorem ipsum d unde magni eveniet illum esse, quasi perferendis eum.'
    }
  ]
}
