import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [photos, setPhoto] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchPhotos = async (pageNumber) => {
    const Access_Key = "-UPWLj-sCqLzwnNvwdzz0_nzvQrfhuXWTA3ZnAf2neQ";
    const res = await fetch(
      `https://api.unsplash.com/photos/?client_id=${Access_Key}&page=${pageNumber}&per_page=10`
    );

    const data = await res.json();
    // setPhoto((p) => [...p, ...data]);
    setPhoto([...data]);
    setLoading(true);
  };

  useEffect(() => {
    fetchPhotos(pageNumber);
  }, [pageNumber]);

  const loadMore = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  const pageEnd = useRef();
  let num = 1;

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            console.log(entries);
            num++;
            loadMore();
            if (num >= 10) {
              observer.unobserve(pageEnd.current);
            }
          }
        },
        { threshold: 1 }
      );
      observer.observe(pageEnd.current);
    }
  }, [loading, num]);

  return (
    <div className="App">
      <h1>Infinite scroll</h1>
      {photos.map((photo, index) => (
        <div className="photos" key={index}>
          <img src={photo.urls.small} alt="" />
          <p>{photo.user.first_name + " " + photo.user.last_name}</p>
          <span>Like: {photo.user.total_likes}</span>
        </div>
      ))}
      <div className="loading">
        <img
          src="https://github.com/devat-youtuber/infinite-scrolling-react/blob/master/src/loading.gif?raw=true"
          alt=""
        />
      </div>

      <h3>{photos.length}</h3>

      <button onClick={loadMore} ref={pageEnd}>
        Load More
      </button>
    </div>
  );
};
export default App;
