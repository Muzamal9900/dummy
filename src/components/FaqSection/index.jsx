import React, { useState ,useEffect } from "react";
import "./index.css"
import NavBar from '../NavBar'
import { Typography } from '@mui/material'
import Button from '../Button'
import QuestionSection from '../questionSection'
import QusSection from "../QusSection";
import { useSpring, animated } from 'react-spring';
const AnimatedAnswer = ({ text }) => {
  const props = useSpring({
    to: { opacity: 1, transform: 'translateY(0)' },
    from: { opacity: 0, transform: 'translateY(-20px)' },
    config: { duration: 500 },
  });

  return (
    <animated.div style={props}>
      <Typography fontSize={"16px"} color={"#000"} style={{ marginTop: '10px', paddingLeft: "32px" }}>
        {text}
      </Typography>
    </animated.div>
  );
};

const FaqSection = () => {
  const GeneralQuestion = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const GeneralQuestionData =  [
      { question: "What are your services?", answer: "Designify is a full-service design agency." },
      { question: "How you are different from other design agencies ?", answer: "Our approach make us different from our competitors. we feel that most of the time clients don’t know what their brand's precise design requirements. we trace this as a big problem because usually design agencies works based on client requirements." },
      { question: "How payment process works?", answer: "We offer flexible payment options. e.g Bank transfer ( USA ), paypal, payoneer, crypto." },
      { question: "what is the project process?", answer: "Designify is a full-service design agency." },
      { question: "What are your complementary services?", answer: "Henry ford said that the client wants faster horses but i identify the client needs and invented the car. our agency follows this methodology and We pride ourselves on being a problem-solving brand, specializing in what we term “Root Design Analysis”. In many cases, We address this by conducting thorough market research on the client's brand and delivering design solutions that seamlessly align with the client's visual identity needs. its a complementary report we offer to each new client." },
      { question: "what additional services you are offering?", answer: "We offer our client a feature called “Live-ify” in which we setup a meeting with the client and share screen in which we do live design changes based on feedback and in this way, client can see real-time design changes and request any additional changes if they want so client have a full control over design changes." },
    
    ]
    return (
      <>
        {GeneralQuestionData.map((item, index) => (
          <div key={index}>
            <QusSection 
            
            text={item.question}
            onClick={() => toggleAnswer(index)}
            isOpen={activeIndex === index}
            />
             {activeIndex === index && (
      <AnimatedAnswer text={item.answer} />
    )}
          </div>
        ))}
      </>
    );
  };
  const BrandingComponent = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const BrandingQuestionData =  [
      { question: "How much does a branding package cost?", answer: "Every business is different and every brand package is unique. Based on your business’s requirements, Designify evaluates the time it will take to create a complete brand solution and provides a proposal for your review. Typical brand package start at $1500 and go up from there." },
      { question: "What is the difference between a brand and a logo?", answer: "Branding is the cumulative perspective of how your customers experience and perceive your company, while a logo is a symbol graphic used by an organization to identify itself. Logos are not meant to tell an in-depth story, instead, they serve as the primary identifier of your business. A brand includes every single touch-point your customers have with your company." },
      { question: "What is in a branding package?", answer: "At Designify, each branding package is custom and varies based on the requirements of the client. A typical branding package might include the logo system development as well as a comprehensive document containing guidelines for how to use the logo and branding elements, primary & secondary font specifications, color palette, general usage guidelines, patterns, icons, clear space, style rules, and common errors." },
      { question: "How long does it take to create a brand?", answer: "A typical brand package takes anywhere between 2 weeks to 1 months or longer. This timeline is predefined in the proposal process and is based on the specific scope of work and project requirements. Milestones and timelines may change based on revisions and client responsiveness." },
      { question: "What is a rebrand?", answer: "A rebrand is taking an established brand and changing its identity to align with the current organization and its customer’s perception of their products, services, and the company as a whole. This is accomplished by revitalizing the brand and making it more modern and relevant to its customer’s needs." },
    
    ]
    return (
      <>
        {BrandingQuestionData.map((item, index) => (
          <div key={index}>
            <QusSection
            
            text={item.question}
            onClick={() => toggleAnswer(index)}
            isOpen={activeIndex === index}
            />
            {activeIndex === index && (
      <AnimatedAnswer text={item.answer} />
    )}
          </div>
        ))}
      </>
    );
  };
  const PackagingComponent = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const PackagingQuestionData =  [
      { question: "What are Packaging design?", answer: "The process of producing anything on the exterior of a product that a buyer would buy in a store or online is known as a packaging design" },
        { question: "Which services you specifically offering in product packaging ?", answer: "A typical product packaging project includes the Die-line, 3d render of packaging and product, print ready packaging files, pattern file, material guidelines." },
        { question: "How long does it take to create a packaging for one product.", answer: "A typical product packaging takes anywhere between 1 weeks to 2 weeks or longer. This timeline is predefined in the proposal process and is based on the specific scope of work and project requirements." },
        { question: "Do you also offer printing services", answer: "not right now, we are just focused on creating digital designs. in future, we will open printing services too." },
        { question: "which files are included in Handover ?", answer: "An editable version of the final design (AI, PSD, PDF, or EPS), All web preview images (JPEG or PNG), A link to purchase any commercial fonts used in the design, font files, Print ready source file for hassle free printing (CMYK color mode and 300dpi resolution) , photo-realistic 3d renders" },
        { question: "How your design is printed?", answer: "there are 4 Printing techniques. 4-color offset: A full color printing process for large volume printing Digital printing: Great for small runs and short turnaround times Foil ink: Specialty process that uses metallic foil rather than ink Spot color: Color generated by an ink (pure or mixed) printed using a single run. Finishes The final touches made to your print Foil blocking: Metallic, foil finishes applied with a heated stamp Embossing: Raised textures applied to the material using heat Spot UV: A glossy finish applied to specific areas on the print" },
    
    ]
    return (
      <>
     {PackagingQuestionData.map((item, index) => (
  <div key={index}>
    <QusSection
      text={item.question}
      onClick={() => toggleAnswer(index)}
      isOpen={activeIndex === index}
    />
    {activeIndex === index && (
      <AnimatedAnswer text={item.answer} />
    )}
  </div>
))}

      </>
    );
  };
  const headings =[
    {
      id: 1,
      name: "General",
      component: GeneralQuestion,
    },
    {
      id: 2,
      name: "Branding",
       component: BrandingComponent,
    },
    {
      id: 3,
      name: "Packaging Design",
       component: PackagingComponent,
    },
   
  ]

  const [selectedService, setSelectedService] = useState(headings[0]);
  const [openQuestionIndex, setOpenQuestionIndex] = useState({});

  const handleQuestionClick = (headingId, questionIndex) => {
    // Toggle logic for opening and closing questions
    debugger;
    const isNewQuestionOpen = openQuestionIndex[headingId] !== questionIndex;
    setOpenQuestionIndex(isNewQuestionOpen ? { [headingId]: questionIndex } : {});
  };

 
  return (
    <>
    <NavBar color={"#000000"} type={"case-study"} />
    {/* <div className='flex-row-faq'>
      <div className='faqSectionWrapper'>
      <div className='faq-section'>
        <div className='flex-section-text'>
        <Typography fontSize={"calc(36px + 2vw)"} color={"#fff"} sx={{textTransform: "capitalize"}} fontWeight={700}>
     frequently asked questions
     </Typography>
        </div>
 <Typography fontSize={"12px"} color={"#fff"}fontWeight={700} sx={,marginTop:"2rem"}}>
 Can’t find the answer you’re looking for? <br/> Send us a message and we’ll get back to you lickety-split!
 </Typography>
 <Button text={"Contact Us"} type={"white"} />
      </div>
      </div>
   
      <div className='Question-section'>
        <QuestionSection/>
      </div>
      </div> */}
      <div className='faq-section '>
         <div className='flex-section-main'>
         <div className='flex-section-text'>
        <Typography fontSize={"calc(36px + 2vw)"} color={"#000"} sx={{textTransform: "capitalize"}} fontWeight={800}>
        Questions ? Look here.
             </Typography>
           
        </div>
        <div className="main-content">
        <ul className="faq-list">
       {
        headings?.map((heading) =>(
            <li 
            key={heading.id}
            className={`faq-item ${
              selectedService.id === heading.id ? "activeItem" : ""
            }`}
            onClick={() => setSelectedService(heading)}
            >
        <Typography
                variant="h1"
                fontWeight={900}
                lineHeight={1.4}
                fontSize={70}
                color={"#B5B5B5"}
              >
                {heading.name}
              </Typography>
              {
             selectedService.id === heading.id &&     <div
              className={`faq-qustion-mobile`}
            >
              {selectedService.component()}
            </div>
                   }
            </li>
            
        ))
       }
        </ul>
        <div className="faq-qustion">
        {selectedService.component()}
        </div>
        </div>
         </div>
{/*        
         <div>
<div className="email-faq">
<Typography
                fontSize={"22px"}
                fontWeight={500}
                color={"#000"}
              >
               bookacall@designifyservices.com
              </Typography>
</div>
         </div> */}
      </div>
      <div className="bottom-section">
          <Typography fontSize={"25px"} color={"#000"}  sx={{marginTop:"2rem",textAlign:"center"}}>
          Can’t find the answer you’re looking for? <br/> Send us a message and we’ll get back to you lickety-split!
          </Typography>
          <div className="contact-us-but">

          <Button text={"Contact Us"}  />
          </div>
         </div>
    </>
  
  )
}

export default FaqSection
