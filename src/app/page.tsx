import ContentsCards from '@components/ui/home/ContentsCards';
import LinkCards from '@components/ui/home/LinkCards';
import ProfileCard from '@components/ui/home/ProfileCard';
import PageTrans from '@components/ui/utils/PageTrans';
import Section from '@components/ui/utils/Section';

const Page: React.FC = () => {
  return (
    <>
      <PageTrans>
        <Section>
          <ProfileCard />
        </Section>
        <Section mt={'mt-8 sm:mt-14'}>
          <ContentsCards />
        </Section>
        <Section mt={'mt-8 sm:mt-14'}>
          <LinkCards />
        </Section>
      </PageTrans>
    </>
  );
};

export default Page;
