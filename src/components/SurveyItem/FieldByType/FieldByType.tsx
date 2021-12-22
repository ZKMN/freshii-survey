import clsx from 'clsx';
import { useContext } from 'react';
import { Button, Col, Input, Radio, Row } from 'antd';

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
                  question: question.question,
                  ...(variant?.shortAnswer && { shortAnswer: variant?.shortAnswer }),
                  ...(variant?.vitamins && target.value === variant.title && { vitamins: variant?.vitamins }),
                },
              })}
            >
              {variant.title}
            </Radio>
          ))}
        </Group>
      );
    }
    case('buttons'): {
      return (
        <Row gutter={20}>
          {question.variants?.map(variant => (
            <Col key={variant.title}>
              <Button className={clsx(context[question.name]?.answer === variant.title && 'active')} size='large' onClick={() => setContext({
                ...context,
                [question.name]: {
                  name: question.name,
                  answer: variant.title,
                  question: question.question,
                  ...(variant?.vitamins && { vitamins: variant?.vitamins }),
                },
              })}
              >
                {variant.title}
              </Button>
            </Col>
          ) )}

        </Row>
      );
    }

    default:
      return null;
  }

};