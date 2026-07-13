import Image from "next/image";
import PhotoGallery from '../../components/PhotoGallery';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black"
    style={{
      backgroundImage: 'url("/images/background.jpg")'
    }}>
      <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 px-16">
        <div className="flex flex-1 flex-col  items-center gap-10 text-center min-w-9/10 bg-dark-blue/80">
          <div>
            <p className="max-w-xs text-3xl font-semibold leading-10 text-orange p-4">
              My photo gallery.
            </p>
            <p>A selection of pictures. The world through my eyes.</p>
          </div>
          <PhotoGallery />
        </div>
        
      </main>
    </div>
  );
}