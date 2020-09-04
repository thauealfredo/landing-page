export type Image = {
  alternativeText: string
  url: string
}
//#region Arrays
export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type Module = {
  title: string
  subtitle: string
  description: string
}

export type SocialLink = {
  title: string
  url: string
}

export type Author = {
  photo: Image
  name: string
  role: string
  socialLinks: SocialLink[]
  description: string
}

export type Review = {
  id: number
  photo: {
    url: string
  }
  name: string
  text: string
}

export type Question = {
  id: number
  question: string
  answer: string
}

//#endregion

export type LogoProps = Image

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: Image
}

export type AboutProjectProps = {
  title: string
  description: string
  image: Image
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{ title: string }>
}

export type SectionModulesProps = {
  title: string
  modules: Module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type AboutUsProps = {
  title: string
  authors: Author[]
}

export type SectionReviewProps = {
  title: string
  reviews: Review[]
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
  extraQuestion: {
    question: string
    answer: string
  }
}

export type FooterProps = {
  text: string
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  aboutProject: AboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  aboutUs: AboutUsProps
  sectionReview: SectionReviewProps
  sectionFaq: SectionFaqProps
  footer: FooterProps
}
