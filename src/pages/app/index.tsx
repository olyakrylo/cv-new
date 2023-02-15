import { FC, useRef } from 'react';
import cn from 'classnames';
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

  const { theme, toggleTheme } = useTheme();

  const { section, navigate } = useNavigation({
    sectionsList: [
      { id: Section.ABOUT, ref: aboutRef },
      { id: Section.EXPERIENCE, ref: experienceRef },
      { id: Section.SKILLS, ref: skillsRef },
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
                title={'Skills'}
                contentRef={skillsRef}
                className={styles.Section}
              >
                <Skills skills={data.skills} />
              </SectionLayout>

              <SectionLayout
                contentRef={experienceRef}
                title={'Experience'}
                className={styles.Section}
              >
                <Experience experience={data.experience} />
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
  const key = process.env.NEXT_PUBLIC_DATA_KEY as string;
  const data = await getJsonFromS3<CVData>(key);

  return {
    props: {
      data,
    },
  };
};

export default App;
