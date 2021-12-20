import React, { useState } from 'react';

import { Navigation, Survey, SurveyItem } from 'components';

import { questions } from './surveyContainerHelpers';

export const Context = React.createContext({});

export const SurveyContainer = () => {
  const [page, setPage] = useState(1);
  const [context, setContext] = useState({});

  return (
    <Context.Provider value={[context, setContext]}>
      <Survey currentPage={page} pagesCount={questions.length}>

        {questions.map((question, index) => (
          <SurveyItem
            question={question}
            activePage={page === index + 1}
          >

            <Navigation
              page={page}
              pagesCount={questions.length}
              setPage={setPage}
            />

          </SurveyItem>
        ))}

      </Survey>
    </Context.Provider>
  );
};