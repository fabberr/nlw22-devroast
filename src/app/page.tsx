import Link from "next/link";
import { Leaderboard, LeaderboardRow } from "@/components/leaderboard";
import { Button, CodeBlock, Toggle } from "@/components/primitives";

const sampleCode = `function calculateTotal(items, taxRate) {
  let subtotal = 0;
  for (let i = 0; i < items.length; i++) {
    subtotal += items[i].price * items[i].quantity;
  }
  return subtotal;
  // TODO: handle tax calculation
  // TODO: handle currency conversion
}`;

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-5 pb-16">
      {/* Title */}
      <header className="flex flex-col items-center gap-3 pt-10 text-center">
        <h1 className="flex items-center gap-3 font-bold font-mono text-[36px] text-text-primary leading-tight">
          <span className="text-accent-mauve">$</span>
          paste your code. get roasted.
        </h1>
        <p className="font-mono text-sm text-text-secondary">
          {"//"} drop your code below and we&apos;ll rate it — brutally honest
          or full roast mode
        </p>
      </header>

      {/* Inner content */}
      <div className="mt-15 flex flex-col gap-15">
        {/* Code Input Section */}
        <section className="mx-auto w-full max-w-195">
          <CodeBlock code={sampleCode} language="javascript" />

          {/* Actions Bar */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Toggle label="roast mode" />
              <span className="font-mono text-text-tertiary text-xs">
                {"//"} maximum sarcasm enabled
              </span>
            </div>
            <Button size="lg">
              <span className="text-text-on-accent">$</span> roast_my_code
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-8 flex items-center justify-center gap-6 font-mono text-text-tertiary text-xs">
            <span>2,847 snippets roasted</span>
            <span>·</span>
            <span>avg score: 4.2/10</span>
          </div>
        </section>

        {/* Leaderboard Preview */}
        <section className="mx-auto flex w-full max-w-240 flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold font-mono text-accent-mauve text-sm">
                {"//"}
              </span>
              <span className="font-bold font-mono text-sm text-text-primary">
                shame_leaderboard
              </span>
            </div>
            <Link
              href="/leaderboard"
              className="flex items-center gap-1 border border-border-primary px-3 py-1.5 font-mono text-text-secondary text-xs hover:bg-bg-input hover:text-text-primary"
            >
              $ view_all <span>&gt;&gt;</span>
            </Link>
          </div>
          <p className="font-mono text-text-tertiary text-xs">
            {"//"} the worst code on the internet, ranked by shame
          </p>

          <Leaderboard variant="compact" totalCount={2847}>
            <LeaderboardRow
              rank="#1"
              score="1.2"
              code="const foo = bar ?? baz;"
              language="javascript"
              scoreClassName="text-accent-red"
            />
            <LeaderboardRow
              rank="#2"
              score="2.8"
              code="if (x = 1) { return true }"
              language="javascript"
              scoreClassName="text-accent-peach"
            />
            <LeaderboardRow
              rank="#3"
              score="3.1"
              code="eval(userInput)"
              language="javascript"
              scoreClassName="text-accent-peach"
            />
          </Leaderboard>
        </section>
      </div>
    </main>
  );
}
