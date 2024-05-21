/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";
import { vercelURL } from "../utils";
const frameHandler = frames(async (ctx) => {
  return {
    image: (vercelURL() || "http://localhost:3000") + "/frame-cover.gif",
    imageOptions: {
      aspectRatio: "1:1",
    },
    buttons: [
      <Button
        action="tx"
        target="./weedies-mint/mint1/"
        post_url="./weedies-mint/frames/"
      >
        Mint 1
      </Button>,

      <Button
        action="tx"
        target="./weedies-mint/mint12/"
        post_url="./weedies-mint/frames12/"
      >
        Mint 12
      </Button>,
      <Button
        action="tx"
        target="./weedies-mint/mint36/"
        post_url="./weedies-mint/frames36/"
      >
        Mint 36
      </Button>,
      <Button
        action="tx"
        target="./weedies-mint/mint75/"
        post_url="./weedies-mint/frames75/"
      >
        Mint 75
      </Button>,
    ],
  };
});

export const GET = frameHandler;
export const POST = frameHandler;
