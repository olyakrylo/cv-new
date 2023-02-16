import { FC, useRef } from 'react';
import cn from 'classnames';
import * as fs from 'fs';
import { GetServerSideProps } from 'next';

import { Contacts } from '@/entities/contacts';
import {
  NavigationContext,
  Section,
  useNavigation,
} from '@/features/navigation';
import { getJsonFromS3 } from '@/features/s3';
import { SectionLayout } from '@/features/sectionLayout';
import { ThemeContext, useTheme } from '@/features/theme';
import { CVData } from '@/shared/cvData';
import { About } from '@/widgets/about';
import { Education } from '@/widgets/education';
import { Experience } from '@/widgets/experience';
import { NavigationMenu } from '@/widgets/navigationMenu';
import { Skills } from '@/widgets/skills';

import styles from './App.module.css';

type AppProps = {
  data: CVData | null;
};

const App: FC<AppProps> = ({ data }) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  const { theme, toggleTheme } = useTheme();

  const { section, navigate } = useNavigation({
    sectionsList: [
      { id: Section.ABOUT, ref: aboutRef },
      { id: Section.EXPERIENCE, ref: experienceRef },
      { id: Section.SKILLS, ref: skillsRef },
      { id: Section.EDUCATION, ref: educationRef },
    ],
  });

  if (!data) {
    return <h1>:(</h1>;
  }

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  let data: CVData | null;
  const key = process.env.NEXT_PUBLIC_DATA_KEY as string;

  if (process.env.NODE_ENV === 'development') {
    const file = fs.readFileSync(key, 'utf-8');
    data = JSON.parse(file);
  } else {
    data = await getJsonFromS3<CVData>(key);
  }

  return {
    props: {
      data,
    },
  };
};

export default App;
