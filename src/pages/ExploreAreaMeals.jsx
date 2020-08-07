import React, { useState, useEffect } from 'react';
import HeaderMeals from '../components/HeaderMeals';
import Footer from '../components/Footer';
import { getMealsArea } from '../services/api';
import ListMeals from '../components/ListMeals';
import useMeals from '../hooks/useMeats';

export default function ExploreAreaMeals() {
  const [areas, setAreas] = useState([]);
  const [value, setValue] = useState('');
  const [[, getMeals]] = useMeals();

  useEffect(() => {
    getMealsArea().then((result) => {
      setAreas(result.meals.meals);
    });
  }, []);

  useEffect(() => {
    if(value !== ''){
      getMeals({searchBy: 'area', text: value}, () => {});
    }
  }, [value])

  function selectArea() {
    const result = areas.map((area) => (
      <option value={area.strArea} key={area.strArea}>
        {area.strArea}
      </option>
    ));
    return result;
  }

  return (
    <React.Fragment>
      <HeaderMeals title="Explorar Origem" isSearcheable />
      <div className="row mt-5 pt-2">
        <div className="col pt-2">
          <select className="form-control" onChange={(e) => setValue(e.target.value)}>
            <option defaultValue>All</option>
            {selectArea()}
          </select>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col pb-5">
          <ListMeals />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
