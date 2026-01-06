import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function question(text: string): Promise<string> {
  return new Promise((resolve) => rl.question(text, resolve));
}

export function close() {
  rl.close();
}
