import { FC, useRef } from 'react';
import cn from 'classnames';

import { Contacts } from '@/entities/contacts';
import {
  NavigationContext,
  Section,
  useNavigation,
} from '@/features/navigation';
import { SectionLayout } from '@/features/sectionLayout';
import { ThemeContext, useTheme } from '@/features/theme';
import { About } from '@/widgets/about';
import { Education } from '@/widgets/education';
import { Experience } from '@/widgets/experience';
import { NavigationMenu } from '@/widgets/navigationMenu';
import { Projects } from '@/widgets/projects';
import { Skills } from '@/widgets/skills';

import { CVViewProps } from '../type';

import styles from './CV.module.css';

export const CV: FC<CVViewProps> = (data) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const { theme, toggleTheme } = useTheme();

  const { section, navigate } = useNavigation({
    sectionsList: [
      { id: Section.ABOUT, ref: aboutRef },
      { id: Section.EXPERIENCE, ref: experienceRef },
      { id: Section.SKILLS, ref: skillsRef },
      { id: Section.EDUCATION, ref: educationRef },
      { id: Section.PROJECTS, ref: projectsRef },
    ],
  });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <NavigationContext.Provider value={section}>
        <div className={cn(styles.Container)}>
          <div className={styles.Content}>
            <About
              {...data.about}
              contentRef={aboutRef}
              className={styles.Section}
            />

            <div className={styles.SectionList}>
              <SectionLayout
                contentRef={skillsRef}
                title="Skills"
                className={styles.Section}
              >
                <Skills skills={data.skills} />
              </SectionLayout>

              <SectionLayout
                contentRef={experienceRef}
                title="Experience"
                className={styles.Section}
              >
                <Experience organizations={data.experience} />
              </SectionLayout>

              <SectionLayout
                contentRef={educationRef}
                title="Education"
                className={styles.Section}
              >
                <Education organizations={data.education} />
              </SectionLayout>

              <SectionLayout
                contentRef={projectsRef}
                title="Projects"
                className={styles.Section}
              >
                <Projects projects={data.projects} />
              </SectionLayout>
            </div>
          </div>

          <div className={styles.Footer}>
            <Contacts
              contacts={data.contacts}
              className={styles.FooterContent}
            />
          </div>

          <NavigationMenu
            navigate={navigate}
            contacts={data.contacts}
            className={styles.Menu}
          />
        </div>
      </NavigationContext.Provider>
    </ThemeContext.Provider>
  );
};
