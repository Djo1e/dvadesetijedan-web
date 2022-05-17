import Link from "next/link";
import { BarcodeHeaderIcon } from "./icons/barcode-header";

export function Header() {
  return (
    <header className="flex flex-col items-center justify-between w-full px-8 py-8 md:flex-row lg:px-16 md:py-14 bg-dark">
      <div className="flex items-center">
        <BarcodeHeaderIcon />
        <h1 className="ml-3 text-3xl lg:text-4xl">
          <Link href="/">
            <a>DVADESETJEDAN</a>
          </Link>
        </h1>
      </div>
      <ul className="flex mt-8 lg:mt-0">
        <li className="mr-8 text-xl font-medium lg:mr-20">
          <Link href="#">
            <a className="hover:text-purple">01. Podcast</a>
          </Link>
        </li>
        <li className="mr-8 text-xl font-medium lg:mr-20">
          <Link href="/blog">
            <a className="hover:text-purple">02. Blog</a>
          </Link>
        </li>
        <li className="text-xl font-medium">
          <Link href="/community">
            <a className="hover:text-purple">03. Community</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
