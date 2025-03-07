import MultiSelectAnswer from './multi-select-answer/MultiSelectAnswer';
import TextAnswer from './TextAnswer';
import YesNoAnswer from './yes-no-answer/YesNoAnswer';

const AnswerInput = ({ question, answer, setAnswer }) => {
  const answerDictionary = {
    ['multi-select']: (
      <MultiSelectAnswer defaultAnswer={answer} options={question.options} setAnswer={setAnswer} />
    ),
    ['text']: <TextAnswer answer={answer} setAnswer={setAnswer} />,
    ['yes-no']: <YesNoAnswer answer={answer} setAnswer={setAnswer} />,
  };

  return answerDictionary[question.type];
};

export default AnswerInput;
