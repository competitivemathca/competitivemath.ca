import PropTypes from "prop-types";

export default function ContentPanel({ title, children, colour, ...props }) {
    return (
        <div
            className={
                "flex flex-col border-[2px] border-solid border-blue-800 rounded-2xl overflow-hidden shadow-xl " +
                colour
            }
        >
            <div className="bg-blue-800 w-full px-6 py-2">
                <h1 className="text-white text-lg">{title}</h1>
            </div>

            {/*Default tailwind classes applied; override className if needed*/}
            <div className="overflow-auto p-5" {...props}>
                {children}
            </div>
        </div>
    );
}

// Type validation for props
ContentPanel.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    colour: PropTypes.string,
};
