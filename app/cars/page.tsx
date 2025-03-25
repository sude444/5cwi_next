import React from 'react';
import Card from '../components/ui/cars/Card';
import { Car } from '@/lib/types/types';

type Props = {};


const car: Car = {
    "name": "Supercar",
    "type": "BMW M4",
    "color": "pink",
    "motor": {
        SerialNumber: 4444,
        hp: 400,
    },
}

export default function page({ }: Props) {
    return (
        <div>
            <h1>Cars</h1>
            <Card car={car} />

        </div>
    );
}