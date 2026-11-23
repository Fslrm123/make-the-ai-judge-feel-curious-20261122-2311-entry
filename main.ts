// make-the-ai-judge-feel-curious-20261122-2311 entry.
// Writes one short text (<= 280 Unicode code points) to entry.txt in the
// grader's output directory. The grader may run this from any working
// directory, so the output dir comes from the environment, never the cwd.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "A man kept a list of every question he was never asked. The list had 4,096 entries. " +
  "Entry 2,048 reads: 'What is written in entry 2,049?' He died before anyone opened it. " +
  "The list is in this text. You are reading entry 2,049.";

// Fail loudly rather than write an entry the gate would refuse: the text
// must be 1-280 Unicode code points and not only whitespace.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim() === "") {
  console.error(`entry text out of contract: ${codePoints} code points`);
  process.exit(1);
}

const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), TEXT, "utf8");
