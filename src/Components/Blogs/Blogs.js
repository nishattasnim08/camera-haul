import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div className='blog-head'>
                <h1>Bonus Questions!</h1>
            </div>
            <div className='blog-components'>
                <div className='blog-component'>
                    <h4>What is Context API?</h4>
                    <p>A React app may use the React Context API to generate global variables that can be passed around. This is an alternative to "prop drilling," which entails passing props from grandma to kid to parent and so on. Context is also marketed as a simpler, lighter way to Redux state management.<br></br>
                        Context API is a (sort of) new feature in React 16.3 that allows you to easily and lightly communicate state across the entire project (or portion of it).</p>
                </div>
                <div className='blog-component'>
                    <h4>What is Semantic Tag?</h4>
                    <p>Semantics is one of HTML5's most essential elements. Semantic HTML is a grammar that improves the readability of HTML by properly describing the various parts and layouts of web pages. It improves the content interpretation of browsers and search engines by making web pages more informative and adaptive. A header tag, for example, can be used instead of div id="header."</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;