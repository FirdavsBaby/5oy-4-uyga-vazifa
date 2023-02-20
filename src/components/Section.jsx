import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from "axios";


const Section = () => {
  const [books, setBooks]= useState([])
  async function getData() {
    let { data } = await axios.get(
      "https://api.itbook.store/1.0/search/mongodb/"
    );
    setBooks(data.books);
  }
  useEffect(()=> {  
    getData()
  }, [])
  return (
    <section className="p-5 d-flex w-100 flex-wrap gap-5 justify-content-center">
      {books.map((b) => (
        <Card book={b} key={b.isbn13}/>
      ))} 
    </section>
  );
}

export default Section
