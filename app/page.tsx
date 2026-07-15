import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black"
    style={{
      backgroundImage: 'url("/website/images/background.jpg")'
    }}>
      <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 px-16">
        
        <div className="flex flex-1 flex-col  items-center gap-10 text-center text-left min-w-9/10 bg-dark-blue/80">
          <div className="flex w-full flex-col items-start p-4 pb-0">
            <h1 className="text-3xl font-bond text-orange">Hi!</h1>
            <p>I'm Miranda and this is my website.</p>
            <p>Below you can find links to my socials. </p>
            <p>Explore the other tabs to find out what else is in store.</p>
          </div>
          <ul className="flex flex-row w-full justify-around p-3">
            <li>
              <a href="mirandaransom@proton.me">
                <img src="/website/mail_icon.svg"
                className="h-12"></img>
              </a>
            </li>
            <li>
              <a href="https://github.com/miranda0129">
                <img src="/website/github_icon.png"
                className="h-12"></img>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mkr0129/">
                <img src="/website/instagram_icon.svg"
                className="h-12"></img>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/miranda0129/">
                <img src="/website/linkedin_icon.png"
                className="h-12" ></img>
              </a>
              
            </li>
          </ul>
          <div className="pb-5">
            <img 
              height = {500}
              className="rounded-2xl w-full max-w-md rounded-xl object-cover shrink"
              src="/website/free.JPG" alt="Not free as in beer, free as in speech.">
            </img>
          </div>
        </div>
        {/* <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div> */}
      </main>
    </div>
  );
}
