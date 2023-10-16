import Announcement from "./Announcement"

export default function ContentPanel({title}) {
    return (
        <div className="h-full flex flex-col bg-blue-100 border-[2px] border-solid border-blue-800 rounded-2xl overflow-x-hidden drop-shadow-2xl">
            <div className="bg-blue-800 w-full h-20 text-white text-xl p-6">
                <h1 className="text-white text-xl">{title}</h1>
            </div>
            <div className="grid place-items-center overflow-auto">
                <Announcement imgSrc="https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" username="Admin" date="Sept 2, 2023 - 11:09 PM" 
                pfp="../images/Default PFP.svg" title="Welcome to CompetitiveMath.ca" text="Lol"/>
                <Announcement />
                <Announcement />
                <Announcement />
                <Announcement />
                <Announcement />
                <Announcement />
                <Announcement />
                <Announcement />
                <Announcement />
                <Announcement />
                <Announcement />
                <Announcement />
                <Announcement />
                <Announcement />
            </div>
        </div>
    )
}
