import type { Metadata } from "next";
import FishMark from "./FishMark";

export const metadata: Metadata = {
  title: "Page not found · Paul Fischer",
};

export default function NotFound() {
  return (
    <main className="mx-auto max-w-[42rem] px-5 pt-16 pb-24 md:pt-28 md:pb-32 text-[1.125rem] leading-[1.65]">
      <FishMark />
      <h1 className="name mt-6 text-[2.25rem] md:text-[2.75rem] leading-[1.05] font-semibold tracking-[-0.02em]">
        <span>Page not found</span>
      </h1>
      <p className="enter mt-6 text-[1.25rem] leading-[1.55]" style={{ ["--d" as string]: "260ms" }}>
        There is nothing at this address. The <a href="/">homepage</a> has everything on this site.
      </p>
    </main>
  );
}
