import React, { useMemo, useState } from 'react';

import { ModalInfo, Navigation, Survey, SurveyItem } from 'components';

import { TContext, TSetContext } from './types';
import { allQuestions } from './surveyQuestions';

export const Context = React.createContext<[TContext, TSetContext]>([{}, () => undefined]);

export const SurveyContainer = () => {
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(true);
  const [context, setContext] = useState<TContext>({});

  const optionsArr = useMemo(() => allQuestions({ sex: context.sex?.answer as 'Male' | 'Female' }), [context.sex?.answer]);

  return (
    <Context.Provider value={[context, setContext]}>
      <Survey currentPage={page} pagesCount={optionsArr.length}>

        <ModalInfo
          showModal={showModal}
          toggleShowModal={() => setShowModal(!showModal)}
          content='Nice to meet you! Let’s take some time to get to know you better. It’ll only take 5 minutes!'
        />

        {optionsArr.map((question, index) => (
          <SurveyItem
            key={question.name}
            question={question}
            activePage={page === index + 1}
            title={`Question ${index + 1}`}
          >

            <Navigation
              page={page}
              setPage={setPage}
              question={question}
            />

          </SurveyItem>
        ))}

      </Survey>
    </Context.Provider>
  );
};