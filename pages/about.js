import Content from "../components/Content"
import Header from "../components/Header";
import Heading from "../components/Text/Heading"
import SubHeading from "../components/Text/SubHeading";

import axios from "axios";

const About = ({content}) => {
    return (
        <>
            <Header />
            <Content>
                <Heading>
                    {content && content.heading}
                </Heading>
                <SubHeading>
                    {content && content.subheading}
                </SubHeading>
            </Content>
        </>
    );
}
 
export default About;

export async function getServerSideProps() {
    try {
      // GET about content
      const rescontent = await axios.get(`${process.env.API}/about`)
      const content = rescontent.data
  
      return { props: {content} }
    } catch (err) {
      return { err }
    }
  }