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
    <div className="flex flex--wrap gap--3" role="group" aria-labelledby="speed-title">
      <span className="grow--1" id="speed-title">
        Speed:
      </span>
      <div className="flex flex--wrap gap--3">
        {options.map((option, index) => {
          const id = `${option.name}-${index}`;
          return (
            <div key={index}>
              <input
                type="radio"
                name={option.name}
                value={option.value}
                id={id}
                checked={option.value === playSpeed}
                onChange={onChange}
              />{' '}
              <label htmlFor={id}>{option.label}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpeedSelection;
