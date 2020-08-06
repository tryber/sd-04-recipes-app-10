import React from 'react';
import HeaderMeals from '../components/HeaderMeals';
import mock from '../services/mock';
import shareIcon from '../images/shareIcon.svg';
import useCopy from '../hooks/useCopy';
import ButtonToggle from '../components/ButtonToggle';

export default function DoneRecipes() {
  const meal = mock[0];
  const [ message, copy ] =  useCopy(window.location.href)

  function getTag(tags) {
    const newTags = tags.split(',');
    const result = newTags.slice(0, 2);
    return result;
  }

  return (
    <React.Fragment>
      <HeaderMeals title="Receitas Feitas" />;
        <ButtonToggle />
      <div className="card pt-2">
        <div className="row">
          <div className="col">
            <img data-testid={`-horizontal-image`} src={meal.strMealThumb} width="100%" alt="Food" />
          </div>
          <div className="col">
            <div className="row">
              <p data-testid={`-horizontal-top-text`} >
                {meal.strCategory}, {meal.strArea}
              </p>
              {message || (<button type="button" onClick={() => copy()}>
                  <img data-testid={`-horizontal-share-btn`} src={shareIcon} alt="Share" />
                </button>)}
            </div>
            <div className="row">
              <p data-testid={`-horizontal-name`}>
                {meal.strMeal}
              </p>
            </div>
            <div className="row">
              <p data-testid={`-horizontal-done-date`}>
              Feito em 05/08/2020
            </p>
            </div>
            <div data-testid={`-horizontal-tag`} className="row">
              {getTag(meal.strTags).map((tag) => <p key={tag} className="mr-2">{tag}</p>)}
            </div>
          </div>
        </div>
      </div>
      <div className="card pt-2">
        <div className="row">
          <div className="col">
            <img data-testid={`-horizontal-image`} src={meal.strMealThumb} width="100%" alt="Food" />
          </div>
          <div className="col">
            <div className="row">
              <p data-testid={`-horizontal-top-text`}>
                {meal.strCategory}, {meal.strArea}
              </p>
              {/* <button onClick={() => onClickMessage()}>
                <img data-testid={`-horizontal-share-btn`} src={shareIcon} alt="Share" />
              </button> */}
            </div>
            <div className="row">
              <p data-testid={`-horizontal-name`} >
                {meal.strMeal}
              </p>
            </div>
            <div className="row">
              <p data-testid={`-horizontal-done-date`}>
              Feito em 29/07/2020
              </p>
            </div>
            <div data-testid={`-horizontal-tag`} className="row">
              {getTag(meal.strTags).map((tag) => <p key={tag} className="mr-2">{tag}</p>)}
            </div>
          </div>
        </div>
      {/* <Modal show={true}>
        <Modal.Header closeButton>
          <Modal.Title>
            Mensagem
          </Modal.Title>
        </Modal.Header>
        <Modal.Boby>
        Link copiado!
        </Modal.Boby>
      </Modal> */}
      </div>
    </React.Fragment>
  );
}
