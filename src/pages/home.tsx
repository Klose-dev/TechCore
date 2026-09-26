import { Helmet } from "react-helmet"
import useFramerTransition from "@/hooks/use-transition"

import StudioHero from "@/components/sections/landing/section-studio-hero"
import StudioServices from "@/components/sections/landing/section-studio-services"
import StudioProcess from "@/components/sections/landing/section-studio-process"
import StudioStats from "@/components/sections/landing/section-studio-stats"
import StudioTeam from "@/components/sections/landing/section-studio-team"
import StudioWork from "@/components/sections/landing/section-studio-work"
import StudioCTA from "@/components/sections/landing/section-studio-cta"

const Home = useFramerTransition(
  <>
    <Helmet>
      <title>TechCore Studio | Web, Mobile, Desktop &amp; AI Software from Cameroon</title>
      <meta
        name="description"
        content="TechCore Studio is a small team in Cameroon that designs and builds web apps, desktop apps, mobile apps, AI tools, and data systems from discovery to launch in 30 days."
      />
    </Helmet>

    <main className="relative">
      <StudioHero />
      <StudioServices />
      <StudioProcess />
      <StudioStats />
      <StudioTeam />
      <StudioWork />
      <StudioCTA />
    </main>
  </>,
)

export default Home
