import ExportedImage from "next-image-export-optimizer";
import { BlogPreview } from "../components/blog-preview";

export default function Blog() {
  return (
    <main className="bg-dark">
      <div className="relative">
        <ExportedImage
          src="images/magic-internet-money.png"
          width={1440}
          height={600}
          layout="responsive"
          alt=""
        />
        <div className="absolute z-10 text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-[56px] leading-[70px]">Magic internet money</h1>
          <p className="mt-2 text-lg">
            Written by <span className="text-purple">Dergigi</span>, translated by{" "}
            <span className="text-purple">Pavlenex</span>
          </p>
        </div>
      </div>
      <div className="px-12 pt-16 pb-20 text-2xl tracking-wide md:px-32 md:px-40 xl:px-72 2xl:px-96 text-gray leading-9">
        <p>
          Technology is a marvelous thing. We are so quick to accept things as they stand, rarely
          taking the time to reflect on how magical these modern miracles are in actuality. Much of
          what we take for granted today would be indistinguishable from magic to anyone living just
          a couple of generations ago. Take a smartphone, for example. A pocket-sized piece of glass
          that can retrieve any piece of information at any time, talk to you, understand you,
          recognize faces, read fingerprints, record audio and video, and take high-resolution
          photographs. It is a flashlight, a compass, a navigation system, a notebook, a calendar, a
          travel planner, and a million other things. It can hold more books than the Great Library
          of Alexandria and show you more movies than you could ever watch, even if you had hundreds
          of lifetimes. And now, it can also hold your money and be your bank.
        </p>
        <p className="mt-10">
          As with all technology, you don’t necessarily need to understand how your smartphone works
          in order to use it. In the same vein, most people have no idea how an internal combustion
          engine works, yet they drive their car every day. They might have an approximate
          understanding - one that is good enough to have some faith in the thing they are using -
          but it will often remain just that: an approximate understanding. How lacking our
          knowledge of the inner workings of anything truly is becomes apparent as soon as that
          thing breaks down. Once the car refuses to start, the computer refuses to boot, or the
          router refuses to connect, our ignorance is laid bare. What is true for the marvels of the
          present will also be true for the marvels of the future: you don’t need to understand how
          everything works to use it successfully.
        </p>
        <p className="mt-10">
          The best way to become acquainted with technology (or magic, for that matter) is to use
          it. There is no better way to learn how something works - how it can be useful to you -
          than hands-on experience. What’s true for cars and smartphones is also true for Bitcoin.
          It is true for most things in our world, even the most mundane. You probably don’t know
          every detail of how a lock works, but you know that failing to lock your car or the door
          to your house might lead to disaster. Similarly, you won’t have to learn all the
          intricacies of public-key cryptography and hashing functions to understand that
          mishandling your private keys might lead to disaster as well.
        </p>
        <h2 className="mb-10 text-4xl font-medium text-white mt-11">You also might like</h2>
        <BlogPreview title="Inaliable Property Rights" author="Dergigi" translator="Pavlenex" />
      </div>
    </main>
  );
}
