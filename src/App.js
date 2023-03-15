import logo from "./logo.svg";
import "./App.scss";
import Testimonial from "./Carousel";
import NavbarComp from "./Navbar";
import profile from "./images/profile.png";
import star1 from "./images/star1.png";
import star2 from "./images/star2.png";
import flower from "./images/flower.jpg";
import Form from "./components/Form";

function App() {
  return (
    <div className="app">
      <NavbarComp />
      <div className="banner-section">
        <h1>Nadeem Zakkeer</h1>
        <h2>Therapeutic Coach</h2>

        <div class="svg-wrapper">
          <p className="cta text">One step at a time</p>
        </div>
      </div>

      {/* SECTION 2 */}

      <div className="section section-2">
        <div className="container">
          <h1>Hello</h1>
          <p className="">
            <span>I’m Nadeem.</span>
            <br /> <br />
            <span>
              Have you ever felt stuck in the pursuit of your purpose?
            </span>
            <br /> <br />
            <span>I’ve been there.</span> <br /> <br />
            <span>
              Whether that’s improving the dynamic between me and my parents by
              choosing to put an end and work through the generational trauma
              that's been passed on, getting married young and navigating a
              relationship at a time where the institution of marriage is
              falling apart, Moving countries every 5 years, overcoming
              unhealthy habits that got in the way of pursuing my goals, and
              struggling to maintain a healthy lifestyle without burning myself
              out.
            </span>
            <br /> <br />
          </p>
          <p>I see u.</p>
        </div>
        <div>
          <img src={profile}></img>
        </div>
      </div>

      <div className="section section-3">
        <img src={star1} className='star1'/>
        <img src={star2} className='star2'/>

        <div className="section-3-card card1">
          <p>
            Over the years I too have jumped on the bandwagon of self
            development and invested thousands of pounds and a significant
            amount of time and effort. In the pursuit of taking my life to the
            next level and utilising my full potential.
          </p>
        </div>
        <div className="section-3-card card2">
          <p>
            I sought after some of the best coaching services. Although they
            provided me with some value, I found them to lack depth. I did not
            see tools and techniques being employed that help in exploring an
            individual’s thoughts, feelings and past experiences.
          </p>
        </div>
        <div className="section-3-card card3">
          <p>
            Although they provided me with some value, I found them to lack
            depth. I did not see tools and techniques being employed that help
            in exploring an individual’s thoughts, feelings and past
            experiences. I was seeking a blend of a coaching modality and
            therapeutic counselling.
          </p>
        </div>
      </div>
      <div className="section section-4">
        <p>
          And that's what <br />
          therapeutic coaching <br />
          brings you,
          <br />
          <br />
          <span>the best of both worlds</span>
          <br />
          <br />
          We offer you therapeutic Coaching <br /> services. The assimilation of{" "}
          <br />
          counselling and life-coaching <br /> facilitates a more broad and
          inclusive
          <br />
          experience for our clients.
        </p>
        <br />
      </div>

      <div className="full-image-section section">
        <p>
          I’d like to work with you
          <br /> on your present, facing the future, exploring your <br /> past
          where necessary and facilitate change.
        </p>
      </div>

      <div className=" section-5">
        <h2>About</h2>
        <p>
          Coming from a middle-class family, I grew up in a relatively decent
          household. My dad worked hard starting from scratch, gradually making
          his way up to provide for his household while my mum worked hard at
          home taking care of the household and raising 2 boys. They tried their
          best to give us a good life. Thank God, I’ve never had to experience
          what it's like to go to bed hungry until I had become an adult, and
          until I had to leave the nest of my parents to build my own only to
          realise how naïve I’ve been about adulthood and the world outside my
          home. <br /> <br /> I realised that life was not easy and that you
          have to pave your own path. Well, that wasn’t pretty easy either,
          learning to navigate through conflicts in relationships, and getting
          rid of unhealthy habits that stood between me and the person I wanted
          to become. There were plenty of things that I wished I had the support
          and guidance for. <br /> <br />I did seek out support, be it by paying
          thousands of pounds for coaching, or counselling, or by working hard
          on self-improvement. And I did learn a lot through these valuable
          experiences. However, there was an important aspect that was missing.
          I wasn’t able to get what I wanted from those sessions. On one hand,
          counselling alone didn’t provide me with the tools to thrive in life,
          nor did it push and motivate me to seek constant improvement on its
          own. On the other, I wasn’t able to make the best use of the coaching
          sessions as I felt that the core beliefs I held from my past
          experiences constrained me.
          <br /> <br />
          <span className="golden">
            But… Let's say the situation was slightly different.{" "}
          </span>
        </p>

        <p>
          Imagine having a coach out there to help you overcome your hurdles and
          help you achieve your full potential in areas that need improvement,
          who is also trained to help you identify past experiences that may
          have shaped you and holds you back in the present. A two-in-one
          experience, that can be more instrumental in your change and also help
          you save more money.
          <br /> <br /> Having been in the coaching field for the past 3 years,
          coaching the youth mainly through teenage crises, transitioning to
          adulthood, relationship dynamics, and addiction recovery coaching,
          doubled with my training in counselling and psychotherapy across three
          modalities, I believe that I have something solid to offer you.
          <br /> <br /> Can you see yourself making the best of this life and
          the next? Then what’s stopping you from taking action? <br /> <br />
          If you’d like to embrace the journey of self-exploration and
          improvement I’d like to invite you to have a 40 min free consultation
          to work out whether we are the perfect fit for each other. Oh yes!,
          That’s important. The working relationship is the most crucial factor
          in predicting results. <br /> <br /> I’ll see you soon.
        </p>
      </div>

      <div className="services-section">
        <div className="services-section-content">
          <h1>What we provide</h1>
          <p>
            I specialize in empowering the youth to overcome relationship
            difficulties, struggles with addiction and regain discipline and
            motivation to lead purpose driven lives within an entirely
            confidential setting.
            <br /> <br />
            Being in your 20’s in the 21st century could undoubtedly be one of
            the best times to be alive, with the vast opportunities to learn,
            earn and turn your life around. But even with so much happening,
            surviving in this era can surely be daunting. Relationships that are
            only meaningful to the extent of social media, companies willing to
            go to any extreme to gain our attention, realities that are painful,
            ugly, boring and endless matters to get addicted to, and much more,
            all just to escape this reality.
            <br /> <br />
            <span>It’s time we wake up. </span> <br /> <br />
            <span>It’s time we take action.</span>
          </p>
        </div>
        <img src={flower} />
      </div>

      <div className="services-wrap section services-section">
        <div>
          <h1>Services we offer</h1>
          <ul>
            {/* <p>We are approached for: </p> */}
            <li>One to one coaching </li>
            <li>Difficulties in relationships</li>{" "}
            <li>Parent child dynamics</li>{" "}
            <li> Addiction recovery coaching </li>{" "}
            <li> Lack of discipline and motivation </li>
            <p> Other services </p>
            <li>Speaking: Youth Workshops & Training</li>
          </ul>
        </div>
        <img src={flower} />
      </div>

      <div className="tetimonial-wrap">
        <h2 className="golden">TESTIMONIALS</h2>
        <Testimonial />
      </div>

      <Form/>

      <div className="social-section section">
        <div className="cta-social">
          <p>
            Navigating life isn't easy,
            <br /> but you don't have to do
            <br /> it alone.
          </p>
        </div>
        <div className="social-media-icons">
          <p>Lets Talk</p>
          <div className="social-icons-wrap">
            <div>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.001 16.917c.552 0 .999-.448.999-.999v-7.919c0-.551-.448-.999-.999-.999h-12.002c-.551 0-.999.448-.999.999v7.919c0 .551.448.999.999.999h12.002zm-6.001-3.55l-5.45-3.782-.011 6.748h10.899v-6.748l-5.438 3.782zm5.174-5.784c-1.527 1.064-5.174 3.634-5.174 3.634l-5.203-3.634h10.377z" />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z" />
              </svg>{" "}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
              </svg>{" "}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M16.23 7.102c-2.002-.136-6.462-.135-8.461 0-2.165.148-2.419 1.456-2.436 4.898.017 3.436.27 4.75 2.437 4.898 1.999.135 6.459.136 8.461 0 2.165-.148 2.42-1.457 2.437-4.898-.018-3.436-.271-4.75-2.438-4.898zm-6.23 7.12v-4.444l4.778 2.218-4.778 2.226zm2-12.222c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
              </svg>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
