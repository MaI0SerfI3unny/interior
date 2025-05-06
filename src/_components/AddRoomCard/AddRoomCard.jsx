import { AddRoomCardStyles } from "./AddRoomCardStyles.styled";
import { getEndOfWord } from "../../assets/functions/getEndOfWord";
import { useTranslation } from "react-i18next";

const AddRoomCard = ({ roomInfo }) => {
  const { t } = useTranslation();
  const { title, image, count } = roomInfo;
  const generationKey = `modal.${getEndOfWord(count)}`;

  return (
    <AddRoomCardStyles>
      <img src={image} alt="cat" />
      <div className="text-container">
        <h2>{title}</h2>
        <p>
          {count} {t(generationKey)}
        </p>
      </div>
    </AddRoomCardStyles>
  );
};

export default AddRoomCard;
