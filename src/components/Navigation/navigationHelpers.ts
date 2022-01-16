import { ICommonAnswers, TContext, TQuestionAnswer } from 'SurveyContainer';

export const getSurveyVitamins = (context: TContext, yourDiet: ICommonAnswers['yourDiet']) => {
  const surveyResult = JSON.parse(sessionStorage.getItem('surveyResult') as string);
  const surveyResultValues: TQuestionAnswer[] = Object.values(surveyResult || context);

  const handlePushUniqVitamin = (arrForPush: string[]) => (pushingVitamin: string) => {
    const omegaOrOil = yourDiet === 'vegan' || yourDiet === 'vegetarian' ? 'OMEGA (VEGAN EPA-DHA)' : 'FISH OIL 1200mg, AM';
    const vitamin = pushingVitamin === 'OMEGA (VEGAN EPA-DHA) OR FISH OIL 1200mg, AM' ? omegaOrOil : pushingVitamin;

    if(!arrForPush.includes(vitamin)) {
      arrForPush.push(vitamin);
    }
  };

  const surveyUniqVitamins = surveyResultValues.reduce((acc, answer) => {
    const pushInAdd = handlePushUniqVitamin(acc.addedVitamins);
    const pushInRemove = handlePushUniqVitamin(acc.removedVitamins);

    answer.choices?.forEach(choice => {
      choice.vitaminsAdd?.forEach(pushInAdd);

      choice.vitaminsRemove?.forEach(pushInRemove);
    });

    answer.vitaminsAdd?.forEach(pushInAdd);

    answer.vitaminsRemove?.forEach(pushInRemove);

    return acc;
  }, {
    addedVitamins: [],
    removedVitamins: [],
  });

  surveyUniqVitamins.addedVitamins.sort();
  surveyUniqVitamins.removedVitamins.sort();

  const findInRemovedVitamins = (addVitamin: string) => !surveyUniqVitamins.removedVitamins.find(removeVitamin => {

    if(addVitamin.includes(removeVitamin)) {
      return addVitamin;
    }

  });

  const addedVitamins: string[] = surveyUniqVitamins.addedVitamins.filter(findInRemovedVitamins);

  const preparedVitamins = addedVitamins.map(vitamin => {
    const vitaminObj = {
      am: !!vitamin.endsWith('AM') || !!vitamin.endsWith('AM + PM'),
      pm: !!vitamin.endsWith('PM') || !!vitamin.endsWith('AM + PM'),
      name: vitamin.replace('+2 ', '').replace(', AM + PM', '').replace(', AM', '').replace(', PM', ''),
      quantity: vitamin.startsWith('+2') ? 2 : 1,
    };

    return vitaminObj;
  });

  return {
    preparedVitamins,
    surveyUniqVitamins,
  };
};
