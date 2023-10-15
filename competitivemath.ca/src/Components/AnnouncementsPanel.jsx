export default function AnnouncementsPanel() {
    return (
        <>
            <div className="flex flex-col w-9/12 h-[800px] bg-blue-100 border-[2px] border-solid border-blue-800 rounded-2xl overflow-x-hidden">
                <h1 className=" bg-blue-800 w-full h-20 p-6 text-white text-xl">Important Announcements</h1>
                <div className="flex-grow p-6 overflow-auto">
                    <div className="h-[9000px] bg-blue-50"></div>
                </div>
            </div>
        </>
    )
}
