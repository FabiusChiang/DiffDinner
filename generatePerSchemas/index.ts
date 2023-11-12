import { Cuisine } from './types/cuisine';

function func1(a: number, b: number): number {
    return a + b;
}

function func2(a: number, b: number): Cuisine {
    return {
        id: "unknown",
        name: "random dish"
    }
}

// export * from './output/*';
export { Cuisine };
export { func1 };
export { func2 };
