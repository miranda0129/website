import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black"
    style={{
      backgroundImage: 'url("/images/background.jpg")'
    }}>
      <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 px-16">
        <div className="flex flex-1 flex-col  items-center gap-20 text-center min-w-9/10 bg-dark-blue/80">
          
          <p className="max-w-xs text-3xl font-semibold leading-10 text-orange p-4">
            Some blog posts. I guess sometimes I have something to say.
          </p>
        </div>
        
      </main>
    </div>
  );
}
