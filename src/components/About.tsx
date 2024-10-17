"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1661276983222-e737ed7693ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1540397532829-4b673cc67603?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1670960632607-e0175aebd7d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  return (
    <div>
      <div className="flex flex-col md:flex-row md:h-[350px] h-[500px] w-full  mx-auto overflow-hidden  border-gray-200 rounded-lg">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer  border-gray-200 last:border-r-0"
            animate={{
              flex: expandedIndex === index ? 3 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onHoverStart={() => setExpandedIndex(index)}
            onHoverEnd={() => setExpandedIndex(null)}
          >
            <Image
              src={image}
              alt={image}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
            {/* <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: expandedIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-white text-lg font-semibold text-center px-2">
                {image.alt}
              </p>
            </motion.div> */}
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          Hey there, I&apos;m Aditya Moharana - A full-stack developer with
          extensive experience in both web and blockchain development.
          Proficient in a broad range of technologies, including C++,
          JavaScript/TypeScript, React, Next.js, Node.js, Redis, Kafka, and
          databases such as MySQL, PostgreSQL, and MongoDB, I have built and
          scaled numerous applications that meet complex, real-world needs.
        </Paragraph>
        <Paragraph className="mt-4">
          In addition to my full-stack capabilities, I specialize in blockchain
          development, leveraging tools like Solidity, Hardhat, Truffle,
          Ethers.js, and Wagmi to create decentralized applications (dApps). My
          work in blockchain is driven by a deep understanding of how
          decentralized technologies can bring innovative and secure solutions
          to various industries.
        </Paragraph>
        <Paragraph className="mt-4">
          With a strong foundation in modern frameworks such as Docker, GraphQL,
          Drizzle ORM, and Tailwind, I design systems that are both scalable and
          efficient. My experience with system design, AWS, and Turborepo
          enables me to create reliable infrastructures that are well-suited to
          both traditional web applications and cutting-edge blockchain
          technologies.
        </Paragraph>
        <Paragraph className="mt-4">
          Throughout my career, I have developed a variety of full-stack and
          blockchain projects, demonstrating my ability to deliver high-quality
          solutions across the entire development lifecycle.
        </Paragraph>
      </div>
    </div>
  );
}
