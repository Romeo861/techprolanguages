/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

import Member1 from 'assets/team/member-1.jpg';
import Member2 from 'assets/team/member-2.jpg';
// import Member3 from 'assets/team/member-3.png';
// import Member4 from 'assets/team/member-4.png';
// import Member5 from 'assets/team/member-5.png';
// import Member6 from 'assets/team/member-6.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Eng.George Wagdy',
    title: 'George Wagdy',
    designation: 'CEO and Founder',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/george.wagdy.167',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/george-wagdy-784645135/',
        icon: <FaLinkedinIn />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Ramy Moussa',
    title: 'Ramy Moussa',
    designation: 'Frontend developer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/romeo.zaza/',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/ramy-moussa1986/',
        icon: <FaLinkedinIn />,
      },
    ],
  },
   
];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader
          slogan="OUR TEAM"
          title="Qualified and Talented individuals"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
