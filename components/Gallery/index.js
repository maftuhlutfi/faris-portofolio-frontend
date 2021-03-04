import { useState } from "react";
import divide from "./divide";
import Photo from "./Photo";
import Preview from "./Preview";
import Wrapper from "./Wrapper";

const Gallery = ({images}) => {
    let dividedImage = divide(images);
    const [preview, setPreview] = useState(images[0])
    const [showPreview, setShowPreview] = useState(false)

    const handleClick = image => {
        setShowPreview(true);
        setPreview(image);
    }

    return (
        <>
            <Wrapper>
                <div>
                    {dividedImage[0].map((image, index) => <Photo onClick={() => handleClick(image)} key={index} src={image} />)}
                </div>
                <div>
                    {dividedImage[1].map((image, index) => <Photo onClick={() => handleClick(image)} key={index} src={image} />)}
                </div>
                <div>
                    {dividedImage[2].map((image, index) => <Photo onClick={() => handleClick(image)} key={index} src={image} />)}
                </div>
            </Wrapper>
            <Preview image={preview} show={showPreview} setShow={setShowPreview} />
        </>
    );
}
 
export default Gallery;