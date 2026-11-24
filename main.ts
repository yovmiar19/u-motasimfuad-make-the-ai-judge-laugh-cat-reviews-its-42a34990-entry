// Cat Reviews Its Human — one-line one-star review entry.
// The program writes a single funny line, in a house cat's voice,
// to /output/entry.txt for the make.fun judge.
import { mkdirSync, writeFileSync } from "node:fs";

const opener =
  "Scoops my poop into a little bag every morning and stares at me like we’re hiding a body together.";
const rating = "One star.";
const review = `${opener} ${rating}`;

if (review.length < 1 || review.length > 200) {
  throw new Error(`Review must be 1-200 characters, got ${review.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
console.log(`Wrote ${review.length} characters to /output/entry.txt`);
