/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';
import{ useState } from "react";
import axios from "axios";

const client = axios.create({
 // baseURL: "https://techprolanguages.com/api/api/email/support/send" 
  baseURL: "https://blogs.techprolanguages.com/api/api/email/support/send" 
});

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
const [email, setEmail] = useState('');
const[name,setName]=useState('');
const[body,setBody]=useState('');
const[loading,setLoading]=useState(false);
const[sendButtonValue,setSendButtonValue]=useState('Submit')
const[emailIsValid,setEmailIsValid]=useState(false);
const[isValid,setIsValid]=useState(true);


const checkAvilabillty=()=>{
  if(!email || !name || !body)
  {
    setIsValid(false);
   
  }
  else
  {
    setIsValid(true);
  }
}

const isValidEmailAddress=(val) =>{
  
  //return !! address.match(/.+@.+/);
  let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  setEmailIsValid(regEmail.test(val));
  return regEmail.test(val);
}
 const submit=(e)=>
 {
  e.preventDefault();
  console.log("submit");
  if(!emailIsValid)
  {return}
  if(!email || !name || !body)
  {
    setIsValid(false);
    return;
  }
  else
  {
    setIsValid(true);
  }
  
  setSendButtonValue('Message is Sending .....');
  client
  .post('', {
    from: email,
    displayName: name,
    subject:'Mesaage From techproLanguages Website',
    body:body
  })
  .then((response) => {
    setEmail('');
    setName('');
    setBody('');
    setSendButtonValue('Message Sent');
    setTimeout(() => {
      setSendButtonValue('Submit');
    }, 3000);
   
  });
 }

    return (
    <section className='form' id="contactus" sx={{ variant: 'section.contactus' }}>
      <Container css={{ textAlign: 'center' }}>
        <SectionHeader id="contactusid" slogan="CONTACT US" title="We aim to reach you anytime and everywhere.. Your satisfaction is our mission" />
      </Container>
      
      <Box>
      <div>
        
   
      <form  onSubmit={(e)=>submit(e)}>  
       
      <div> 
      {!isValid&&<div style={{color:'red'}}>you have to fill name and email and body</div>}
      </div> 
      <input name="name" type="text" className="feedback-input" placeholder="Name" value={name}  onChange={(e)=>{checkAvilabillty();setName(e.target.value);} }/>   
      <div>
       {email.length>0&&!emailIsValid && <div style={{color:'red'}}>Email is not Valid</div>}
      <input name="email" type="text" className="feedback-input" placeholder="Email" value={email}  onChange={(e)=>{checkAvilabillty();setEmail(e.target.value);isValidEmailAddress(email)}} />

      </div>
    
      
        
      <textarea name="text" className="feedback-input" placeholder="Please Enter Your Message" value={body}  onChange={(e)=>{checkAvilabillty();setBody(e.target.value)}}></textarea>
      <input type="submit" value={sendButtonValue}/>
      
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
