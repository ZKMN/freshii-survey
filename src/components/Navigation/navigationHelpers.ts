import { ICommonAnswers, TContext, TQuestionAnswer } from 'SurveyContainer';

export const getSurveyVitamins = (context: TContext, yourDiet: ICommonAnswers['yourDiet']) => {
  const surveyResult = JSON.parse(localStorage.getItem('surveyResult') as string);
  const surveyResultValues: TQuestionAnswer[] = Object.values(surveyResult || context);

  const handlePush = (arrForPush: string[], vitam: string) => {
    const omegaOrOil = yourDiet === 'vegan' || yourDiet === 'vegetarian' ? 'OMEGA (VEGAN EPA-DHA)' : 'FISH OIL 1200mg, AM';
    const vitamin = vitam === 'OMEGA (VEGAN EPA-DHA) OR FISH OIL 1200mg, AM' ? omegaOrOil : vitam;

    if(!arrForPush.includes(vitamin)) {
      arrForPush.push(vitamin);
    }
  };

  const surveyResultVitamins = surveyResultValues.reduce((acc, answer) => {

    answer.choices?.forEach(choice => {
      choice.vitaminsAdd?.forEach(addVitamin => {
        handlePush(acc.addVitamins, addVitamin);
      });

      choice.vitaminsRemove?.forEach(removeVitamin => {
        handlePush(acc.removeVitamins, removeVitamin);
      });
    });

    answer.vitaminsAdd?.forEach(addVitamin => {
      handlePush(acc.addVitamins, addVitamin);
    });

    answer.vitaminsRemove?.forEach(removeVitamin => {
      handlePush(acc.removeVitamins, removeVitamin);
    });

    return acc;
  }, {
    addVitamins: [],
    removeVitamins: [],
  });

  console.log(surveyResultVitamins);
};
