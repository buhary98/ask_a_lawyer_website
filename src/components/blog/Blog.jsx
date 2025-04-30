import React from "react";

import BlogImg from "../../assets/images/section-img.png";
import BlogPostImg1 from "../../assets/images/blog1.jpg";
import BlogPostImg2 from "../../assets/images/blog2.jpg";
import BlogPostImg3 from "../../assets/images/blog3.jpg";

import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    image: BlogPostImg1,
    date: "22 Aug, 2020",
    title: "We have announced our new product.",
    link: "blog-single.html",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.",
  },
  {
    id: 2,
    image: BlogPostImg2,
    date: "15 Jul, 2020",
    title: "Top five ways for solving teeth problems.",
    link: "blog-single.html",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.",
  },
  {
    id: 3,
    image: BlogPostImg3,
    date: "05 Jan, 2020",
    title: "We provide highly business solutions.",
    link: "blog-single.html",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.",
  },
];

const Blog = () => {
  return (
    <section className="blog section" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Keep up with Our Most Recent Medical News.</h2>
              <img src={BlogImg} alt="Section" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
                aliquet. pretiumts
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6 col-12">
              <div className="single-news">
                <div className="news-head">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="news-body">
                  <div className="news-content">
                    <div className="date">{post.date}</div>
                    <h2>
                      <a href={post.link}>{post.title}</a>
                    </h2>
                    <p className="text">{post.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
