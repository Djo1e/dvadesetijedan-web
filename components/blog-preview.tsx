import Image from "next/image";
import { useRouter } from "next/router";
import { routes } from "../utils/routes";

interface BlogPreviewProps {
  title: string;
  author: string;
  translator: string;
}

export function BlogPreview({ title, author, translator }: BlogPreviewProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col" onClick={() => router.push(routes.blog)}>
      <Image src="/blog-preview.png" width={497} height={314} layout="responsive" alt="" />
      <div className="px-10 pt-12 pb-14 bg-dark brightness-110">
        <h1 className="text-2xl font-medium">{title}</h1>
        <p className="mt-4 text-lg text-gray">
          Written by <span className="text-purple">{author}</span>, translated by{" "}
          <span className="text-purple">{translator}</span>
        </p>
        <p className="mt-8 text-lg text-gray">
          It can’t be said often enough: Bitcoin is confusing. However, it’s not complicated like a
          Rube Goldberg machine is complicated.
        </p>
        <button className="mt-8 text-purple">Continue...</button>
      </div>
    </div>
  );
}

export function SmallerBlogPreview({ title, author, translator }: BlogPreviewProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col" onClick={() => router.push(routes.blog)}>
      <Image src="/blog-preview.png" width={360} height={250} layout="responsive" alt="preview" />
      <div className="pt-12 pb-14">
        <h1 className="text-xl font-medium">{title}</h1>
        <p className="mt-4 text-sm text-gray">
          Written by <span className="text-purple">{author}</span>, translated by{" "}
          <span className="text-purple">{translator}</span>
        </p>
        <p className="mt-6 text-md text-gray">
          It can’t be said often enough: Bitcoin is confusing. However, it’s not complicated like a
          Rube Goldberg machine is complicated.
        </p>
        <button className="mt-4 text-sm text-purple">Continue...</button>
      </div>
    </div>
  );
}
