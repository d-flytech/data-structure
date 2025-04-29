export type Gender = "male" | "female" | "x";

export interface Person {
    name: string;
    age: number;
    bsn: number;
    gender: Gender;
}