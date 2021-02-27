import PostList from "./PostList";
import PostItem from './PostItem'

const PostPreview = ({posts, photos}) => {
    return (
        <PostList>
            {photos.map((photo, index) => <PostItem key={index} image={photo.pictures.formats.small.url} />)}
            {posts.map((post, index) => <PostItem key={index} slug={post.slug} title={post.title} content={post.content} image={post.image.formats.small.url} />)}
        </PostList>
    );
}
 
export default PostPreview;