import Announcement from "./Announcement"

export default function ContentPanel({title, children, colour, ...props}) {
    return (
        <div className={"flex flex-col border-[2px] border-solid border-blue-800 rounded-2xl overflow-x-hidden shadow-xl mb-12 " + colour}>
            <div className="bg-blue-800 w-full px-6 py-2">
                <h1 className="text-white text-lg">{title}</h1>
            </div>
            <div {...props}>
                {children}
            </div>
        </div>
    )
}
