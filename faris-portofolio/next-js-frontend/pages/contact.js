import Content from "../components/Content"
import Header from "../components/Header";
import Socmed from "../components/Socmed";
import Heading from "../components/Text/Heading"
import SubHeading from "../components/Text/SubHeading";

import axios from "axios";

const Contact = ({content}) => {
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
                <Socmed socmed={content && content.socialmedia} />
            </Content>
        </>
    );
}
 
export default Contact;

export async function getStaticProps() {
    try {
      // GET about content
      const rescontent = await axios.get(`${process.env.API}/contact`)
      const content = rescontent.data
  
      return { props: {content} }
    } catch (err) {
      return { err }
    }
  }