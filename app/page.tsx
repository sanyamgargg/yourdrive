import Image from "next/image";

export default function Home() {
  return (
   <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-5xl font-extrabold text-primary">YourDrive</h1>
    <p className="text-muted-foreground">Your personal drive</p>
    </div>
  );
}
