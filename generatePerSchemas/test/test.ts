import { Cuisine, func1 } from "../dist/esm/types/index.js";

const c1: Cuisine = {
    id: "uuid123",
    name: "cool dish"
};

console.log(c1);

const n2: number = func1(1, 2);
console.log(n2);