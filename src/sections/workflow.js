/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';

// import PatternBG from 'assets/patternBG.png';
// import ArrowOdd from 'assets/arrowOdd.svg';
// import ArrowEven from 'assets/arrowEven.svg';

const data = [
  // {
  //   id: 1,
  //   title: 'Set disbursement Instructions',
  //   text:
  //     'Get your blood tests delivered at home collect a sample from the your blood tests.',
  // },
  // {
  //   id: 2,
  //   title: 'Assembly retrieves funds from your account',
  //   text:
  //     'Get your blood tests delivered at home collect a sample from the your blood tests.',
  // },
  // {
  //   id: 3,
  //   title: 'Assembly initiates disbursement',
  //   text:
  //     'Get your blood tests delivered at home collect a sample from the your blood tests.',
  // },
  // {
  //   id: 4,
  //   title: 'Customer receives funds payment',
  //   text:
  //     'Get your blood tests delivered at home collect a sample from the your blood tests.',
  // },
];

export default function WorkFlow() {
  return (
    <section sx={styles.workflow}>
      <Container>
        <SectionHeader
          slogan="Whats the function"
          title="Let’s see how it works"
          isWhite={true}
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: 'primary',

  },
 
  
};
