/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Planing from 'assets/key-feature/plan.png';
import Analysis from 'assets/key-feature/Market-Analysis-icon.png';
import Design from 'assets/key-feature/Design.png';
import Development from 'assets/key-feature/visual-studio-code-icon.png';
import Testing from 'assets/key-feature/test.png';
import Maintenance from 'assets/key-feature/maintenance.png';
import Implementation from 'assets/key-feature/implementation.png';
import Congratulate from 'assets/key-feature/AppReady.png';

const data = [
  {
    id: 1,
    imgSrc: Planing,
    altText: 'Plan',
    title: 'Planing Stage',
    text:
      'The planning stage (also called the feasibility stage) is exactly what it sounds like: the phase in which developers will plan for the upcoming project.',
  },
  {
    id: 2,
    imgSrc: Analysis,
    altText: 'Analysis',
    title: 'Analysis Stage',
    text:
    'The analysis stage includes gathering all the specific details required for a new system as well as determining the first ideas for prototypes.'
  },
  {
    id: 3,
    imgSrc: Design,
    altText: 'Design',
    title: 'Design Stage',
    text:
    'The design stage is a necessary precursor to the main developer stage.',
  },
    {
    id: 4,
    imgSrc: Development,
    altText: 'implementation',
    title: 'Development Stage',
    text:
    'The development stage is the part where developers actually write code and build the application according to the earlier design documents and outlined specifications.',
  },
  {
    id: 5,
    imgSrc: Implementation,
    altText: 'implementation',
    title: 'implementation and Integration Stage',
    text:
    'After testing, the overall design for the software will come together. Different modules or designs will be integrated into the primary source code through developer efforts, usually by leveraging training environments to detect further errors or defects.',
  },
  {
    id: 6,
    imgSrc: Testing,
    altText: 'testing',
    title: 'testing Stage',
    text:
    'Building software is not the end,During the testing stage, developers will go over their software with a fine-tooth comb, noting any bugs or defects that need to be tracked, fixed, and later retested.',
  },
  {
    id: 7,
    imgSrc: Maintenance,
    altText: 'maintenance',
    title: 'maintenance Stage ',
    text:
    'The SDLC doesn’t end when software reaches the market. Developers must now move into a maintenance mode and begin practicing any activities required to handle issues reported by end-users.',
  },
  {
    id: 8,
    imgSrc: Congratulate,
    altText: 'Congratulate',
    title: 'Your APP is Ready',
    text:
    'Congratulations your application has been forwarded',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="Meet Your Application Through Software Development Life Cycle "
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
