import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const About = () => {
  return (
    <div>
      <Nav />
      <section className="py-5 px-3 d-flex flex-column">
        <div className="w-100 d-flex justify-content-between py-5 align-items-center">
          <h1 className="w-25">
            Комплексные цыфровые решения для учебных центров
          </h1>
          <p className="w-50 text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi
            temporibus optio porro obcaecati laboriosam dolorum ratione
            molestias sequi culpa deleniti eius, alias doloribus maxime eligendi
            nesciunt. Soluta, esse harum laborum tempore quae minus ipsum
            officia totam, omnis veritatis amet sit sed facilis explicabo
            ducimus dolores animi vel mollitia id maxime. Nostrum impedit
            debitis ad sequi excepturi, fuga quidem id corrupti alias aspernatur
            mollitia repudiandae minus ex aliquid voluptates odio possimus
            libero quas, laboriosam necessitatibus aperiam optio quaerat ipsum
            eligendi. Odit dolor voluptatibus assumenda minima veniam quos
            explicabo ut? Iste numquam ipsum molestias maiores rem nulla in
            praesentium quam deserunt.
          </p>
        </div>
        <div className="w-100 d-flex py-3">
          <div className="w-50">
            <h3 className="w-75">
              Распостроненная сегодня практика обучения имеет следующие болевые
              точки и недостатки:
            </h3>
            <div className="w-100 d-flex gap-2 p-2">
              <div className="p-3 border border-secondary w-50 rounded-5">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                  libero ad aliquid qui impedit soluta repellendus, ut corrupti
                  exercitationem porro quis! Corporis eos ullam nemo asperiores
                  praesentium, deleniti quam error!
                </p>
              </div>
              <div className="p-3 border border-secondary w-50 rounded-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, quis laborum dolores quo aspernatur dolorum facere
                  molestiae. Ducimus recusandae vel accusamus. Eum possimus sit
                  hic, velit illo similique maiores tenetur?
                </p>
              </div>
            </div>
            <div className="w-100 d-flex gap-2 p-2">
              <div className="p-3 border border-secondary w-50 rounded-5">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                  libero ad aliquid qui impedit soluta repellendus, ut corrupti
                  exercitationem porro quis! Corporis eos ullam nemo asperiores
                  praesentium, deleniti quam error!
                </p>
              </div>
              <div className="p-3 border border-secondary w-50 rounded-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, quis laborum dolores quo aspernatur dolorum facere
                  molestiae. Ducimus recusandae vel accusamus. Eum possimus sit
                  hic, velit illo similique maiores tenetur?
                </p>
              </div>
            </div>
          </div>
          <div className="w-50 bg-info p-5 d-flex flex-column align-items-center gap-4 rounded-5">
            <p className="w-25 text-center text-secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </p>
            <h2 className="text-center w-75 text-light">
              "Интерактивной системов практического обучения работе с
              операцционными микроскопами"
            </h2>
            <p className="w-25 text-center text-secondary">
              Lorem, ipsum dolor.
            </p>
          </div>
        </div>
        <div></div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
