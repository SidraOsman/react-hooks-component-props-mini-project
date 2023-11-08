import React from "react";

function About({about , image="https://via.placeholder.com/215"}){
    return(
    <aside>
        <img src={image}
        alt="blog logo"/>
        
        <p>{about}</p>
    </aside>
    )
}

export default About;

// an `<img>` element, with the `src` set to an image passed as a prop called
// `image`
// - the `<img>` element should use this placeholder image as a _default value_
// for the prop if no prop is passed in: "https://via.placeholder.com/215"
// - the image should also be accessible! Give it an `alt` attribute of "blog
// logo"
// - a `<p>` element, with the text for the blog passed in as a prop called
// `about`