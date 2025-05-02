import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import BlogImg from "../../assets/images/section-img.png";
import BlogPostImg1 from "../../assets/images/blog1.jpg";
import BlogPostImg2 from "../../assets/images/blog2.jpg";
import BlogPostImg3 from "../../assets/images/blog3.jpg";

import "./Blog.css";

const BlogPopupContent = ({ post }) => {
  return (
    <div>
      <img src={post.image} alt={post.title} />
      <h3>{post.title} Details</h3>
      <p>
        <strong>Date:</strong> {post.date}
      </p>
      <h4>Description:</h4>
      <p>{post.description}</p>
    </div>
  );
};

const Blog = () => {
  const [popupContent, setPopupContent] = useState(null);
  const popupRef = useRef(null);

  const blogPosts = [
    {
      id: 1,
      image: BlogPostImg1,
      date: "22 Aug, 2020",
      title: "We have announced our new product.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.",
    },
    {
      id: 2,
      image: BlogPostImg2,
      date: "15 Jul, 2020",
      title: "Top five ways for solving teeth problems.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.",
    },
    {
      id: 3,
      image: BlogPostImg3,
      date: "05 Jan, 2020",
      title: "We provide highly business solutions.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupContent(null);
      }
    };

    if (popupContent) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupContent]);

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <section className="blog section" id="blogs">
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
          {blogPosts.map((post, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12">
              <div className="single-news">
                <div className="news-head">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="news-body">
                  <div className="news-content">
                    <div className="date">{post.date}</div>
                    <h2 onClick={() => setPopupContent(post)}>{post.title}</h2>
                    <p className="text">{post.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {popupContent && (
        <motion.div
          className="popup-backdrop"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={popupVariants}
        >
          <div className="popup-content" ref={popupRef}>
            <button
              className="close-button"
              onClick={() => setPopupContent(null)}
            >
              &times;
            </button>
            <BlogPopupContent post={popupContent} />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Blog;
