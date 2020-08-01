import React,{ useState, useEffect } from 'react';
import useMeals from '../hooks/useMeats';
import { getCategoriesMeals } from '../services/api';

export default function CategoryFilters() {

    // const [all, setAll] = useState('');
    const [categories, setCategories] = useState([])
    console.log(categories)

    useEffect(()=>{
        getCategoriesMeals().then(response=>{setCategories(response.meals)})
    },[]);



    return (
        <div>
            <button type="button" data-testid={`All-category-filter`} >All</button>
            {categories.slice(0,5).map(({strCategory }) =>(<button type="button" data-testid={`${strCategory }-category-filter`} >{strCategory }</button>))}
        </div>
    )
}
