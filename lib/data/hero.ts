export interface HeroData {
  tagKey: string;
  titleKey: string;
  subtitleKey: string;
  imageUrl: string;
  imageAlt: string;
  primaryButtonTextKey: string;
  primaryButtonLink: string;
  secondaryButtonTextKey: string;
  yearsExperience: number;
  yearsExperienceTextKey: string;
}

export const heroData: HeroData = {
  tagKey: "home.tag",
  titleKey: "home.title",
  subtitleKey: "home.subtitle",
  imageUrl: "https://vy6bslamfuspbjny.public.blob.vercel-storage.com/Home/PRINCIPAL.png",
  imageAlt: "Industrias Jaber",
  primaryButtonTextKey: "home.exploreMachinery",
  primaryButtonLink: "/machinery",
  secondaryButtonTextKey: "home.watchDemo",
  yearsExperience: 25,
  yearsExperienceTextKey: "home.yearsExperience",
};
