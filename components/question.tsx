import React, { ChangeEventHandler, FormEvent, useState } from 'react';
import { Title } from './title';
import { Type } from './type';
import { Button } from './button';
import { Input } from './input';
import { useMascot } from '@/contexts/mascot';
import { useQuestion } from '@/contexts/question';
import { Question as QuestionType } from '@/types/question';

interface QuestionProps {
  data: QuestionType;
}

export const Question = ({ data }: QuestionProps) => {
  const { damage } = useMascot();
  const { incrementAnswersCounter, openMisModal } = useQuestion();
  const [fieldsValues, setFieldsValues] = useState<Record<number, string>>({});
  const [isDisable, setIsDisable] = useState(false);
  const removedRequestAnswer = data.question.split('request_answer');

  const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
    const {
      target: { name, value },
    } = event;

    setFieldsValues(s => ({
      ...s,
      [Number(name)]: value,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (isDisable) return;
    const allAnswersIsCorrect = data.correctAnswers.every(
      (answer, index) => answer.trim() === fieldsValues[index].trim(),
    );

    if (allAnswersIsCorrect) {
      incrementAnswersCounter();
      setIsDisable(true);
    } else {
      openMisModal();
      damage();
    }
  };

  return (
    <form
      className='flex flex-col gap-6 items-center mb-20'
      onSubmit={handleSubmit}
    >
      <Title>
        {removedRequestAnswer.map((text, index) =>
          index < removedRequestAnswer.length - 1 ? (
            <>
              {text}{' '}
              <Input
                required
                className='h-fit py-2'
                name={String(index)}
                onChange={handleChange}
                value={fieldsValues[index] || ''}
              />
            </>
          ) : (
            text
          ),
        )}
      </Title>
      <Button
        disabled={isDisable}
        className={isDisable ? 'btn-disabled opacity-50' : ''}
        type='submit'
      >
        Validar resposta
      </Button>
    </form>
  );
};
