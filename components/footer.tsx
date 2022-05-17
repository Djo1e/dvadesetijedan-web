import Link from "next/link";
import { BarcodeFooterIcon } from "./icons/barcode-footer";
import { GithubIcon } from "./icons/github";
import { SpotifyIcon } from "./icons/spotify";
import { TelegramIcon } from "./icons/twitter";
import { YoutubeIcon } from "./icons/youtube";

export function Footer() {
  return (
    <footer className="flex justify-between px-8 pb-16 sm:px-16 pt-11 bg-dark brightness-110">
      <div className="flex items-center">
        <BarcodeFooterIcon />

        <ul className="flex ml-8 sm:ml-28 text-gray">
          <li>Copyright © 2022</li>
          <li className="ml-3 md:ml-6">Some link</li>
          <li className="ml-3 md:ml-6">Terms of Service</li>
          <li className="ml-3 md:ml-6">Privacy Policy</li>
        </ul>
      </div>
      <ul className="flex">
        <li>
          <Link href="https://youtube.com/">
            <a target="_blank">
              <YoutubeIcon />
            </a>
          </Link>
        </li>
        <li className="ml-3 md:ml-6">
          <a href="http://spotify.com/" target="_blank" rel="noreferrer">
            <SpotifyIcon />
          </a>
        </li>
        <li className="ml-3 md:ml-6">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
        </li>
        <li className="ml-3 md:ml-6">
          <a href="https://telegram.org/" target="_blank" rel="noreferrer">
            <TelegramIcon />
          </a>
        </li>
      </ul>
    </footer>
  );
}
