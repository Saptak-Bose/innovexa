import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  children?: Readonly<ReactNode>;
  footer?: Readonly<ReactNode>;
};

export default function GlobalCard({
  children,
  description,
  title,
  footer,
}: Props) {
  return (
    <Card className="bg-card border border-border rounded-lg w-full mt-4">
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-medium text-secondary-foreground">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      {children && <div className="p-4">{children}</div>}
      {footer && (
        <CardFooter className="p-4 border-t border-border text-secondary-foreground">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}
