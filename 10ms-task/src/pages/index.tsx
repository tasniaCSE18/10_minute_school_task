import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Course, Section } from '@/types/api';
import { getCourseData } from '@/utils/api-client';
import { HeroSection } from '@/components/sections/HeroSection';
import { InstructorsSection } from '@/components/sections/InstructorsSection';
import { PointersSection } from '@/components/sections/PointersSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { AboutSection } from '@/components/sections/AboutSection';

interface HomeProps {
  course: Course;
}

export default function Home({ course }: HomeProps) {
  const renderSection = (section: Section) => {
    switch (section.type) {
      case 'instructor':
        return (
          <InstructorsSection
            key={section.type}
            title={section.title}
            instructors={section.instructors}
          />
        );
      case 'pointers':
        return (
          <PointersSection
            key={section.type}
            title={section.title}
            pointers={section.pointers}
          />
        );
      case 'features':
        return (
          <FeaturesSection
            key={section.type}
            title={section.title}
            features={section.features}
          />
        );
      case 'about':
        return (
          <AboutSection
            key={section.type}
            title={section.title}
            content={section.content}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>{course.seo.title}</title>
        <meta name="description" content={course.seo.meta_description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection
          title={course.title}
          description={course.description}
          media={course.media}
          ctaText={course.cta_text}
        />

        {course.sections.map(renderSection)}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const course = await getCourseData();
    
    return {
      props: {
        course,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Failed to fetch course data:', error);
    
    return {
      notFound: true,
      revalidate: 60,
    };
  }
};