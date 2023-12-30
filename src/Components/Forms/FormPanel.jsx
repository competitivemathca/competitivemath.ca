export default function FormPanel({ title, children, onSubmit}) {
  return (
    <div
      className={
        "flex flex-col border-[2px] border-solid border-blue-800 rounded-2xl overflow-hidden shadow-xl w-[30rem]"
      }
    >
      <div className="bg-blue-800 w-full px-6 py-2">
        <h1 className="text-white text-2xl text-center">{title}</h1>
      </div>
      <form className="flex flex-col m-5 gap-3" onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
}
