import { ReactComponent as CloseIcon } from "../../svg/cross.svg";
import SaveResultButton from "../GeneratingAnswer/FooterAnswer/SaveResultButton/SaveResultButton";
import AddRoomContainer from "../AddRoomButton/AddRoomContainer";
import AddRoomCard from "../AddRoomCard/AddRoomCard";
import { AddCollectionModalStyles } from "./AddCollectionModalStyles.styled";
import catKitchen from "../../pictures/cat.jpeg";
import catBedroom from "../../pictures/cat3.jpg";
import catBathroom from "../../pictures/cat10.jpeg";
import { useTranslation } from "react-i18next";

const collection = [
  {
    title: "Кухня",
    count: 1,
    image: catKitchen,
  },
  { title: "Спальня", count: 2, image: catBedroom },
  { title: "Ванна", count: 5, image: catBathroom },
];

const AddCollectionModal = ({ toggleModal }) => {
  const { t } = useTranslation();
  return (
    <AddCollectionModalStyles>
      <button className="close-btn" onClick={() => toggleModal(false)}>
        <CloseIcon width={24} height={24} />
      </button>
      <h1>{t("modal.title")}</h1>
      <AddRoomContainer />

      <ul className="rooms-list">
        {collection.map(item => (
          <AddRoomCard key={item.title} roomInfo={item} />
        ))}
      </ul>
      <SaveResultButton pdS={148} />
    </AddCollectionModalStyles>
  );
};

export default AddCollectionModal;
