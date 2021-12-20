import React, { useMemo, useState } from 'react';

import { Navigation, Survey, SurveyItem } from 'components';

import { TContext, TSetContext } from './types';
import { questions } from './surveyContainerHelpers';

export const Context = React.createContext<[TContext, TSetContext]>([{}, () => undefined]);

export const SurveyContainer = () => {
  const [page, setPage] = useState(1);
  const [context, setContext] = useState<TContext>({});

  const optionsArr = useMemo(() => questions({ sex: context['sex']?.answer as 'Male' | 'Female' }), [context['sex']?.answer]);

  return (
    <Context.Provider value={[context, setContext]}>
      <Survey currentPage={page} pagesCount={optionsArr.length}>

        {optionsArr.map((question, index) => (
          <SurveyItem
            key={question.name}
            question={question}
            activePage={page === index + 1}
            title={`Question ${index + 1}`}
          >

            <Navigation
              page={page}
              pagesCount={optionsArr.length}
              setPage={setPage}
              question={question}
            />

          </SurveyItem>
        ))}

      </Survey>
    </Context.Provider>
  );
};