import { Badge, type BadgeProps } from "@/components/primitives/badge";

export type ResultSummaryBadgeProps = BadgeProps;

export function ResultSummaryBadge(props: ResultSummaryBadgeProps) {
  return <Badge {...props} />;
}
