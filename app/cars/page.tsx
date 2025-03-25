import React from 'react';
import Card from '../components/ui/cars/Card';

type Props = {};

export default function page({ }: Props) {
    return (
        <div>
            <h1>Cars</h1>
            <Card name={"Sude"} />
            <Card />
            <Card />
            <Card />
        </div>
    );
}