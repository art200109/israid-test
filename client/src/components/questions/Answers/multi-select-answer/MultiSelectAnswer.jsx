import { Grid } from '@mui/material';
import { useState } from 'react';
import SelectOption from './SelectOption';

const MultiSelectAnswer = ({ defaultAnswer, setAnswer, options }) => {
  const [selectedOptions, setSelectedOptions] = useState(defaultAnswer || []);

  const onSelect = (option) => {
    let newSelected;

    if (selectedOptions.includes(option)) {
      newSelected = [...selectedOptions.filter((x) => x !== option)];
      setSelectedOptions(newSelected);
    } else {
      newSelected = [...selectedOptions, option];
      setSelectedOptions(newSelected);
    }

    newSelected.length ? setAnswer(newSelected) : setAnswer(null);
  };

  return (
    <Grid container spacing={2} padding='20px'>
      {options.map((option) => (
        <Grid key={option} item xs={6}>
          <SelectOption
            option={option}
            isSelected={selectedOptions.includes(option)}
            onClick={() => onSelect(option)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MultiSelectAnswer;
