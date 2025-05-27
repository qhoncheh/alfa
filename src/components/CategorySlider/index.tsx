import CategoryHelpText from './categoryText';
import Carousel from './Crausol';
import { propertyData } from './data';

const CatCraosel = () => {
  return (
    <div className="flex gap-8 border-2  border-dashed border-[#7575FE]">
      <CategoryHelpText />
      <Carousel
        items={propertyData}
        showNavigation={true}
        showDots={true}
        autoPlay={false}
        autoPlayInterval={5000}
        className="mb-12"
      />
    </div>
  );
}

export default CatCraosel;