import { Badge, type BadgeProps } from "@/components/primitives/badge";

export type IssueCardBadgeProps = BadgeProps;

export function IssueCardBadge(props: IssueCardBadgeProps) {
  return <Badge {...props} />;
}
