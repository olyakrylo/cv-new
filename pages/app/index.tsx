import { GetServerSideProps } from 'next';
import { getJsonFromS3 } from '@/features/s3';
import { CVData } from '@/shared/cvData';
import { FC, useRef } from 'react';
import cn from 'classnames';
import { NavigationMenu } from '@/widgets/navigationMenu';
import styles from './App.module.css';
import { About } from '@/widgets/about';
import { Contacts } from '@/entities/contacts';
import { SectionLayout } from '@/shared/sectionLayout';
import { Section, useNavigation } from '@/features/navigation';
import { NavigationContext } from '@/features/navigation';

type AppProps = {
  data: CVData | null;
};

const App: FC<AppProps> = ({ data }) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const { section } = useNavigation({
    sectionsList: [
      { id: Section.ABOUT, ref: aboutRef },
      { id: Section.EXPERIENCE, ref: experienceRef },
    ],
  });

  if (!data) {
    return <h1>:(</h1>;
  }

  return (
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
            Content
          </SectionLayout>
        </div>

        <div className={styles.Footer}>
          <Contacts contacts={data.contacts} className={styles.FooterContent} />
        </div>

        <NavigationMenu contacts={data.contacts} className={styles.Menu} />
      </div>
    </NavigationContext.Provider>
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
