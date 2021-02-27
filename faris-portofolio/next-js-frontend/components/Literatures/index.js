import LiteratureItem from "./LiteratureItem";
import LiteratureList from "./LiteratureList";

const Literatures = ({posts}) => {
    return (
        <LiteratureList>
            {posts.map((post, index) => <LiteratureItem key={index} {...post} />)}
        </LiteratureList>
    );
}
 
export default Literatures;