import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black ">Hello there! I&apos;m Aditya</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves with a passion for{" "}
        <Highlight>
          building scalable, high-performance web applications
        </Highlight>{" "}
        that are both functional and visually appealing. I focus on delivering
        optimized solutions that enhance user experiences.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        In addition to web development, I&apos;m a blockchain developer
        passionate about{" "}
        <Highlight>building decentralized applications (dApps)</Highlight> that
        address practical, real-world needs. I&apos;m driven by the power of
        blockchain to deliver secure, innovative solutions that can reshape how
        we approach everyday challenges.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products limit={4} />

      <TechStack />
    </Container>
  );
}
