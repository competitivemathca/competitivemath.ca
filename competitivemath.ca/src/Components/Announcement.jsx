export default function Announcement({ imgSrc, username, date, pfp, title, text }) {
    return (
        <div className="flex flex-row justify-between gap-6 bg-blue-50 w-11/12 rounded-2xl my-4 py-12 px-12">
            <div className="flex flex-col">
                <img className="min-w-[250px] h-[250px]" src={imgSrc} alt="Image" />
                <div className="flex flex-row justify-between gap-3 mt-6">
                    <p className="text-base"> Posted by {username} <br/> {date} </p>
                    <img className="w-[50px] h-[50px]" src={pfp} alt="Profile Pickture"/>
                </div>
            </div>

            <div className="pl-6 shrink">
                <h1 className="text-3xl font-bold">{title}</h1>
                <div className="pt-6">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}
