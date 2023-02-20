import React from 'react'

const Showcase = () => {
  return (
    <article className="w-100 container-fluid py-5 w-100 d-flex flex-column gap-4">
      <h1>Тренинг центры</h1>
      <h3>Центр в москве</h3>
      <p className="w-50 text-secondary">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quasi
        molestiae sit obcaecati natus, adipisci consectetur consequatur rerum
        labore, voluptatem ipsam dolorum itaque ducimus eum quaerat? Totam dolor
        voluptatum ipsum, incidunt perspiciatis ex delectus libero quisquam,
        nemo enim dolores quae id, cupiditate ad voluptatem expedita saepe?
        Harum accusamus aut facilis?
      </p>
      <div className="d-flex w-100">
        <img className='w-75 rounded-5'
          src="https://izhlife.ru/uploads/posts/2018-08/1535455274_dsvbfyylva4_compressed.jpg"
          alt=""
          height="700"
        />
        <div className="d-flex flex-column w-25 p-4">
          <h4>Оснащение</h4>
          <p className='text-secondary'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
            repudiandae voluptas veniam distinctio ratione eum assumenda dolorem
            velit, magnam nostrum corporis, eaque iure delectus fugiat commodi
            ipsam eos! Corporis voluptatibus, et dicta nobis voluptas
            accusantium id corrupti accusamus, officia dolorum inventore non.
            Eaque voluptatem temporibus ut quidem sint neque ullam!
          </p>
          <p className='text-secondary'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
            dolor. A cumque eos placeat, dolore aperiam neque, sequi non debitis
            atque voluptate dolorem, voluptates distinctio quaerat soluta
            blanditiis id. Iste similique libero quae reiciendis repellendus
            facere. Nulla veritatis facere laborum inventore quam quos,
            blanditiis dolores repellendus dolorem molestiae minima sit.
          </p>
        </div>
      </div>
    </article>
  );
}

export default Showcase
