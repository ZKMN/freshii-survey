import clsx from 'clsx';
import { useContext } from 'react';
import { Button, Checkbox, Input, Radio, Row, Col } from 'antd';

import { Context, TQuestion } from 'SurveyContainer';

const { Group } = Radio;

interface IFieldByType {
  question: TQuestion;
}

export const FieldByType = ({ question }: IFieldByType) => {
  const [context, setContext] = useContext(Context);

  switch(question.type) {
    case('text'):
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
              vitaminsAdd: question.vitaminsAdd,
            },
          })}
        />
      );
    case('radio'):
      return (
        <Group value={context[question.name]?.answer}>
          <Row>
            {question.variants?.map(variant => (
              <Col key={variant.title} xs={24} md={question.colsMdSpan || 24}>
                <Radio
                  value={variant.title}
                  onChange={({ target }) => setContext({
                    ...context,
                    [question.name]: {
                      name: question.name,
                      answer: target.value,
                      question: question.question,
                      ...(variant?.shortAnswer && { shortAnswer: variant?.shortAnswer }),
                      ...(variant?.infoForModal && { infoForModal: variant?.infoForModal }),
                      ...(variant?.vitaminsAdd && target.value === variant.title &&
                            { vitaminsAdd: variant?.vitaminsAdd }),
                      ...(variant?.vitaminsRemove &&
                            target.value === variant.title && { vitaminsRemove: variant?.vitaminsRemove }),
                    },
                  })}
                >
                  {variant.title}
                </Radio>
              </Col>
            ))}
          </Row>
        </Group>
      );
    case('buttons'):
      return (
        <Row gutter={20}>
          {question.variants?.map(variant => (
            <Col key={variant.title}>
              <Button
                size='large'
                className={clsx(context[question.name]?.answer === variant.title && 'active')}
                onClick={() => setContext({
                  ...context,
                  [question.name]: {
                    name: question.name,
                    answer: variant.title,
                    question: question.question,
                    ...(variant?.infoForModal && { infoForModal: variant?.infoForModal }),
                    ...(variant?.vitaminsAdd && { vitaminsAdd: variant?.vitaminsAdd }),
                    ...(variant?.vitaminsRemove && { vitaminsRemove: variant?.vitaminsRemove }),
                  },
                })}
              >
                {variant.title}
              </Button>
            </Col>
          ) )}

        </Row>
      );
    case('checkboxes'):
      return (
        <Row>
          <Col xs={24} md={question.colsMdSpan ? 24 : 16}>
            <Row gutter={20}>
              {question.variants?.map(variant => (
                <Col xs={24} md={question.colsMdSpan || 12} key={variant.title}>
                  <Checkbox
                    checked={!!context[question.name]?.choices?.find(choice => choice.title === variant.title)}
                    onChange={({ target }) => {
                      const choices = context[question.name]?.choices || [];

                      const findIndex = choices.findIndex(choice => choice.title === variant.title);

                      if(findIndex > -1 && !target.checked) {
                        choices.splice(findIndex, 1);
                      } else {
                        choices.push({
                          title: variant.title,
                          ...(variant?.infoForModal && {
                            infoForModal: variant?.infoForModal,
                            isShowInfo: true,
                          }),
                          ...(variant?.vitaminsAdd && { vitaminsAdd: variant?.vitaminsAdd }),
                          ...(variant?.vitaminsRemove && { vitaminsRemove: variant?.vitaminsRemove }),
                          ...(variant?.additionalQuestions && { additionalQuestions: variant?.additionalQuestions }),
                        });
                      }

                      setContext({
                        ...context,
                        [question.name]: {
                          name: question.name,
                          question: question.question,
                          ...(choices.length && { choices }),
                        },
                      });
                    }}
                  >
                    {variant.title}
                  </Checkbox>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      );

    default:
      return null;
  }

};