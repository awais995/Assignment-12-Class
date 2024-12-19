import HeroSection from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import TeamComponent from "@/components/TeamSection";

export default function Home() {
  return (
    <div>
      <HeroSection
        title="Get More Done with whitepace"
        subtitle="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks"
        buttonText="Try Whitepace free"
        buttonLink="/signup"
        imageSrc="/"
        imageAlt="hero-image"
      />

      <ProjectSection
        title="Project Management"
        subtitle="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
        buttonText="Get Started"
        buttonLink="/signin"
        imageSrc="/"
        imageAlt="hero-image"
      />

      <TeamComponent
        title="Work together"
        subtitle="With whitepace, share your notes with your colleagues and collaborate on them.
                  You can also publish a note to the internet and share the URL with others."
        buttonText="Try it now"
        buttonLink="/signin"
        imageSrc="/Work-together-Image.png"
        imageAlt="hero-image"
      />
    </div>
  );
}
