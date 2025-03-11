import React from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { AboutUsHero } from "../../components/AboutUsHero/AboutUsHero";
import { AboutUsTeam } from "../../components/AboutUsTeam/AboutUsTeam";
import { AboutUsCallUs } from "../../components/AboutUsCallUs/AboutUsCallUs";

export const AboutUs = () => {
  return (
    <div>
      <PageHeader pageName="About Us" breadcrumbsArray={[]} />
      <AboutUsHero />
      <AboutUsTeam />
      <AboutUsCallUs />
    </div>
  );
};
