import original from "../../pictures/original.jpg";
import result from "../../pictures/result-image.jpg";
import { createSlice } from "@reduxjs/toolkit";
import foldersHandlers from "./generationFoldersHandlers";

const initialState = {
  folders: [
    // {
    //   id: 1,
    //   title: "Kitchen",
    //   photos: [
    //     {
    //       id: 1,
    //       result,
    //       original,
    //       style: "Classic",
    //       prompt:
    //         " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquam harum vero unde facilis, similique fugiat nam! Velit placeat nihil, rerum porro dicta aut accusamus quam dolorem magnam, sit iusto? Possimus, laboriosam veniam? Doloribus, delectus. Libero explicabo voluptatem totam doloremque recusandae voluptas facilis laudantium, itaque magnam, veniam dolor est placeat, odio culpa omnis molestiae incidunt nobis porro! Molestias, quo voluptatem? Aliquam adipisci nam deserunt ad, maxime nemo impedit, veniam pariatur molestiae provident, excepturi odit culpa aliquid. Quod fuga, sed exercitationem vero nam corporis quidem omnis harum ipsa ipsum eius adipisci! Earum autem natus repudiandae rerum ad voluptatem maiores, blanditiis vero adipisci repellendus pariatur voluptates dolore dicta magni, recusandae, nobis modi aliquid! Non provident maiores suscipit itaque molestias possimus magni consequatur. Similique quos inventore aut natus voluptates iste eum eaque perspiciatis? Cupiditate dicta quaerat suscipit, neque blanditiis aspernatur voluptates vero, non omnis tempore soluta deleniti. Itaque autem rerum maxime. Facere, eos? Architecto, dolorem unde! Accusamus repellat fugiat maxime, repudiandae commodi unde. Quam nostrum, sint possimus, voluptates praesentium corporis, eligendi quibusdam obcaecati dolore vero minima enim atque rerum voluptatum perspiciatis non dolorum!",
    //       room: "Kitchen",
    //     },
    //     {
    //       id: 2,
    //       result,
    //       original,
    //       style: "Classic",
    //       prompt: "ABVGD",
    //       room: "Kitchen",
    //     },
    //     {
    //       id: 3,
    //       result,
    //       original,
    //       style: "Classic",
    //       prompt: "ABVGD",
    //       room: "Kitchen",
    //     },
    //     {
    //       id: 4,
    //       result,
    //       original,
    //       style: "Classic",
    //       prompt: "ABVGD",
    //       room: "Kitchen",
    //     },
    //     {
    //       id: 5,
    //       result,
    //       original,
    //       style: "Classic",
    //       prompt: "ABVGD",
    //       room: "Kitchen",
    //     },
    //   ],
    // },
    // {
    //   id: 2,
    //   title: "Bedroom",
    //   photos: [
    //     {
    //       id: 6,
    //       result,
    //       original,
    //       style: "Classic",
    //       prompt: "ABVGD",
    //       room: "Kitchen",
    //     },
    //     {
    //       id: 7,
    //       result,
    //       original,
    //       style: "Classic",
    //       prompt: "ABVGD",
    //       room: "Kitchen",
    //     },
    //   ],
    // },
    // {
    //   id: 3,
    //   title: "Bathroom",
    //   photos: [
    //     {
    //       id: 8,
    //       result,
    //       original,
    //       style: "Classic",
    //       prompt: "ABVGD",
    //       room: "Kitchen",
    //     },
    //     {
    //       id: 9,
    //       result,
    //       original,
    //       style: "Classic",
    //       prompt: "ABVGD",
    //       room: "Kitchen",
    //     },
    //   ],
    // },
    // {
    //   id: 4,
    //   title: "Living room",
    //   photos: [
    //     {
    //       id: 10,
    //       result,
    //       original,
    //       style: "Classic",
    //       prompt: "ABVGD",
    //       room: "Kitchen",
    //     },
    //   ],
    // },
    {
      id: 5,
      title: "Something else",
      photos: [
        {
          id: 11,
          result,
          original,
          style: "Classic",
          prompt: "Very long text",
          room: "Kitchen",
        },
        {
          id: 12,
          result,
          original,
          style: "Classic",
          prompt: "ABVGD",
          room: "Kitchen",
        },
        {
          id: 13,
          result,
          original,
          style: "Classic",
          prompt: "ABVGD",
          room: "Kitchen",
        },
        {
          id: 14,
          result,
          original,
          style: "Classic",
          prompt: "ABVGD",
          room: "Kitchen",
        },
        {
          id: 15,
          result,
          original,
          style: "Classic",
          prompt: "ABVGD",
          room: "Kitchen",
        },
      ],
    },
  ],
};

const generationFoldersSlice = createSlice({
  name: "generationFolders",
  initialState,
  reducers: {
    savePhoto: foldersHandlers.savePhoto,
    deletePhoto: foldersHandlers.deletePhoto,
    createFolder: foldersHandlers.createFolder,
  },
});

export default generationFoldersSlice.reducer;
export const { deletePhoto, savePhoto, createFolder } =
  generationFoldersSlice.actions;
