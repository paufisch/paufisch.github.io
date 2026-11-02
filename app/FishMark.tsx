// The site mark (same geometry as app/icon.svg), inline so that globals.css can
// animate it: it draws itself on load and swims forward and blinks on hover. A plain
// link rather than next/link, so a click reloads the page and replays the drawing.
export default function FishMark() {
  return (
    <a href="/" aria-label="Home" className="fish-link">
      <svg className="fish" viewBox="4 4 56 56" aria-hidden="true" focusable="false">
        <g className="fish__body">
          <path className="fish__upper" pathLength={1} d="M9 32C17 8 39 8 55 45" />
          <path className="fish__lower" pathLength={1} d="M9 32C17 56 39 56 55 19" />
          <g className="fish__lid">
            <circle className="fish__eye" cx="22" cy="26" r="3.6" />
          </g>
        </g>
      </svg>
    </a>
  );
}
