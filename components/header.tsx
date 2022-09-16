import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { routes } from "../utils/routes";
import { BarcodeHeaderIcon } from "./icons/barcode-header";
import { TextLogoIcon } from "./icons/text-logo";

export function Header() {
  const router = useRouter();

  return (
    <header className="flex flex-col items-center justify-between w-full px-8 py-8 md:flex-row lg:px-16 md:py-14 bg-dark">
      <div className="flex items-center">
        <BarcodeHeaderIcon />
        <h1 className="ml-3 text-3xl lg:text-4xl">
          <Link href={routes.home}>
            <a>
              <TextLogoIcon />
            </a>
          </Link>
        </h1>
      </div>
      <ul className="flex mt-8 lg:mt-0">
        <li className="mr-8 text-xl font-medium lg:mr-20">
          <Link href="#">
            <a
              className={classNames("hover:text-purple", {
                "text-purple": router.asPath === routes.podcast,
              })}
            >
              01. Podcast
            </a>
          </Link>
        </li>
        <li className="mr-8 text-xl font-medium lg:mr-20">
          <Link href={routes.blog}>
            <a
              className={classNames("hover:text-purple", {
                "text-purple": router.asPath === routes.blog,
              })}
            >
              02. Blog
            </a>
          </Link>
        </li>
        <li className="text-xl font-medium">
          <Link href={routes.community}>
            <a
              className={classNames("hover:text-purple", {
                "text-purple": router.asPath === routes.community,
              })}
            >
              03. Community
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
