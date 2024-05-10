import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FC, ReactElement, ReactNode, Children } from "react";

type BreadcrumbItemProps = {
  href?: string;
  children: ReactNode;
};

export const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
  href,
  children,
  ...props
}) => {
  return href ? (
    <Link href={href} {...props}>
      {children}
    </Link>
  ) : (
    <div>{children}</div>
  );
};

type BreadcrumbsProps = {
  children:
    | ReactElement<BreadcrumbItemProps>[]
    | ReactElement<BreadcrumbItemProps>;
};

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ children }) => {
  const childCount = Children.count(children);
  return (
    <div className="flex space-x-1 text-xl font-semibold items-center">
      {Children.map(
        children as ReactElement<BreadcrumbItemProps>[],
        (child, index) => {
          return (
            <>
              {child} {index < childCount - 1 && <ChevronRight />}
            </>
          );
        }
      )}
    </div>
  );
};
