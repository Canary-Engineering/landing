import Link from "next/link";

import { PageHeader, container } from "@/components/basic/primitives";

export default function NotFound() {
  return (
    <>
      <PageHeader
        title="This page doesn’t exist."
        lede="The link may be old, or the address mistyped."
      />
      <div className={`${container} pb-32`}>
        <Link
          href="/"
          className="inline-flex h-[46px] items-center rounded-full bg-primary px-6 text-[13.5px] font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Back to home
        </Link>
      </div>
    </>
  );
}
