import NFTIMAGE from "public/images/nftproject1.gif";
import NFTIMAGE2 from "public/images/nftproject2.png";
import NFTIMAGE3 from "public/images/nftproject3.png";
import localproducer1 from "public/images/localproducer1.png";
import localproducer2 from "public/images/localproducer2.png";
import spotify1 from "public/images/spotify1.png";
import spotify2 from "public/images/spotify2.png";
import twitter1 from "public/images/twitter1.png";
import twitter2 from "public/images/twitter2.png";
// import sampleimage from "public/images/sampleimage.png";

export const products = [
  {
    href: "https://github.com/AdityaKumar41/NFT-Mplace",
    title: "NFT Marketplace",
    description:
      "A design and development studio that focuses on building quality apps.",
    thumbnail: NFTIMAGE2,
    images: [NFTIMAGE2, NFTIMAGE3],
    stack: ["Nextjs", "NEAR sdk", "Tailwindcss"],
    slug: "NFTMarketplace",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://www.github.com/AdityaKumar41/Decentralize-local-produce",
    title: "Marketplace for Local Producer",
    description:
      "Decentralized marketplace where local farmers may purchase or sell goods in a decentralized manner.",
    thumbnail: localproducer1,
    images: [localproducer1, localproducer2],
    stack: [
      "React",
      "Nodejs",
      "Solidity",
      "Etherjs",
      "Graphql",
      "Tanstack-Query",
      "Tailwindcss",
      "Avalanche",
    ],
    slug: "localproducer",
    content: (
      <div>
        <p>
          Devlope a decentralized marketplace where local farmers may purchase
          or sell goods in a decentralized manner. Using P2P technology, both
          buyers and sellers can communicate on this platform. With the aid of
          AVAX cryptocurrency, the transaction was simple. Platform of fire on
          both sides.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/AdityaKumar41/Spotify-clone",
    title: "AudioFy",
    description: "AudioFy, a fullstack music streaming platform. ",
    thumbnail: spotify2,
    images: [spotify2, spotify1],
    stack: [
      "Reactjs",
      "Tailwindcss",
      "Nodejs",
      "Graphql",
      "AWS",
      "Postgres",
      "Prisma ORM",
      "Docker",
      "Nginx",
    ],
    slug: "audiofy",
    content: (
      <div>
        <p>
          Developed AudioFy, a fullstack music streaming platform. The
          application supports user authentication, real-time audio streaming,
          and playlist management. It includes features for creating artist
          profiles, uploading music, and managing content. and deployed the app
          with scalable backend infrastructure, for smooth user experience.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/AdityaKumar41/Twitter",
    title: "X.com Twitter Clone",
    description:
      "A Social Media platform that allows users to connect with each other.",
    thumbnail: twitter1,
    images: [twitter1, twitter2],
    stack: [
      "Nextjs",
      "Tailwindcss",
      "TypeScript",
      "Nodejs",
      "Graphql",
      "Docker",
      "Postgres",
      "Prisma ORM",
      "AWS",
      "Redis",
      "Supabase",
      "React-query",
    ],
    slug: "socialmedia",
    content: (
      <div>
        <p>
          Developed a social media platform, That offering features like
          creating posts with media, following other users, and real-time
          chatting. Users can interact through retweets, comments, and likes,
          just like other popular social media platforms. I also integrated a
          recommendation system that suggests users to follow based on interests
          and activity. The platform provides an intuitive interface and
          scalable backend, with simple and easy to use UI.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
];
