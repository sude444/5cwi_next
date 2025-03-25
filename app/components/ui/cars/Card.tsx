import React from 'react';

type Props = { name?: String };

export default function Card({ name }: Props) {
    return <div>Card:{name}</div>;
}