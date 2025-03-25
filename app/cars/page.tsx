import React from 'react';
import Card from '../components/ui/cars/Card';
import { Car } from '@/lib/types/types';

type Props = {};


const cars: Car[] = [
    {
        name: "Supercar",
        type: "BMW M4",
        color: "pink",
        motor: {
            SerialNumber: 4444,
            hp: 400,
        },
    },
    {
        name: "Roadster",
        type: "Audi R8",
        color: "red",
        motor: {
            SerialNumber: 1234,
            hp: 610,
        },
    },
    {
        name: "Thunder",
        type: "Ford Mustang",
        color: "blue",
        motor: {
            SerialNumber: 5678,
            hp: 450,
        },
    },
    {
        name: "Beast",
        type: "Chevrolet Camaro",
        color: "black",
        motor: {
            SerialNumber: 9101,
            hp: 455,
        },
    },
    {
        name: "Falcon",
        type: "Mercedes-AMG GT",
        color: "silver",
        motor: {
            SerialNumber: 1122,
            hp: 523,
        },
    },
];



export default function page({ }: Props) {
    return (
        <div>
            <h1>Cars</h1>
            {cars.map((car: Car) => <Card car={car} />)}
        </div>
    );
}