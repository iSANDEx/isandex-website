import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation(['translation']);
  return (
  <section id="about" className="page-section" style={{ backgroundColor: '#6a93d4' }}>
    <div className="container">
      <h2 className="text-center text-uppercase text-dark-gray">About Us</h2>
      <p className="text-center">
        {t("sections.aboutus.part1")}
      </p>
      <p className="text-center">
        {t("sections.aboutus.part2")}
      </p>
    </div>
  </section>
);
}

export default About;
