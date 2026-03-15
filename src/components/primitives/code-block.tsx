import type { BundledLanguage } from "shiki";
import { codeToHtml } from "shiki";
import { twMerge } from "tailwind-merge";

export type CodeBlockProps = {
  code: string;
  language: BundledLanguage;
  filename?: string;
  className?: string;
};

export async function CodeBlock({
  code,
  language,
  filename,
  className,
}: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang: language,
    theme: "catppuccin-mocha",
  });
  const lines = code.split("\n");

  return (
    <div
      className={twMerge(
        "w-full overflow-hidden border border-border-primary bg-bg-input",
        className,
      )}
    >
      {filename ? (
        <div className="flex h-10 items-center gap-3 border-border-primary border-b px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-red" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-yellow" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-green" />
          <div className="h-px flex-1 bg-border-primary" />
          <span className="font-mono text-[12px] text-text-tertiary">
            {filename}
          </span>
        </div>
      ) : null}
      <div className="grid h-full grid-cols-[40px_1fr]">
        <div className="flex h-full flex-col items-end border-border-primary border-r bg-bg-surface px-2.5 pt-3 pb-0 font-mono text-[13px] text-text-tertiary leading-6.5">
          {lines.map((line, index) => (
            <span key={`ln-${index}-${line}`}>{index + 1}</span>
          ))}
        </div>
        <div
          className="[&_pre]:m-0! [&_pre]:bg-transparent! [&_pre]:p-3! [&_pre]:pb-0! [&_pre]:font-mono! [&_pre]:text-[13px]! [&_pre]:leading-6.5!"
          // biome-ignore lint: Shiki output is trusted.
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
