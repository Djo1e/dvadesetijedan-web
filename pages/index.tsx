import ExportedImage from "next-image-export-optimizer";
import { BlogPreview } from "../components/blog-preview";
import { EpisodePlayer } from "../components/episode-player";
import { MeetupPreview } from "../components/meetup-preview";
import episodes from "../content/episodes.json";

export default function Index() {
  const [episode] = episodes;

  return (
    <main className="bg-dark">
      <ExportedImage
        src="/bitcoin-island.jpg"
        width={1920}
        height={720}
        layout="responsive"
        alt=""
      />
      <div className="px-8 pb-16 sm:px-20 lg:pb-20 lg:px-52">
        <div className="flex justify-center">
          <div className="text-center">
            <h1 className="text-[60px] lg:text-[80px] leading-[100px] mt-16 lg:mt-28">
              Where ideas thrive
            </h1>
            <p className="text-2xl mt-9">
              DvadesetJedan is a local bitcoin community for Serbia, Croatia, Bosnia and Montenegro.
            </p>
            <button className="px-16 py-6 mb-32 text-xl font-medium uppercase sm:mb-40 mt-14 bg-gradient-to-r from-purpleGradient to-lightOrangeGradient">
              join us
            </button>
          </div>
        </div>
        <h2 className="text-6xl font-medium mb-14">Meetups</h2>
        <ExportedImage
          src="/meetup-cover.png"
          width={1024}
          height={512}
          layout="responsive"
          alt=""
        />
        <div className="w-5/6 m-auto">
          <p className="mt-16 text-2xl font-medium text-center">
            We currently have over 100 members and meet up regularly. The meetups are very easy
            going where we discuss bitcoin and other subjects. Everyone is welcome! All you have to
            do is show up and be yourself.
          </p>
        </div>
        <div className="mt-24 md:px-10 xl:px-28">
          <h3 className="text-[32px] mb-8">Next meetup</h3>
          <MeetupPreview
            date="Monday, August 16, 2022"
            title='Cafe "Zona Industriale"'
            location="Njegoševa 49, Beograd 11000, Serbia"
          />
          <h3 className="text-[32px] mt-24 mb-8">Previous meetups</h3>
          <div className="mb-8">
            <MeetupPreview
              date="Monday, August 16, 2022"
              title="Kavantura"
              location="Horvaćanska cesta 23a, 10000, Zagreb, Croatia"
            />
          </div>
          <div className="mb-8">
            <MeetupPreview
              date="Monday, July 4, 2022"
              title="Ovčice"
              location="Put Firula 4, 21000, Split, Croatia"
            />
          </div>
          <div className="mb-8">
            <MeetupPreview
              date="Monday, June 24, 2022"
              title="Caffe Caffe"
              location="Sveti Stefan, Montenegro"
            />
          </div>
        </div>
        <h2 className="mt-40 mb-20 text-6xl font-medium">Latest podcast</h2>
        <EpisodePlayer episode={episode} />
        <div className="px-24">
          <div className="mt-8">
            <MeetupPreview
              date="Episode #20"
              title=""
              location="Discussing the implications of hyperbitcoinization."
            />
          </div>
          <div className="mt-8">
            <MeetupPreview
              date="Episode #19"
              title=""
              location="Why proof of work is essential to a new form of money."
            />
          </div>
        </div>
        <h2 className="mt-48 mb-20 text-6xl font-medium">From the blog</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:mr-8">
            <BlogPreview title="Inaliable Property Rights" author="Dergigi" translator="Pavlenex" />
          </div>
          <div className="mt-16 md:mt-0">
            <BlogPreview title="Inaliable Property Rights" author="Dergigi" translator="Pavlenex" />
          </div>
        </div>
      </div>
    </main>
  );
}

// export async function getStaticProps() {
//   const files = fs.readdirSync("posts");

//   const posts = files.map((fileName) => {
//     const slug = fileName.replace(".md", "");
//     const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
//     const { data: frontmatter } = matter(readFile);

//     return {
//       slug,
//       frontmatter,
//     };
//   });

//   return {
//     props: {
//       posts,
//     },
//   };
// }
