// Travel.js
import React from 'react';
import destination from './Destination';
import Footer from './Footer';

function Travel({ price, setPrice, places, setPlaces }) {
    function add(cost, name) {
        // setPrice((price) => price + cost);
        // setPlaces([...places, name]);
    //    console.log(cost)
    // const x = cost 
    // console.log(+cost)
    // const x = []
    // '$ 800'
    cost = cost.split(' ')[1]; // ['$', '800']

    cost = parseFloat(cost);

  setPrice((oldPrice)=>oldPrice+cost);
  setPlaces([...places, name])
        
      }
 
      

  return (
    <div className='main'>
      <h4>Our Premium Packages 😉</h4>
      <div className='row'>
        {destination.map((item) => (
          <div className='col-lg-4 col-md-6 col-sm-12' key={item.id}>
            <div className='card-name'>
              <h5 className='card-title'>{item.name}</h5>
              <img src={item.url} alt='' />
              <button className='price'>{item.day} Days: {item.price}</button>
              <button className='hero-btn btn2' onClick={() => add(item.price, item.name)}>
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
     
      <Footer />
    </div>
  );
}

export default Travel;
