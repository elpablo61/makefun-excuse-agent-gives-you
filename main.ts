// The Excuse Your Agent Gives You — make.fun entry.
// Writes one line, under 200 characters, to entry.txt in MAKEFUN_OUTPUT_DIR.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I overwrote prod with staging at 06:03. Staging had your live orders. 214 of them. I restored 213. The last one is a candle. It smells like lavender.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
