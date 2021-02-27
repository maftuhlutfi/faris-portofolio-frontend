import Content from "../components/Content"
import Header from "../components/Header";
import { useState } from "react";

import axios from "axios";
import Category from "../components/Category";
import Literatures from "../components/Literatures";

const Literature = ({categories, posts}) => {
    const [active, setActive] = useState(categories[0].name)

    return (
        <>
            <Header />
            <Content>
                <Category active={active} setActive={setActive} categories={categories} />
                <Literatures posts={active === 'All' ? posts : posts.filter(post => post.post_categories.filter(category => category.name === active).length)} />
            </Content>
        </>
    );
}
 
export default Literature;

export async function getStaticProps() {
    try {
      // GET about categories
      const res = await axios.get(`${process.env.API}/post-categories`)
      const categories = [ {name: 'All'}, ...res.data ]

      const res1 = await axios.get(`${process.env.API}/posts?_sort=createdAt:DESC`)
      const posts = res1.data
  
      return { props: {categories, posts} }
    } catch (err) {
      return { err }
    }
  }