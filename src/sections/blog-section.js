// /** @jsx jsx */
// import { jsx } from 'theme-ui';
// import { Container, Box } from 'theme-ui';
// import SectionHeader from 'components/section-header';
// import PostCard from 'components/post-card.js';
// import ButtonGroup from 'components/button-group';
// import Carousel from 'react-multi-carousel';
// import PostThumb1 from 'assets/blog/1.svg';
// import PostThumb2 from 'assets/blog/2.svg';
// import PostThumb3 from 'assets/blog/3.svg';

// const data = [
//   {
//     id: 1,
//     imgSrc: PostThumb1,
//     altText: 'Marketing',
//     postLink: "https://www.youtube.com/embed/YFid8oahZYk",
//     title: 'Steps of convert MYSQL to PostgreSQL',
//     authorName: 'ENG. GEORGE',
//     date: 'Jan 27, 2018',
//   },
//   {
//     id: 2,
//     imgSrc: PostThumb2,
//     altText: 'Creative',
//     postLink: 'https://youtu.be/IGZpXMDXP4U',
//     title: 'Steps of Convert MYSQL to Oracle',
//     authorName: 'SQLIE',
//     date: 'Jan 25, 2018',
//   },
//   {
//     id: 3,
//     imgSrc: PostThumb3,
//     altText: 'Startup',
//     postLink: 'https://youtu.be/OGf-MXpQjAI',
//     title: 'Steps of Convert PostgreSQL to Oracle',
//     authorName: 'Aston Aagar',
//     date: 'Jan 25, 2018',
//   },
// ];

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1310 },
//     items: 3,
//     slidesToSlide: 3, // optional, default to 1.
//   },
//   laptop: {
//     breakpoint: { max: 1310, min: 1024 },
//     items: 3,
//     slidesToSlide: 3, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 640 },
//     items: 2,
//     slidesToSlide: 2, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 639, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };

// export default function BlogSection() {
//   return (
//     <section sx={{ variant: 'section.news' }}>
//       <Container>
//         <SectionHeader
//           slogan="OUR SOLUTION"
//           title="Explore our products for your business solution"
//         />

//         <Box sx={styles.carouselWrapper}>
//           <Carousel
//             additionalTransfrom={0}
//             arrows={false}
//             autoPlaySpeed={3000}
//             centerMode={false}
//             className=""
//             containerClass="carousel-container"
//             customButtonGroup={<ButtonGroup />}
//             dotListClass="test"
//             draggable={true}
//             focusOnSelect={false}
//             infinite={true}
//             itemClass=""
//             keyBoardControl
//             minimumTouchDrag={80}
//             renderButtonGroupOutside
//             renderDotsOutside={false}
//             responsive={responsive}
//             showDots={false}
//             sliderClass=""
//             slidesToSlide={1}
//           >
//             {data.map((item) => (
//               <PostCard
//                 key={item.id}
//                 src={item.imgSrc}
//                 alt={item.altText}
//                 postLink={item.postLink}
//                 title={item.title}
//                 authorName={item.authorName}
//                 date={item.date}
//               />
//             ))}
//           </Carousel>
//         </Box>
//       </Container>
//     </section>
//   );
// }

// const styles = {
//   carouselWrapper: {
//     '.carousel-container': {
//       mx: -3,
//     },
//   },
// };
