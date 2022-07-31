/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';
import{ useState } from "react";



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function TestimonialCard() {
const form = useState("");


    return (
    <section className='form' id="contactus" sx={{ variant: 'section.contactus' }}>
      <Container css={{ textAlign: 'center' }}>
        <SectionHeader id="contactusid" slogan="CONTACT US" title="We aim to reach you anytime and everywhere.. Your satisfaction is our mission" />
      </Container>
      
      <Box>
      <div>
      <form>      
      <input name="name" type="text" class="feedback-input" placeholder="Name" />   
      <input name="email" type="text" class="feedback-input" placeholder="Email" />
      <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
      <input type="submit" value="SUBMIT"/>
    </form>
      </div>
       {/* <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
              <Rating rating={item.review} />
              <Heading as="h3" sx={styles.title}>
                {item.title}
              </Heading>
              <Text sx={styles.description}>{item.description}</Text>
              <div className="card-footer">
                <div className="image">
                  <Image src={item.avatar} alt="Client Image" />
                </div>
                <div className="reviewer-info">
                  <Heading as="h4" sx={styles.heading}>
                    {item.name}
                  </Heading>
                  <Text sx={styles.designation}>{item.designation}</Text>
                </div>
              </div>
            </Box>
          ))}
        </Carousel>*/}
      </Box>
    </section>
  );
}

const styles = {
  contactusid:{
    marginTop:"50px"
  },
  
};
