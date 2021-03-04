import Content from "../components/Content"
import Header from "../components/Header";

import axios from "axios";
import Gallery from "../components/Gallery";

const Photograph = ({content}) => {
    return (
        <>
            <Header />
            <Content>
                <Gallery images={content} />
            </Content>
        </>
    );
}
 
export default Photograph;

export async function getServerSideProps() {
    try {
      // GET about content
      const rescontent = await axios.get(`${process.env.API}/photographs?_sort=createdAt:DESC`)
      let content = rescontent.data
      content = content.map(item => item.pictures.formats.medium.url)
  
      return { props: {content} }
    } catch (err) {
      return { err }
    }
  }