import PropTypes from 'prop-types';

export default function Dots({ color }) {
    const colorClass = {
        red: 'bg-red-500',
        green: 'bg-green-500',
        amber: 'bg-amber-500',
    };
    const colorHoverClass = {
        red: 'hover:bg-red-600',
        green: 'hover:bg-green-600',
        amber: 'hover:bg-amber-600',
    }
    return (
        <div
            className={`h-6 w-6 rounded-full aspect-square cursor-pointer ${colorClass[color]} ${colorHoverClass[color]}`}
        ></div>
    );
}

Dots.propTypes = {
    color: PropTypes.string,
};
