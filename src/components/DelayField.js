import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const DelayField = ({ enableDelay, onChange }) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox />}
        label="Delay"
        checked={enableDelay}
        onChange={onChange}
      />
    </FormGroup>
  );
};

export default DelayField;
