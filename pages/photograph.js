import Content from "../components/Content"
import Header from "../components/Header";
import { ReactPictureGrid } from 'react-picture-grid';

import axios from "axios";

const Photograph = ({content}) => {
    return (
        <>
            <Header />
            <Content>
                <ReactPictureGrid data={content} showPreview />
            </Content>
        </>
    );
}
 
export default Photograph;

export async function getServerSideProps() {
    try {
      // GET about content
      const rescontent = await axios.get(`${process.env.API}/photographs`)
      let content = rescontent.data
      content = content.map(item => ({image: item.pictures.formats.medium.url}))
  
      return { props: {content} }
    } catch (err) {
      return { err }
    }
  }