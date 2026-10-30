import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slingshot Lamp — nobody touch the lamp",
  description:
    "A tiny, mischievous physics toy. There is a lamp. There is a slingshot. Nobody touch the lamp.",
};

export default function SlingshotLampLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
