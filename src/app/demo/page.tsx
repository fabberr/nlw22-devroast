// =============================================================================
// IMPORTS
// =============================================================================

import {
  DiffBlock,
  DiffBlockHeader,
  DiffBlockLine,
} from "@/components/diff-block";
import {
  IssueCard,
  IssueCardBadge,
  IssueCardDescription,
  IssueCardTitle,
} from "@/components/issue-card";
import { Leaderboard, LeaderboardRow } from "@/components/leaderboard";
import { Navbar, NavbarBrand, NavbarLink } from "@/components/navbar";
import { Badge, Button, CodeBlock, Toggle } from "@/components/primitives";
import {
  ResultSummary,
  ResultSummaryBadge,
  ResultSummaryMeta,
  ResultSummaryQuote,
  ResultSummaryScore,
} from "@/components/result-summary";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-bg-page px-8 py-10 text-text-primary">
      <div className="space-y-10">
        {/* Header */}
        <header className="space-y-2">
          <h1 className="font-sans text-2xl text-text-primary">UI Demo</h1>
          <p className="font-mono text-[13px] text-text-secondary">
            {"//"} component_library
          </p>
        </header>

        {/* Primitives */}
        <section className="space-y-8">
          <header>
            <h2 className="font-sans text-lg text-text-primary">Primitives</h2>
            <p className="font-mono text-[13px] text-text-secondary">
              {"//"} src/components/primitives/
            </p>
          </header>

          {/* Button */}
          <section className="space-y-4">
            <header>
              <h3 className="font-sans text-text-primary">Button</h3>
              <p className="font-mono text-[13px] text-text-secondary">
                {"//"} src/components/primitives/button.tsx
              </p>
            </header>
            <div className="flex flex-wrap items-center gap-6">
              {/* Primary */}
              <div className="space-y-3">
                <p className="font-sans text-text-tertiary text-xs">Primary</p>
                <div className="flex flex-wrap gap-3">
                  <Button size="sm" variant="primary">
                    $ roast_my_code
                  </Button>
                  <Button size="md" variant="primary">
                    $ roast_my_code
                  </Button>
                  <Button size="lg" variant="primary">
                    $ roast_my_code
                  </Button>
                </div>
              </div>

              {/* Secondary */}
              <div className="space-y-3">
                <p className="font-sans text-text-tertiary text-xs">
                  Secondary
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="sm" variant="secondary">
                    $ share_roast
                  </Button>
                  <Button size="md" variant="secondary">
                    $ share_roast
                  </Button>
                  <Button size="lg" variant="secondary">
                    $ share_roast
                  </Button>
                </div>
              </div>

              {/* Link */}
              <div className="space-y-3">
                <p className="font-sans text-text-tertiary text-xs">Link</p>
                <div className="flex flex-wrap gap-3">
                  <Button size="sm" variant="link">
                    $ view_all &gt;&gt;
                  </Button>
                  <Button size="md" variant="link">
                    $ view_all &gt;&gt;
                  </Button>
                  <Button size="lg" variant="link">
                    $ view_all &gt;&gt;
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Toggle */}
          <section className="space-y-4">
            <header>
              <h3 className="font-sans text-text-primary">Toggle</h3>
              <p className="font-mono text-[13px] text-text-secondary">
                {"//"} src/components/primitives/toggle.tsx
              </p>
            </header>
            <div className="flex flex-wrap items-center gap-8">
              <Toggle defaultChecked label="roast mode" />
              <Toggle label="roast mode" />
            </div>
          </section>

          {/* Badge */}
          <section className="space-y-4">
            <header>
              <h3 className="font-sans text-text-primary">Badge</h3>
              <p className="font-mono text-[13px] text-text-secondary">
                {"//"} src/components/primitives/badge.tsx
              </p>
            </header>
            <div className="flex flex-wrap items-center gap-6">
              <Badge variant="critical">critical</Badge>
              <Badge variant="warning">warning</Badge>
              <Badge variant="good">good</Badge>
              <Badge variant="verdict">needs_serious_help</Badge>
            </div>
          </section>

          {/* CodeBlock */}
          <section className="space-y-4">
            <header>
              <h3 className="font-sans text-text-primary">CodeBlock</h3>
              <p className="font-mono text-[13px] text-text-secondary">
                {"//"} src/components/primitives/code-block.tsx
              </p>
            </header>
            <div className="max-w-140">
              <CodeBlock
                code={[
                  "function calculateTotal(items) {",
                  "  var total = 0;",
                  "  for (var i = 0; i < items.length; i++) {",
                  "    total = total + items[i].price;",
                  "  }",
                  "}",
                ].join("\n")}
                language="javascript"
                filename="calculate.js"
              />
            </div>
          </section>
        </section>

        {/* Navbar */}
        <section className="space-y-4">
          <header>
            <h2 className="font-sans text-lg text-text-primary">Navbar</h2>
            <p className="font-mono text-[13px] text-text-secondary">
              {"//"} src/components/navbar/
            </p>
          </header>
          <div className="max-w-3xl border border-border-primary">
            <Navbar>
              <NavbarBrand>DevRoast</NavbarBrand>
              <div className="flex gap-6">
                <NavbarLink href="#">about</NavbarLink>
                <NavbarLink href="#">leaderboard</NavbarLink>
              </div>
            </Navbar>
          </div>
        </section>

        {/* IssueCard */}
        <section className="space-y-4">
          <header>
            <h2 className="font-sans text-lg text-text-primary">IssueCard</h2>
            <p className="font-mono text-[13px] text-text-secondary">
              {"//"} src/components/issue-card/
            </p>
          </header>
          <div className="max-w-xl">
            <IssueCard>
              <IssueCardBadge variant="critical">critical</IssueCardBadge>
              <IssueCardTitle>using var instead of const/let</IssueCardTitle>
              <IssueCardDescription>
                the var keyword is function-scoped rather than block-scoped,
                which can lead to unexpected behavior and bugs. modern
                javascript uses const for immutable bindings and let for mutable
                ones.
              </IssueCardDescription>
            </IssueCard>
          </div>
        </section>

        {/* DiffBlock */}
        <section className="space-y-4">
          <header>
            <h2 className="font-sans text-lg text-text-primary">DiffBlock</h2>
            <p className="font-mono text-[13px] text-text-secondary">
              {"//"} src/components/diff-block/
            </p>
          </header>
          <div className="max-w-140">
            <DiffBlock>
              <DiffBlockHeader>your_code.ts → improved_code.ts</DiffBlockHeader>
              <DiffBlockLine variant="context">
                {"for (let i = 0; i < items.length; i++) {"}
              </DiffBlockLine>
              <DiffBlockLine variant="removed">var total = 0;</DiffBlockLine>
              <DiffBlockLine variant="added">const total = 0;</DiffBlockLine>
            </DiffBlock>
          </div>
        </section>

        {/* Leaderboard */}
        <section className="space-y-4">
          <header>
            <h2 className="font-sans text-lg text-text-primary">Leaderboard</h2>
            <p className="font-mono text-[13px] text-text-secondary">
              {"//"} src/components/leaderboard/
            </p>
          </header>

          {/* Compact */}
          <div className="space-y-3">
            <p className="font-sans text-text-tertiary text-xs">Compact</p>
            <div className="max-w-3xl">
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
              </Leaderboard>
            </div>
          </div>

          {/* Detailed */}
          <div className="space-y-3">
            <p className="font-sans text-text-tertiary text-xs">Detailed</p>
            <div className="max-w-3xl">
              <Leaderboard variant="detailed">
                <LeaderboardRow
                  rank="#1"
                  score="1.2"
                  code={`const foo = bar ?? baz;
const result = foo || defaultValue;
return process(foo);`}
                  language="javascript"
                  lines={3}
                  variant="detailed"
                  scoreClassName="text-accent-red"
                />
              </Leaderboard>
            </div>
          </div>
        </section>

        {/* ResultSummary */}
        <section className="space-y-4">
          <header>
            <h2 className="font-sans text-lg text-text-primary">
              ResultSummary
            </h2>
            <p className="font-mono text-[13px] text-text-secondary">
              {"//"} src/components/result-summary/
            </p>
          </header>
          <div className="space-y-6">
            {/* Critical */}
            <div className="space-y-3">
              <p className="font-sans text-text-tertiary text-xs">Critical</p>
              <ResultSummary>
                <ResultSummaryScore score={2.5} total={10} variant="critical" />
                <div className="flex flex-col gap-4">
                  <ResultSummaryBadge variant="critical">
                    verdict: needs_serious_help
                  </ResultSummaryBadge>
                  <ResultSummaryQuote>
                    "this code looks like it was written during a power outage
                    in 2005."
                  </ResultSummaryQuote>
                  <ResultSummaryMeta>
                    <span>lang: javascript</span>
                    <span>·</span>
                    <span>7 lines</span>
                  </ResultSummaryMeta>
                </div>
              </ResultSummary>
            </div>

            {/* Warning */}
            <div className="space-y-3">
              <p className="font-sans text-text-tertiary text-xs">Warning</p>
              <ResultSummary>
                <ResultSummaryScore score={5.0} total={10} variant="warning" />
                <div className="flex flex-col gap-4">
                  <ResultSummaryBadge variant="warning">
                    verdict: getting_there
                  </ResultSummaryBadge>
                  <ResultSummaryQuote>
                    "not terrible, but there's room for improvement."
                  </ResultSummaryQuote>
                  <ResultSummaryMeta>
                    <span>lang: javascript</span>
                    <span>·</span>
                    <span>15 lines</span>
                  </ResultSummaryMeta>
                </div>
              </ResultSummary>
            </div>

            {/* Good */}
            <div className="space-y-3">
              <p className="font-sans text-text-tertiary text-xs">Good</p>
              <ResultSummary>
                <ResultSummaryScore score={8.5} total={10} variant="good" />
                <div className="flex flex-col gap-4">
                  <ResultSummaryBadge variant="good">
                    verdict: acceptable_code
                  </ResultSummaryBadge>
                  <ResultSummaryQuote>
                    "actually... this is pretty decent. well done."
                  </ResultSummaryQuote>
                  <ResultSummaryMeta>
                    <span>lang: javascript</span>
                    <span>·</span>
                    <span>12 lines</span>
                  </ResultSummaryMeta>
                </div>
              </ResultSummary>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
