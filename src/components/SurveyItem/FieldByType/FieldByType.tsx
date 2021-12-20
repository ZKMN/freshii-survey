import { Input, Radio } from 'antd';
import { useContext } from 'react';

import { Context, TQuestion } from 'SurveyContainer';

const { Group } = Radio;

interface IFieldByType {
  question: TQuestion;
}

export const FieldByType = ({ question }: IFieldByType) => {
  const [context, setContext] = useContext(Context);

  switch(question.type) {
    case('text'): {
      return (
        <Input
          placeholder='Enter information'
          value={context[question.name]?.answer}
          onChange={({ target }) => setContext({
            ...context,
            [question.name]: {
              name: question.name,
              answer: target.value,
              question: question.question,
              vitamins: question.vitamins,
            },
          })}
        />
      );
    }
    case('radio'): {
      return (
        <Group value={context[question.name]?.answer}>
          {question.variants?.map(variant => (
            <Radio
              key={variant.title}
              value={variant.title}
              onChange={({ target }) => setContext({
                ...context,
                [question.name]: {
                  name: question.name,
                  answer: target.value,
                  vitamins: target.value === variant.title ? variant.vitamins : undefined,
                  question: question.question,
                },
              })}
            >
              {variant.title}
            </Radio>
          ))}
        </Group>
      );
    }

    default:
      return null;
  }

};