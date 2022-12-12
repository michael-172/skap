import React, { useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import App_Navbar from "../Components/App_Navbar";
import Footer from "../Components/Footer";
import { getService, getServices } from "../ReduxToolkit/ServicesSlice";
import { getBlogs } from "../ReduxToolkit/Store/blogsSlice";
import styles from "../styles/BlogPage.module.scss";

const Blog = () => {
  const Blog = useParams();
  const BlogId = Blog.id;
  const dispatch = useDispatch();

  const { blogs } = useSelector((state) => state.blogs);
  useEffect(() => {
    dispatch(getBlogs(BlogId));
  }, [dispatch]);
  console.log(blogs);
  const globalState = useSelector((state) => state);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  return (
    <>
      <App_Navbar />
      <div className={styles.Blog}>
        <Container>
          <span className={styles.Breadcrumb}>Home {">"} Blog</span>
          {/* Blog__Top */}
          <div className={styles.Blog__Top}>
            <h2 className={styles.BlogMainTitle}>{blogs.title}</h2>
            <div className={styles.imageWrapper}>
              <Image src={blogs.blogImages} />
            </div>

            <div className={styles.TypeAndDate}>
              <span className={styles.Type}>
                {globalState.services.service.name}
              </span>
              <span>|</span>
              <span className={styles.Date}>November 28, 2022</span>
            </div>
          </div>

          {/* Blog__Bottom */}
          <div className={styles.Blog__Bottom}>
            Affiliate marketing on Instagram works the same as other platforms,
            where a business pays someone (i.e., an influencer) a commission for
            attracting people to purchase its product or service. The amount of
            commission paid is tracked through a unique code or URL. Instagram
            used to have a native program for creators, but it ended in August
            of 2022. Not to worry, though, because you can still make money from
            affiliate marketing on Instagram. This post will discuss how and
            give examples of creators that successfully use the strategy. How to
            Do Affiliate Marketing on Instagram{" "}
            <b>1. Switch to a creator or business account. </b> An important
            step, although not required, is to have a creator or business
            account on Instagram. When you have this designation on your
            account, it establishes your legitimacy with your followers and the
            businesses you choose to work with. You’ll be seen as a trusted
            source that is not trying to run a scam or make a quick profit. 2.
            Find affiliate partners or businesses that you want to work with. To
            start affiliate marketing on Instagram, you need to find an
            affiliate program you want to work with. Amazon Associates is an
            excellent example of an affiliate program, where you can earn a
            commission between 1 and 10% based on the product category. Another
            option is to reach out to businesses directly that you’d like to
            work with and explain how you relate to what they offer and the
            potential your audience has to bring them. Businesses might also
            reach out to you directly to start an affiliate partnership, which
            brings back the importance of having a business profile or creator
            account to establish your legitimacy. 3. Choose products relevant to
            your niche and the type of content you create. When finalizing your
            partnerships, ensure you choose products or services that relate to
            your niche, audience, and the content you already create. For
            example, if you’re a technology creator, partnering with a beauty
            brand does not align with the influence and content you create. It’s
            also essential to have trust in the products, businesses, or
            services you recommend. If your audience follows through with a
            purchase because of your recommendation and experience with the
            product and it doesn’t work as advertised, you can lose the trust
            with your audience that you worked hard to build. It’s a best
            practice to try products or services yourself beforehand to ensure
            the partnership is worthwhile for all involved. 4. Share your unique
            links or codes. The way you make money as an affiliate is when your
            audiences make a purchase through your unique code or link. So, make
            sure you share your codes in your Feed posts, Stories, Reels, your
            profile Bio — wherever they’ll be visible to your audience. If you
            have 10k or more followers, you can include a swipe up link in your
            Stories. When you share these links, it’s also a best practice to
            make it clear that it is part of a paid partnership to be
            transparent with your audience.
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
