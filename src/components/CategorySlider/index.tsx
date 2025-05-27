import CategoryHelpText from './categoryHelpText';
import Carousel from './Crausol';
import { propertyData } from './data';

const CatCraosel = () => {
  return (
        <div className="flex gap-8">
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
  )
}

export default CatCraosel;