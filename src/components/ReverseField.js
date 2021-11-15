const ReverseField = ({ reversePlayback, onChange }) => {
  return (
    <>
      <input
        type="checkbox"
        id="reverse"
        checked={reversePlayback}
        onChange={onChange}
      />{" "}
      <label htmlFor="reverse">Reverse playback</label>
    </>
  );
};

export default ReverseField;
