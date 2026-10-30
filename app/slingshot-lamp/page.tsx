"use client";

export default function SlingshotLampPage() {
  return (
    <iframe
      src="/slingshot-lamp/index.html"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
        background: "#050607",
      }}
      title="Slingshot Lamp — nobody touch the lamp"
      allowFullScreen
    />
  );
}
