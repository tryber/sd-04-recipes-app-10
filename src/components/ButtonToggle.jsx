import React from 'react'

function ButtonToggle() {
    return (
        
            <div className="row justify-content-center mb-2 mt-5">
      <button
        type="button"
        className="btn btn-primary btn-sm m-1 w-25"
        data-testid="All-category-filter"
        // onClick={() => toggleFilter('All')}
      >
        All
      </button>
      <button
        type="button"
        className="btn btn-primary btn-sm m-1 w-25"
        data-testid="All-category-filter"
        // onClick={() => toggleFilter('All')}
      >
        Food
      </button>
      <button
        type="button"
        className="btn btn-primary btn-sm m-1 w-25"
        data-testid="All-category-filter"
        // onClick={() => toggleFilter('All')}
      >
        Drinks
      </button>
    </div>
    )
}

export default ButtonToggle