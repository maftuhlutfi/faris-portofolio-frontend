import Content from "../components/Content"
import Header from "../components/Header";
import Heading from "../components/Text/Heading"
import SubHeading from "../components/Text/SubHeading";

const About = () => {
    return (
        <>
            <Header />
            <Content>
                <Heading>
                    About me
                </Heading>
                <SubHeading>
                    Mauris mauris felis, ullamcorper non vestibulum quis, ullamcorper ac erat. Sed id elit ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris suscipit, eros at venenatis convallis, nisl neque ultricies neque, vitae consectetur velit tortor ut est. Suspendisse hendrerit semper lectus eu bibendum. Ut a arcu eu tortor dignissim elementum. Maecenas congue lorem eu porttitor mattis. Sed suscipit justo at ex dictum, sit amet ultrices quam dignissim. Proin aliquet luctus leo sit amet convallis.
                </SubHeading>
            </Content>
        </>
    );
}
 
export default About;