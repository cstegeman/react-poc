import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const ReverseField = ({ reversePlayback, onChange }) => {
  return (
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Reverse playback" checked={reversePlayback} onChange={onChange} />
      </FormGroup>
  );
};

export default ReverseField;
