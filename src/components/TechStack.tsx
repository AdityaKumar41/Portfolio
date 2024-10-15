import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "C++",
      src: "/images/logos/cpp.png",

      className: "h-10 w-10",
    },
    {
      title: "Java",
      src: "/images/logos/java.svg",

      className: "h-10 w-10",
    },
    {
      title: "Python",
      src: "/images/logos/python.png",

      className: "h-10 w-14",
    },
    {
      title: "Next.js",
      src: "/images/logos/nextjs.png",

      className: "h-10 w-14 dark:bg-white",
    },
    {
      title: "AWS",
      src: "/images/logos/aws.webp",

      className: "h-10 w-10",
    },
    {
      title: "React",
      src: "/images/logos/react.png",

      className: "h-10 w-10",
    },
    {
      title: "React-Query",
      src: "/images/logos/react-query.png",

      className: "h-10 w-20",
    },
    {
      title: "Figma",
      src: "/images/logos/figma.png",

      className: "h-10 w-8",
    },
    {
      title: "Framer Motion",
      src: "/images/logos/framer.webp",

      className: "h-10 w-10",
    },
    {
      title: "Node",
      src: "/images/logos/node.png",

      className: "h-10 w-14",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-24",
    },
    {
      title: "HTML",
      src: "/images/logos/html-5.png",

      className: "h-10 w-10",
    },
    {
      title: "CSS",
      src: "/images/logos/css-3.png",

      className: "h-10 w-10",
    },
    {
      title: "JavaScript",
      src: "/images/logos/javascript.svg",

      className: "h-10 w-10",
    },
    {
      title: "TypeScript",
      src: "/images/logos/typescript.svg",

      className: "h-10 w-10",
    },
    {
      title: "GraphQL",
      src: "/images/logos/graphql.svg",

      className: "h-10 w-10",
    },
    {
      title: "PostgreSQL",
      src: "/images/logos/postgre.png",

      className: "h-10 w-10",
    },
    {
      title: "GraphQL",
      src: "/images/logos/mongodb.svg",

      className: "h-10 w-20",
    },
    {
      title: "Prisma",
      src: "/images/logos/prisma.png",

      className: "h-10 w-10",
    },
    {
      title: "Drizzle",
      src: "/images/logos/drizzle.png",

      className: "h-10 w-10",
    },
    {
      title: "Docker",
      src: "/images/logos/docker.svg",

      className: "h-10 w-10",
    },
    {
      title: "Redis",
      src: "/images/logos/redis.svg",

      className: "h-10 w-10",
    },
    {
      title: "Supabase",
      src: "/images/logos/supabase.png",

      className: "h-10 w-10",
    },
    {
      title: "Turborepo",
      src: "/images/logos/turborepo.png",

      className: "h-10 w-10",
    },
    {
      title: "Firebase",
      src: "/images/logos/firebase.webp",

      className: "h-10 w-10",
    },
    {
      title: "kafka",
      src: "/images/logos/kafka.svg",

      className: "h-10 w-10 dark:bg-white",
    },
    {
      title: "MySQL",
      src: "/images/logos/mysql.svg",

      className: "h-10 w-10",
    },
    {
      title: "Nginx",
      src: "/images/logos/nginx.png",

      className: "h-10 w-14",
    },
    {
      title: "Git",
      src: "/images/logos/git.png",

      className: "h-10 w-10",
    },
    {
      title: "GitHub",
      src: "/images/logos/github.png",

      className: "h-10 w-10 dark:bg-white",
    },
    {
      title: "Postman",
      src: "/images/logos/postman.webp",

      className: "h-10 w-10",
    },
    {
      title: "Solidity",
      src: "/images/logos/solidity.png",

      className: "h-10 w-10",
    },
    {
      title: "Hardhat",
      src: "/images/logos/hardhat.png",

      className: "h-10 w-10",
    },
    {
      title: "Ethersjs",
      src: "/images/logos/etherjs.png",

      className: "h-10 w-11",
    },
    {
      title: "Truffle",
      src: "/images/logos/truffle.png",

      className: "h-10 w-10",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap ">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
