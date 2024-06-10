import PropTypes from "prop-types";

export default function Dots({ color }) {
  return (
    <div className={`h-6 w-6 rounded-full aspect-square bg-${color}-500`}>
    </div>
  );
}

Dots.propTypes = {
  color: PropTypes.string
}
