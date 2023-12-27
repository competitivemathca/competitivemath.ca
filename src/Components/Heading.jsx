export default function Heading({children, ...props}) {
    return (
        <div>
            <h1>{children}</h1>
            <hr className="border-t-2 border-gray-300 max-w-xs py-3" {...props}/>
        </div>
    )
}