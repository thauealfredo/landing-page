export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type ImageData = {
  alternativeText: string
  url: string
}

export type LogoProps = {
  image: ImageData
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: ImageData
}

export type AboutProjectProps = {
  title: string
  description: string
  image: ImageData
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  aboutProject: AboutProjectProps
  sectionTech: SectionTechProps
}
