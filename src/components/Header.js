const Header = ({ reversePlayback, onChange }) => {
  return (
    <header>
      <h1>Soundboard</h1>
      <input
        type="checkbox"
        id="reverse"
        checked={reversePlayback}
        onChange={onChange}
      />{" "}
      <label htmlFor="reverse">Reverse playback</label>
      <div>
        <span id="speed-title">Speed:</span>
        <div className="radio">
          <input type="radio" name="playSpeed" value="0.25" id="playSpeed-1" />
          <label htmlFor="playSpeed-1">-0.25</label>
        </div>
        <div className="radio">
          <input type="radio" name="playSpeed" value="0.50" id="playSpeed-2" />
          <label htmlFor="playSpeed-2">-0.50</label>
        </div>
        <div className="radio">
          <input type="radio" name="playSpeed" value="0.75" id="playSpeed-3" />
          <label htmlFor="playSpeed-3">-0.75</label>
        </div>
        <div className="radio">
          <input
            type="radio"
            name="playSpeed"
            value="1"
            id="playSpeed-4"
            checked
          />
          <label htmlFor="playSpeed-4">0</label>
        </div>
        <div className="radio">
          <input type="radio" name="playSpeed" value="1.25" id="playSpeed-5" />
          <label htmlFor="playSpeed-5">+ 0.25</label>
        </div>
        <div className="radio">
          <input type="radio" name="playSpeed" value="1.50" id="playSpeed-6" />
          <label htmlFor="playSpeed-6">+ 0.50</label>
        </div>
        <div className="radio">
          <input type="radio" name="playSpeed" value="1.75" id="playSpeed-7" />
          <label htmlFor="playSpeed-7">+ 0.75</label>
        </div>
      </div>
    </header>
  );
};

export default Header;
