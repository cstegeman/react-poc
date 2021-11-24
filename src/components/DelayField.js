const DelayField = ({ enableDelay, onChange }) => {
  return (
    <>
      <input type="checkbox" id="delay" checked={enableDelay} onChange={onChange} />{' '}
      <label htmlFor="delay">Delay</label>
    </>
  );
};

export default DelayField;
