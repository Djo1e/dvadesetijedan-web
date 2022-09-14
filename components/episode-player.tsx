import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import ExportedImage from "next-image-export-optimizer";
import { Episode } from "../utils/types";
import { useRef, useState } from "react";
import { PlayIcon } from "./icons/play";

type Props = H5AudioPlayer["props"] & {
  episode: Episode;
};

export function EpisodePlayer({ episode, ...otherProps }: Props) {
  const audioPlayer = useRef<any>();
  const [isPlaying, setIsPlaying] = useState(false);

  function togglePlay() {
    setIsPlaying(!isPlaying);

    if (isPlaying) {
      audioPlayer?.current?.pause?.();
    } else {
      audioPlayer?.current?.play?.();
    }
  }

  return (
    <div className="flex bg-dark brightness-110">
      <div className="hidden sm:block">
        <ExportedImage
          src="images/player.png"
          width={270}
          height={270}
          layout="fixed"
          objectFit="cover"
          alt=""
        />
      </div>
      <div className="flex justify-between w-full pl-4 pl-16 pr-4 md:pr-8 md:pl-8 py-7">
        <div>
          <p className="text-xl font-medium text-purple">#21</p>
          <p className="text-xl font-medium text-white text-3xl md:text-[38px] mt-3">
            Bitcoin is for everyone
          </p>
          <button onClick={togglePlay} className="mt-8">
            <PlayIcon />
          </button>
          <audio ref={audioPlayer} autoPlay={false} src={episode.enclosure.url} />
        </div>
        <a
          href={episode.enclosure.url}
          // download
          className="self-end text-xl text-purple"
        >
          Download
        </a>
      </div>
    </div>
  );
}
