import BE from "../../../public/img/Behance.svg";
function Sidbar() {
  return (
    <div className="flex gap-3 py-3 border-b border-[#e8e8e8] px-3 lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="currentColor"
        className="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
      <img src={BE} alt="" />
    </div>
  );
}

export default Sidbar;
