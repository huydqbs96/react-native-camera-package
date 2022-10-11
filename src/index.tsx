import App from "example/src/App";

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export { App };

