import React, { useMemo, useState } from 'react';

import { ModalInfo, Navigation, Survey, SurveyQuestion } from 'components';

import { cartQuestions } from './cartQuestions';
import { generalQuestions } from './generalQuestions';
import { ICommonAnswers, TContext, TSetContext } from './types';

export const Context = React.createContext<[TContext, TSetContext]>([{}, () => undefined]);

export const SurveyContainer = () => {
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(true);
  const [context, setContext] = useState<TContext>({});

  const commonAnswers: ICommonAnswers = {
    maleOrWomen: context.sex?.answer === 'Male' ? 'MEN' : 'WOMEN',
    yourDiet: context.yourDiet?.shortAnswer as ICommonAnswers['yourDiet'],
    ageWomen: context.ageWomen?.answer as ICommonAnswers['ageWomen'],
  };

  const surveyQuestions = useMemo(() => [
    ...generalQuestions(commonAnswers),
    ...cartQuestions({
      ...commonAnswers,
      healthPriorChoices: context.healthPriorities?.choices,
    }),
  ], [context]);

  const isLastQuestion = page === surveyQuestions.length;

  return (
    <Context.Provider value={[context, setContext]}>
      <Survey
        currentPage={page}
        isLastQuestion={isLastQuestion}
      >

        <ModalInfo
          showModal={showModal}
          toggleShowModal={() => setShowModal(!showModal)}
          content='Nice to meet you! Let’s take some time to get to know you better. It’ll only take 5 minutes!'
        />

        {surveyQuestions.map((question, index) => (
          <SurveyQuestion
            key={question.name}
            question={question}
            activePage={page === index + 1}
            title={question.title || `Question ${index + 1}`}
          >

            <Navigation
              page={page}
              setPage={setPage}
              question={question}
              isLastQuestion={isLastQuestion}
              commonAnswers={commonAnswers}
            />

          </SurveyQuestion>
        ))}

      </Survey>
    </Context.Provider>
  );
};