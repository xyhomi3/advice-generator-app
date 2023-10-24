import PropTypes from "prop-types";

export default function AdviceDisplay({ advice }) {
  return (
    <div className="advice-display">
      <q>{advice}</q>
    </div>
  );
}

AdviceDisplay.propTypes = {
  advice: PropTypes.string.isRequired,
};
