export default function Announcement({ imgSrc, username, date, pfp, title, text }) {
    return (
        <div className="grid grid-cols-3 grid-rows-4 gap-5 bg-blue-50 w-11/12 h-96 rounded-2xl my-7 justify-evenly">
            <div className="row-span-3">
                <img className="relative top-[25px] m-auto w-[325px] h-[250px] object-cover" src={imgSrc} alt="Image" />
            </div>
            <div className="row-span-1 col-start-1 flex justify-evenly">
                <h1>Posted by {username} <br /> {date} </h1>
                <img className="w-[50px] h-[50px]" src={pfp} alt="Profile Pickture"/>
            </div>
            <div className="row-span-1 col-span-2 row-start-1 col-start-2">
                <h1 className="relative top-1/4 m-auto text-4xl font-bold">{title}</h1>
            </div>
            <div className="row-span-3 col-span-2 row-start-2 col-start-2 mr-9">
                {text}
            </div>

        </div>
    )
}
