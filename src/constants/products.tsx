import NFTIMAGE from "public/images/nftproject1.gif";
import NFTIMAGE2 from "public/images/nftproject2.png";
import NFTIMAGE3 from "public/images/nftproject3.png";
import localproducer1 from "public/images/localproducer1.png";
import localproducer2 from "public/images/localproducer2.png";
import spotify1 from "public/images/spotify1.png";
import spotify2 from "public/images/spotify2.png";
import twitter1 from "public/images/twitter1.png";
import twitter2 from "public/images/twitter2.png";
import chatcat1 from "public/images/chatcat1.png";
import chatcat2 from "public/images/chatcat2.png";
import fresher1 from "public/images/fresher1.png";
import fresher2 from "public/images/fresher2.png";
import doctor1 from "public/images/doctor1.png";
import doctor2 from "public/images/doctor2.png";
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
          I developed an NFT marketplace on the NEAR Protocol that offers a
          seamless user experience with advanced profile setup features. Users
          can easily personalize their accounts, track their NFTs, and manage
          their collections in a streamlined and user-friendly environment. The
          platform is designed to simplify the process of minting, buying, and
          selling NFTs within the NEAR ecosystem.
        </p>
        <p>
          By leveraging the security and scalability of the NEAR Protocol, the
          marketplace ensures that all transactions are conducted in a safe and
          efficient manner. Smart contracts enable secure and transparent
          exchanges, protecting both buyers and sellers from fraud. The
          platform:&apos;s intuitive design enhances user interaction, allowing
          for easy navigation, NFT tracking, and personalized user profiles.
        </p>{" "}
        <p>
          Whether users are seasoned NFT creators or newcomers, the platform
          provides tools that make minting and trading NFTs accessible to
          everyone. With its focus on user experience and security, this NFT
          marketplace opens up new opportunities for digital artists,
          collectors, and investors within the growing NEAR ecosystem.
        </p>
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
          I developed a decentralized marketplace specifically for local farmers
          to buy and sell goods in a peer-to-peer - P2P manner. This platform
          allows both buyers and sellers to communicate directly, eliminating
          the need for intermediaries and fostering a more equitable trade
          environment. Transactions on the platform are conducted using AVAX
          cryptocurrency, making the payment process seamless, secure, and
          transparent.
        </p>
        <p>
          One of the key features of the marketplace is its decentralization,
          which ensures that no central authority controls the transactions or
          communication between the users. This not only enhances privacy but
          also reduces the fees and delays that are typically associated with
          traditional marketplaces. The P2P technology integrated into the
          platform enables direct communication between buyers and sellers,
          facilitating real-time negotiations and decision-making.
        </p>{" "}
        <p>
          The marketplace is designed to be user-friendly, accessible to both
          tech-savvy and non-tech-savvy farmers, and can be easily scaled to
          accommodate more users and transactions as needed. Additionally, the
          platform employs smart contracts on the Avalanche network to ensure
          that transactions are tamper-proof, providing an added layer of
          security for both parties involved.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/AdityaKumar41/Spotify-clone",
    title: "AudioFy",
    description: "AudioFy, a fullstack music streaming platform. ",
    thumbnail: spotify1,
    images: [spotify1, spotify2],
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
          I Developed AudioFy, a fullstack music streaming platform. The
          application supports user authentication, real-time audio streaming,
          and playlist management. It includes features for creating artist
          profiles, uploading music, and managing content. and deployed the app
          with scalable backend infrastructure, for smooth user experience. I
          developed AudioFy, a fullstack music streaming platform that offers a
          seamless experience for users. The application supports key features
          such as user authentication, real-time audio streaming, and playlist
          management. Users can create and manage their own playlists, ensuring
          a personalized music experience.
        </p>
        <p>
          AudioFy also allows artists to create dedicated profiles where they
          can upload and manage their music content. This feature enables
          artists to showcase their work, interact with listeners, and grow
          their audience. The platform includes an easy-to-use interface for
          content management, ensuring that both artists and users can navigate
          effortlessly.
        </p>{" "}
        <p>
          To ensure a smooth and scalable experience, I deployed AudioFy with a
          robust backend infrastructure, designed to handle high volumes of user
          activity and real-time streaming without interruptions. This
          infrastructure allows the platform to scale as the user base grows,
          maintaining high performance and a seamless user experience. AudioFy
          combines functionality and scalability to deliver a feature-rich music
          streaming service for both users and artists alike.
        </p>
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
          I developed a social media platform that provides users with a variety
          of interactive features, including creating posts with media,
          following other users, and engaging in real-time chatting. Users can
          express themselves through retweets, comments, and likes, similar to
          popular social media networks. To enhance user engagement, I
          integrated a recommendation system that suggests users to follow based
          on their interests and activity, fostering a more connected community.
          The platform boasts an intuitive interface and a simple, easy-to-use
          UI, ensuring a seamless experience for users of all backgrounds.
        </p>
        <p>
          The technology stack for this project includes Next.js, Tailwind CSS,
          TypeScript, Node.js, GraphQL, and Docker, which collectively
          contribute to a robust and scalable backend. I utilized PostgreSQL and
          Prisma ORM for efficient data management, while AWS and Redis enhance
          performance and reliability. Additionally, React Query is employed for
          efficient data fetching and synchronization, improving the overall
          user experience.
        </p>{" "}
        <p>
          This platform not only focuses on providing essential social media
          functionalities but also prioritizes scalability and performance,
          making it a versatile solution for users seeking a dynamic and
          engaging online environment.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/AdityaKumar41/Chat-Cat",
    title: "Chat-Cat - A Chatting Application",
    description:
      "A Chating application called Chat-Cat, that offers a wide range of functionalities for real-time communication.",
    thumbnail: chatcat2,
    images: [chatcat1, chatcat2],
    stack: [
      "Reactjs",
      "Tailwindcss",
      "JavaScript",
      "Firebase",
      "Zustand",
      "Clerk",
      "Ngrok",
    ],
    slug: "chatcat",
    content: (
      <div>
        <p>
          I created a chatting application called Chat-Cat, which offers a wide
          range of functionalities for real-time communication. Users can
          interact seamlessly, utilizing a powerful search system that enables
          them to find friends and send friend requests. This feature enhances
          user connectivity and community engagement.
        </p>
        <p>
          Chat-Cat also includes a robust blocking functionality, allowing users
          to control their interactions and ensure a safe chatting environment.
          An impressive media feature supports various file types, including
          PDFs, DOCX documents, and audio files, making it easy for users to
          share diverse content within their conversations.
        </p>{" "}
        <p>
          The technology stack for Chat-Cat includes React.js and Tailwind CSS
          for a responsive and visually appealing user interface, while
          JavaScript powers the core functionality. I used Clerk for user
          authentication, providing secure and efficient login processes.
          Firebase manages real-time database interactions, ensuring a smooth
          user experience. Zustand is employed for efficient state management,
          enhancing application performance.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/AdityaKumar41/Fresher-Party",
    title: "Ticket System for Freshers",
    description:
      "A ticket system for freshers party, that allows students to Get tickets for the event.",
    thumbnail: fresher1,
    images: [fresher1, fresher2],
    stack: [
      "Reactjs",
      "Tailwindcss",
      "JavaScript",
      "Supabase",
      "Postgres",
      "Nodejs",
    ],
    slug: "fresher",
    content: (
      <div>
        <p>
          I developed a ticket system for a freshers party that allows students
          to get tickets for the event. The platform offers a seamless user
          experience, enabling students for perticular domain, get tickets, and
          download it. The system is designed to handle high volumes of traffic,
          ensuring that students can easily access the platform and complete
          their ticket purchases.
        </p>
        <p>
          This Platform offers admin panel, where admin can scan the tickets and
          verify the students. The platform is designed to be user-friendly and
          this system allows to scan tickets only once, to avoid any kind of
          fraud.
        </p>{" "}
        <p>
          The technology stack for this project includes React.js, Tailwind CSS,
          JavaScript, Supabase, Postgres, and Node.js, which collectively
          contribute to a robust and scalable backend. I utilized Postgres for
          efficient data management, while Supabase enhances performance and
          reliability. Additionally, React Query is employed for efficient data
          fetching and synchronization, improving the overall user experience.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/AdityaKumar41/Diagnosis",
    title: "Diagnosis Record System",
    description:
      "A platform where patients store their medical records and doctors can access them.",
    thumbnail: doctor1,
    images: [doctor1, doctor2],
    stack: [
      "Reactjs",
      "Tailwindcss",
      "TypeScript",
      "Sepolia",
      "Graphql",
      "Postgres",
      "Nodejs",
      "ipfs",
      "wagami",
    ],
    slug: "diagnosis",
    content: (
      <div>
        <p>🚧Corrently on development...</p>
        <p>
          I developed a diagnosis record system that allows patients to store
          their medical records and doctors to access them. The platform offers
          a secure and efficient way to manage patient data, ensuring that
          medical professionals can make informed decisions based on accurate
          information. Patients can easily upload their records, view their
          medical history, and share data with healthcare providers as needed.
        </p>
        <p>
          This platform offers to show the diagnosis history of the patient, and
          only doctor can access the patient's data who is specializations in
          that field.
        </p>{" "}
        <p>
          The technology stack for this project includes React.js, Tailwind CSS,
          TypeScript, Sepolia, Supabase, GraphQL, Postgres, and Node.js, which
          collectively contribute to a robust and scalable backend. I utilized
          Postgres for efficient data management, while Supabase enhances
          performance and reliability. Additionally, React Query is employed for
          efficient data fetching and synchronization, improving the overall
          user experience.
        </p>
      </div>
    ),
  },
];
