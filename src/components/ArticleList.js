import React from "react";
import Article from "./Article";

function ArticleList({posts}){
   const articles = posts.map((post)=>(
    <Article
    key={post.id}
    title={post.title}
    date={post.date}
    preview={post.preview}
    />
   ))
    return(
       <main>
       {articles}

       </main>
    )
}

export default ArticleList
















// a `<main>` element with the following components inside:
// - an array of `Article` components (one component for each of the `posts`
//   passed down as props to `ArticleList`)
// - make sure to assign a unique `key` attribute to each `Article`
