import { Grid } from '@mui/material';

const options = [
  {
    name: 'playSpeed',
    value: 0.25,
    label: '0.25'
  },
  {
    name: 'playSpeed',
    value: 0.5,
    label: '0.50'
  },
  {
    name: 'playSpeed',
    value: 0.75,
    label: '0.75'
  },
  {
    name: 'playSpeed',
    value: 1,
    label: 'Normal'
  },
  {
    name: 'playSpeed',
    value: 1.25,
    label: '1.25'
  },
  {
    name: 'playSpeed',
    value: 1.5,
    label: '1.50'
  },
  {
    name: 'playSpeed',
    value: 1.75,
    label: '1.75'
  }
];

const SpeedSelection = ({ playSpeed, onChange }) => {
  return (
    <Grid container role="group" aria-labelledby="speed-title">
      <Grid item xs="auto" id="speed-title">
        Speed:
      </Grid>
      <Grid item xs="auto">
        <Grid container>
          {options.map((option, index) => {
            const id = `${option.name}-${index}`;
            return (
              <Grid item xs="auto" key={index}>
                <input
                  type="radio"
                  name={option.name}
                  value={option.value}
                  id={id}
                  checked={option.value === playSpeed}
                  onChange={onChange}
                />{' '}
                <label htmlFor={id}>{option.label}</label>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SpeedSelection;
