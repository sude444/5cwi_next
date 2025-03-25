export interface Motor {
    SerialNumber: number;
    hp: number;
}

export interface Car {
    name: string;
    type: string;
    color: string;
    motor: Motor;
}

