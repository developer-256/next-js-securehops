import GridCard from "./gridCard";
import { Data } from "./cardData";

function Grid() {
  const listItems = Data.map((Data) => {
    return (
      <GridCard
        key={Data.id}
        styles={Data.styles}
        logo={Data.logo}
        heading={Data.heading}
        paragraph={Data.content}
        paragraph2={Data.content2}
      />
    );
  });

  // grid-cols-24 is a custom function in index.css
  return (
    <div className="bg-newGray px-3 md:px-12 py-[100px]">
      <div className="flex flex-col items-center pb-[40px] pt-5">
        <h1 className="text-newGreen text-center font-bold text-[40px]">
          Our Services
        </h1>
        <p className="max-w-[583px] text-center pt-2 leading-5 text-regularText">
          We have the expertise to ensure that your network infrastructure is
          secure, efficient, and ready to meet the challenges of the future.
        </p>
      </div>

      <div className="grid overflow-x-scroll no-scrollbar grid-flow-col md:grid-flow-dense gridCols2 gridCols24 lg:grid-rows-3 gap-2 md:gap-4">
        {listItems}
      </div>
    </div>
  );
}

export default Grid;
