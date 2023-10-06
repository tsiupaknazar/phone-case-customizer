import { useCustomization } from "../context/Customization";

const Configurator = () => {
  const {
    caseColors,
    caseColor,
    setCaseColor,
    caseImages,
    caseImage,
    setCaseImage
  } = useCustomization();

  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">Case color</div>
        <div className="configurator__section__values">
          {caseColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === caseColor.color ? "item--active" : ""
              }`}
              onClick={() => setCaseColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="configurator__section">
        <div className="configurator__section__title">Case image</div>
        <div className="configurator__section__values">
          {caseImages.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === caseImage.url ? "item--active" : ""
              }`}
              onClick={() => setCaseImage(item)}
            >
              <div
                className="item__dot">
                <img src={item.url} alt={item.alt} style={{width: 40}} />
              </div>
              <div className="item__label">{item.alt}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Configurator;