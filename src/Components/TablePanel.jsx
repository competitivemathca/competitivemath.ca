export default function TablePanel({ heading, content }) {
  return (
    <div className="border-[2px] border-solid border-blue-800 rounded-2xl overflow-x-auto scroll-ml-4 w-full shadow-xl">
      <table className="w-full overflow-x-auto">
        <thead className="bg-blue-800 w-full px-6 py-2 text-white h-11 hover:cursor-default">
          {heading}
        </thead>
        <tbody>
          {content}
        </tbody>
      </table>
    </div>
  );
}
