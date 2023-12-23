export default function TablePanel({ title, children, colour, ...props }) {
    return (
        <table className={"w-full overflow-auto shadow-xl " + colour}>
            {children}
        </table>
    );
}
