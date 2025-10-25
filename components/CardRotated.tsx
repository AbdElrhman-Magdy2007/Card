'use client';
import Stack from "./Stack";

export default function Home() {
  return (
    <div className="dark:bg-black flex items-center justify-center min-h-screen">
      <Stack
        randomRotation={true}
        sensitivity={180}
        sendToBackOnClick={false}
        cardDimensions={{ width: 270, height: 350 }}
      /></div>
  )
}