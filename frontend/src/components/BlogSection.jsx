import '../css/animate.css'
import '../css/bootstrap.min.css'
import '../css/flaticon.css'
import '../css/gijgo.css'
import '../css/magnific-popup.css'
import '../css/font-awesome.min.css'
import '../css/style.css'
import '../css/slicknav.css'
import '../css/theme-default.css'
import '../css/themify-icons.css'
import '../css/owl.carousel.min.css'
import '../css/nice-select.css'
import p1 from '../img/post/post_1.png'
import p2 from '../img/post/post_2.png'
import p3 from '../img/post/post_3.png'
import p4 from '../img/post/post_4.png'
import b1 from '../img/blog/single_blog_1.png'
import b2 from '../img/blog/single_blog_2.png'
import b3 from '../img/blog/single_blog_3.png'
import b4 from '../img/blog/single_blog_4.png'
import b5 from '../img/blog/single_blog_5.png'



const BlogItem = ({ image, date, title, description, category, comments }) => (
  <article className="blog_item">
    <div className="blog_item_img">
      <img className="card-img rounded-0" src={image} alt="" />
      <a href="#" className="blog_item_date">
        <h3>{date.day}</h3>
        <p>{date.month}</p>
      </a>
    </div>
    <div className="blog_details">
      <a className="d-inline-block" href="single-blog.html">
        <h2>{title}</h2>
      </a>
      <p>{description}</p>
      <ul className="blog-info-link">
        <li>
          <a href="#">
            <i className="fa fa-user"></i> {category}
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-comments"></i> {comments} Comments
          </a>
        </li>
      </ul>
    </div>
  </article>
);

const SearchWidget = () => (
  <aside className="single_sidebar_widget search_widget">
    <form action="#">
      <div className="form-group">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Keyword"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Search Keyword")}
          />
          <div className="input-group-append">
            <button className="btn" type="button">
              <i className="ti-search"></i>
            </button>
          </div>
        </div>
      </div>
      <button
        className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
        type="submit"
      >
        Search
      </button>
    </form>
  </aside>
);

const CategoryWidget = () => (
  <aside className="single_sidebar_widget post_category_widget">
    <h4 className="widget_title">Category</h4>
    <ul className="list cat-list">
      {["Restaurant food", "Travel news", "Modern technology", "Product", "Inspiration", "Health Care"].map((cat, index) => (
        <li key={index}>
          <a href="#" className="d-flex">
            <p>{cat}</p>
            <p>({Math.floor(Math.random() * 30)})</p>
          </a>
        </li>
      ))}
    </ul>
  </aside>
);

const PopularPostsWidget = () => (
  <aside className="single_sidebar_widget popular_post_widget">
    <h3 className="widget_title">Recent Post</h3>
    {[
      { image: p1, title: "From life was you fish...", time: "January 12, 2019" },
      { image: p2, title: "The Amazing Hubble", time: "02 Hours ago" },
      { image: p3, title: "Astronomy Or Astrology", time: "03 Hours ago" },
      { image: p4, title: "Asteroids telescope", time: "01 Hours ago" },
    ].map((post, index) => (
      <div className="media post_item" key={index}>
        <img src={post.image} alt="post" />
        <div className="media-body">
          <a href="single-blog.html">
            <h3>{post.title}</h3>
          </a>
          <p>{post.time}</p>
        </div>
      </div>
    ))}
  </aside>
);

const TagCloudWidget = () => (
  <aside className="single_sidebar_widget tag_cloud_widget">
    <h4 className="widget_title">Tag Clouds</h4>
    <ul className="list">
      {["project", "love", "technology", "travel", "restaurant", "life style", "design", "illustration"].map((tag, index) => (
        <li key={index}>
          <a href="#">{tag}</a>
        </li>
      ))}
    </ul>
  </aside>
);

const InstagramFeedsWidget = () => (
  <aside className="single_sidebar_widget instagram_feeds">
    <h4 className="widget_title">Instagram Feeds</h4>
    <ul className="instagram_row flex-wrap">
      {[
        "post_5", "post_6", "post_7", "post_8", "post_9", "post_10"
      ].map((post, index) => (
        <li key={index}>
          <a href="#">
            <img className="img-fluid" src={`img/post/${post}.png`} alt="" />
          </a>
        </li>
      ))}
    </ul>
  </aside>
);

const NewsletterWidget = () => (
  <aside className="single_sidebar_widget newsletter_widget">
    <h4 className="widget_title">Newsletter</h4>
    <form action="#">
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          required
        />
      </div>
      <button
        className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
        type="submit"
      >
        Subscribe
      </button>
    </form>
  </aside>
);

const BlogSection = () => (
  <section className="blog_area section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mb-5 mb-lg-0">
          <div className="blog_left_sidebar">
            {[
              { image: b1, date: { day: "15", month: "Jan" }, title: "Google inks pact for new 35-storey office", description: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.", category: "Travel, Lifestyle", comments: 3 },
              { image: b2, date: { day: "15", month: "Jan" }, title: "Google inks pact for new 35-storey office", description: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.", category: "Travel, Lifestyle", comments: 3 },
              { image: b3, date: { day: "15", month: "Jan" }, title: "Google inks pact for new 35-storey office", description: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.", category: "Travel, Lifestyle", comments: 3 },
              { image: b4, date: { day: "15", month: "Jan" }, title: "Google inks pact for new 35-storey office", description: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.", category: "Travel, Lifestyle", comments: 3 },
              { image: b5, date: { day: "15", month: "Jan" }, title: "Google inks pact for new 35-storey office", description: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.", category: "Travel, Lifestyle", comments: 3 },
            ].map((blog, index) => (
              <BlogItem key={index} {...blog} />
            ))}
            <nav className="blog-pagination justify-content-center d-flex">
              <ul className="pagination">
                <li className="page-item">
                  <a href="#" className="page-link" aria-label="Previous">
                    <i className="ti-angle-left"></i>
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">1</a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">2</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link" aria-label="Next">
                    <i className="ti-angle-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog_right_sidebar">
            <SearchWidget />
            <CategoryWidget />
            <PopularPostsWidget />
            <TagCloudWidget />
            <InstagramFeedsWidget />
            <NewsletterWidget />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BlogSection;
