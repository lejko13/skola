import React from "react";

const Inputik = ({ textik, tuu, name, value, onChange }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <span className="text-[13px]">{textik}*</span>

      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={tuu}
        className="pl-5 placeholder:text-sivaTmava font-[400] bg-pozadei h-14 w-full rounded-velky outline-none focus:outline-none focus:ring-0 focus:border-none border-none"
        type="text"
      />
    </div>
  );
};

export default Inputik;