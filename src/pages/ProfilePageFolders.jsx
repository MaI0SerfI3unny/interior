import { ProfilePageContainer } from "@/_components/ProfilePageContainer/ProfilePageContainer";
import { ProfileNavbar } from "@/_components/ProfileNavbar/ProfileNavbar";
import MainContainer from "../_components/MainContainer/MainContainer";
import { ProfileFolderListContainer } from "../_components/ProfileFolderListContainer/ProfileFolderListContainer";
import ProfileAllGenerationsContainer from "../_components/ProfileAllGenerationsContainer/ProfileAllGenerationsContainer";
import photo from "@/assets/profile/photo_folder.png";
import original from "../pictures/original.jpg";
import { useState } from "react";

const list_folder = [
  {
    title: "Кухня",
    photos: [
      {
        id: 1,
        result: photo,
        original,
        style: "Classic",
        prompt:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquam harum vero unde facilis, similique fugiat nam! Velit placeat nihil, rerum porro dicta aut accusamus quam dolorem magnam, sit iusto? Possimus, laboriosam veniam? Doloribus, delectus. Libero explicabo voluptatem totam doloremque recusandae voluptas facilis laudantium, itaque magnam, veniam dolor est placeat, odio culpa omnis molestiae incidunt nobis porro! Molestias, quo voluptatem? Aliquam adipisci nam deserunt ad, maxime nemo impedit, veniam pariatur molestiae provident, excepturi odit culpa aliquid. Quod fuga, sed exercitationem vero nam corporis quidem omnis harum ipsa ipsum eius adipisci! Earum autem natus repudiandae rerum ad voluptatem maiores, blanditiis vero adipisci repellendus pariatur voluptates dolore dicta magni, recusandae, nobis modi aliquid! Non provident maiores suscipit itaque molestias possimus magni consequatur. Similique quos inventore aut natus voluptates iste eum eaque perspiciatis? Cupiditate dicta quaerat suscipit, neque blanditiis aspernatur voluptates vero, non omnis tempore soluta deleniti. Itaque autem rerum maxime. Facere, eos? Architecto, dolorem unde! Accusamus repellat fugiat maxime, repudiandae commodi unde. Quam nostrum, sint possimus, voluptates praesentium corporis, eligendi quibusdam obcaecati dolore vero minima enim atque rerum voluptatum perspiciatis non dolorum!",
        room: "Kitchen",
      },
      {
        id: 2,
        result: photo,
        original,
        style: "Classic",
        prompt: "ABVGD",
        room: "Kitchen",
      },
      {
        id: 3,
        result: photo,
        original,
        style: "Classic",
        prompt: "ABVGD",
        room: "Kitchen",
      },
      {
        id: 4,
        result: photo,
        original,
        style: "Classic",
        prompt: "ABVGD",
        room: "Kitchen",
      },
      {
        id: 5,
        result: photo,
        original,
        style: "Classic",
        prompt: "ABVGD",
        room: "Kitchen",
      },
    ],
  },
  {
    title: "Кухня",
    photos: [
      {
        id: 6,
        result: photo,
        original,
        style: "Classic",
        prompt: "ABVGD",
        room: "Kitchen",
      },
      {
        id: 7,
        result: photo,
        original,
        style: "Classic",
        prompt: "ABVGD",
        room: "Kitchen",
      },
    ],
  },
  {
    title: "Кухня",
    photos: [
      {
        id: 8,
        result: photo,
        original,
        style: "Classic",
        prompt: "ABVGD",
        room: "Kitchen",
      },
      {
        id: 9,
        result: photo,
        original,
        style: "Classic",
        prompt: "ABVGD",
        room: "Kitchen",
      },
    ],
  },
  {
    title: "Кухня",
    photos: [
      {
        id: 10,
        result: photo,
        original,
        style: "Classic",
        prompt: "ABVGD",
        room: "Kitchen",
      },
    ],
  },
  {
    title: "Кухня",
    photos: [
      {
        id: 11,
        result: photo,
        original,
        style: "Classic",
        prompt: "Very long text",
        room: "Kitchen",
      },
      {
        id: 12,
        result: photo,
        original,
        style: "Classic",
        prompt: "ABVGD",
        room: "Kitchen",
      },
      {
        id: 13,
        result: photo,
        original,
        style: "Classic",
        prompt: "ABVGD",
        room: "Kitchen",
      },
      {
        id: 14,
        result: photo,
        original,
        style: "Classic",
        prompt: "ABVGD",
        room: "Kitchen",
      },
      {
        id: 15,
        result: photo,
        original,
        style: "Classic",
        prompt: "ABVGD",
        room: "Kitchen",
      },
    ],
  },
];

export const ProfilePageFolders = () => {
  const [folders, setFolders] = useState(list_folder);

  function handleDeletePhoto(photoId) {
    const updatedFolders = folders
      .map(folder => {
        const newPhotos = folder.photos.filter(photo => photo.id !== photoId);

        if (newPhotos.length === folder.photos.length) return folder;

        return { ...folder, photos: newPhotos };
      })
      .filter(folder => folder.photos.length > 0);

    setFolders(updatedFolders);
  }

  console.log(folders);

  return (
    <ProfilePageContainer>
      <MainContainer>
        <ProfileNavbar />
        {!!folders.length && (
          <>
            <ProfileFolderListContainer folders={folders} />
            <ProfileAllGenerationsContainer
              folders={folders}
              handleDeletePhoto={handleDeletePhoto}
            />
          </>
        )}

        {!folders.length && (
          <p>Ви ще не зберігли жодного результату до каталогу</p>
        )}
      </MainContainer>
    </ProfilePageContainer>
  );
};
