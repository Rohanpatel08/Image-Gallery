import './App.css';
import ImageCard from './components/imageCard';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';


function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');


  useEffect(() => {
      function getData() {
          fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
              .then(response => response.json())
              .then(data => {
                  setImages(data.hits)
                  setIsLoading(false);
              })
              .catch(err => console.log(err))
      }
      getData()
  }, [term]) 

  return (
    <>
      <Navbar searchText={(text) =>setTerm(text)}/>

      {!isLoading && images.length === 0 && <h1 className='text-center my-4'>No Images Found</h1>}
      <div className='container my-4'>
        {isLoading? <h1>Loading...</h1> :<div className="row mx-2 my-2">
          {images.map((image)=>(
            <ImageCard key={image.id} img={image}/>
            ))}
        </div>}
      </div>
    </>
  );
}

export default App;
