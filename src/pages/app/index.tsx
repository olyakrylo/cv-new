import { FC, useRef } from 'react';
import cn from 'classnames';
import { GetServerSideProps } from 'next';
import { ThemeProvider } from 'next-themes';

import { Contacts } from '@/entities/contacts';
import { Section, useNavigation } from '@/features/navigation';
import { NavigationContext } from '@/features/navigation';
import { getJsonFromS3 } from '@/features/s3';
import { SectionLayout } from '@/features/sectionLayout';
import { CVData } from '@/shared/cvData';
import { About } from '@/widgets/about';
import { Experience } from '@/widgets/experience';
import { NavigationMenu } from '@/widgets/navigationMenu';

import styles from './App.module.css';

type AppProps = {
  data: CVData | null;
};

const App: FC<AppProps> = ({ data }) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const { section, navigate } = useNavigation({
    sectionsList: [
      { id: Section.ABOUT, ref: aboutRef },
      { id: Section.EXPERIENCE, ref: experienceRef },
    ],
  });

  if (!data) {
    return <h1>:(</h1>;
  }

  return (
    <ThemeProvider>
      <NavigationContext.Provider value={section}>
        <div className={cn(styles.Container)}>
          <div className={styles.Content}>
            <About
              {...data.about}
              contentRef={aboutRef}
              className={styles.Section}
            />

            <SectionLayout
              contentRef={experienceRef}
              title={'Experience'}
              className={styles.Section}
            >
              <Experience experience={data.experience} />
            </SectionLayout>
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
    </ThemeProvider>
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
