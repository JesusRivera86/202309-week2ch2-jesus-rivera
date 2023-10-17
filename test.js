import { strictEquals } from "./index.js";
console.log(strictEquals(1, 1));
console.log(strictEqual(NaN, NaN));
console.log(strictEqual(0, -0));
console.log(strictEqual(-0, 0));
console.log(strictEqual(1, "1"));
console.log(strictEqual(true, false));
console.log(strictEqual(false, false));
console.log(strictEqual("water", "oil"));
