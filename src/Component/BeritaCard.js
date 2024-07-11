import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import PropTypes from 'prop-types';
import axios from "axios";

function BeritaCard({ date, title, imageUrl, author, linkUrl }) {
  return (
    <a href={linkUrl} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card style={{ width: '30rem', marginBottom: '50px' }}>
      <Card.Img variant="top" src={imageUrl} />

        {date && <Card.Header style={{ fontSize: "30px" }}>{date}</Card.Header>}
        <Card.Body style={{ textAlign: "justify" }}>
          <blockquote className="blockquote mb-0">
            <p style={{ fontSize: "20px" }}>
              {title}
            </p>
            <footer className="blockquote-footer" style={{ fontSize: "15px" }}>
              {author}
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </a>
  );
}

BeritaCard.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  author: PropTypes.string,
  linkUrl: PropTypes.string,
};

function BeritaCardList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/articles");
        setArticles(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Tampilkan pesan loading saat data sedang diambil
  }

  return (
    <div>
      {articles.map((article) => (
        <BeritaCard
          key={article.id}
          date={article.date}
          title={article.title}
          imageUrl={article.imageUrl}
          author={article.author}
          linkUrl={article.linkUrl}
        />
      ))}
    </div>
  );
}

export default BeritaCardList;
