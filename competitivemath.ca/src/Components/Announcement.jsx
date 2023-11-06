export default function Announcement({
  imgSrc,
  username,
  date,
  pfp, // TODO: Instead of passing in a string source, we should pass in an image instead
  title,
  text,
}) {
  return (
    <div className="bg-blue-50 rounded-2xl m-6 p-6 md:flex flex-row">
      <div className="flex flex-col">
        <img
          className="w-[280px] aspect-square m-auto rounded-2xl object-cover"
          src={imgSrc}
          alt="Image"
        />
        <div className="flex justify-between m-auto mt-4 w-[280px]">
          <p className="text-xs overlfow-ellipsis">
            Posted by {username} <br /> {date}{" "}
          </p>
          <img className="w-[32px] h-[32px]" src={pfp} alt="Profile Pickture" />
        </div>
      </div>
      <div className="mt-4 md:mt-0 md:ml-6">
        <h1 className="text-xl font-bold md:text-3xl">{title}</h1>
        <div className="">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
