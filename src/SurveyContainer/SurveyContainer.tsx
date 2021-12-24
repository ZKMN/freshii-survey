import React, { useMemo, useState } from 'react';

import { Navigation, Survey, SurveyQuestion } from 'components';

import { TContext, TSetContext } from './types';
// import { generalQuestions } from './generalQuestions';
import { cartQuestions } from './cartQuestions';

export const Context = React.createContext<[TContext, TSetContext]>([{}, () => undefined]);

export const SurveyContainer = () => {
  const [page, setPage] = useState(1);
  // const [showModal, setShowModal] = useState(true);
  const [context, setContext] = useState<TContext>({});

  const commonAnswers = {
    maleOrWomen: context.sex?.answer === 'Male' ? 'MEN' : 'WOMEN',
    yourDiet: context.yourDiet?.shortAnswer as 'vegan' | 'vegetarian' | 'flexatarian' | 'pescatarian',
  };

  const optionsArr = useMemo(() => [
    // ...generalQuestions({
    //   ...commonAnswers,
    //   ageWomen: context.ageWomen?.answer as string,
    // }),
    ...cartQuestions({
      ...commonAnswers,
      healthPriorChoices: context.healthPriorities?.choices,
    }),
  ], [context]);

  // console.log(context);
  return (
    <Context.Provider value={[context, setContext]}>
      <Survey currentPage={page}>

        {/* <ModalInfo
          showModal={showModal}
          toggleShowModal={() => setShowModal(!showModal)}
          content='Nice to meet you! Let’s take some time to get to know you better. It’ll only take 5 minutes!'
        /> */}

        {optionsArr.map((question, index) => (
          <SurveyQuestion
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

          </SurveyQuestion>
        ))}

      </Survey>
    </Context.Provider>
  );
};