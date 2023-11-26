import { useEffect, useState } from "react";

import SoundIcon from "../../assets/svg/sound.svg";

const AudioButton = ({ src }) => {
    const [audioSrc, setAudioSrc] = useState("");

    useEffect(() => {
        src.find((item) => {
            if (
                (item.audio && String(item.audio).endsWith("uk.mp3")) ||
                String(item.audio).endsWith("us.mp3")
            ) {
                setAudioSrc(item.audio);
            }
        });
    }, [audioSrc]);

    const playAudio = async () => {
        try {
            let audio = new Audio(audioSrc);
            await audio.play();
        } catch (error) {
            console.error("Something wen't wront playing audio.");
        }
    };

    return (
        <div
            className="h-12 w-12 md:h-16 md:w-16 p-3 bg-pink-700 rounded-full scale-100 active:scale-95 ease-in-out duration-300 mt-2"
            onClick={playAudio}>
            <svg className="w-full">
                <image
                    href={SoundIcon}
                    className="w-full text-gray-20"
                />
            </svg>
        </div>
    );
};

export default AudioButton;
