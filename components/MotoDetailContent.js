"use client";
const MotoDetailContent = ({ value }) => {
  console.log(value.availableColor);
  return (
    <>
      <div className="flex justify-between gap-5 w-full text-right">
        <h4 className="text-grey">Main Ground</h4>
        <p className="text-black-100 font-semibold">{value.mainGround}</p>
      </div>
      <div className="flex justify-between gap-5 w-full text-right">
        <h4 className="text-grey">Advantages</h4>
        <p className="text-black-100 font-semibold">{value.advantage}</p>
      </div>
      <div className="flex justify-between gap-5 w-full text-right">
        <h4 className="text-grey">Performance</h4>
        <p className="text-black-100 font-semibold">{value.performance}</p>
      </div>
      <div className="flex justify-between gap-5 w-full text-right">
        <h4 className="text-grey">Displacement</h4>
        <p className="text-black-100 font-semibold">{value.displacement}</p>
      </div>
      <div className="flex justify-between gap-5 w-full text-right">
        <h4 className="text-grey">Transmission</h4>
        <p className="text-black-100 font-semibold">{value.transmission}</p>
      </div>
      <div className="flex justify-between gap-5 w-full text-right">
        <h4 className="text-grey">Swiched On</h4>
        <p className="text-black-100 font-semibold">{value.switchedOn}</p>
      </div>
      <div className="flex justify-between gap-5 w-full text-right">
        <h4 className="text-grey">Fuel Capacity</h4>
        <p className="text-black-100 font-semibold">{value.fuelCapacity}</p>
      </div>
      <div className="flex justify-between gap-5 w-full text-right">
        <h4 className="text-grey">Available Color</h4>
        {value.availableColor.map((color) => (
          <div
            className="w-4 h-4 rounded-full px-1 border border-black-100 border-solid"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </>
  );
};

export default MotoDetailContent;
