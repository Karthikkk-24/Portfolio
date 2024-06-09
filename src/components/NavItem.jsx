import PropTypes from "prop-types";

export default function NavItem({ title, activeStatus }) {
    return (
        <a
            href=""
            className={`${activeStatus == 'true' ? 'text-secondary font-semibold' : 'text-slate-600 font-normal'} after:w-0 after:hover:w-full relative after:absolute after:left-0 after:bottom-0 after:bg-black after:h-0.5 transition-all after:transition-all`}
        >
            {title}
        </a>
    );
}

NavItem.propTypes = {
    title: PropTypes.string,
    activeStatus: PropTypes.string,
}