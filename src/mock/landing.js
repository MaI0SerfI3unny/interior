import photo1 from "@/assets/gallery/0.jpg";
import photo2 from "@/assets/gallery/1.jpg";
import photo3 from "@/assets/gallery/2.jpg";
import photo4 from "@/assets/gallery/3.jpg";
import photo5 from "@/assets/gallery/4.jpg";
import photo6 from "@/assets/gallery/5.jpg";
import photo7 from "@/assets/gallery/6.jpg";
import photo8 from "@/assets/gallery/7.jpg";
import photo9 from "@/assets/gallery/8.jpg";
import photo10 from "@/assets/gallery/9.jpg";
import photo11 from "@/assets/gallery/10.jpg";
import photo12 from "@/assets/gallery/11.jpg";

import bigPhoto1 from "../assets/gallery/modalPhotos/01.webp";
import bigPhoto2 from "../assets/gallery/modalPhotos/02.webp";
import bigPhoto3 from "../assets/gallery/modalPhotos/03.webp";
import bigPhoto4 from "../assets/gallery/modalPhotos/04.webp";
import bigPhoto5 from "../assets/gallery/modalPhotos/05.webp";
import bigPhoto6 from "../assets/gallery/modalPhotos/06.webp";
import bigPhoto7 from "../assets/gallery/modalPhotos/07.webp";
import bigPhoto8 from "../assets/gallery/modalPhotos/08.webp";
import bigPhoto9 from "../assets/gallery/modalPhotos/09.webp";
import bigPhoto10 from "../assets/gallery/modalPhotos/10.webp";
import bigPhoto11 from "../assets/gallery/modalPhotos/11.webp";
import bigPhoto12 from "../assets/gallery/modalPhotos/12.webp";

import classic from "@/assets/design_panel/classic.png";
import provans from "@/assets/design_panel/provans.png";
import minimalism from "@/assets/design_panel/minimalism.png";
import contemporary from "@/assets/design_panel/contemporary.png";
import modern from "@/assets/design_panel/modern.png";
import japan from "@/assets/design_panel/japan.png";
import ar_deko from "@/assets/design_panel/ar_deko.png";
import mediterranean from "@/assets/design_panel/mediterranean.png";
import eco_style from "@/assets/design_panel/eco_style.png";
import hay_tek from "@/assets/design_panel/hay_tek.png";
import scandinavian from "@/assets/design_panel/scandinavian.png";
import loft from "@/assets/design_panel/loft.png";

export const why_me = [
  {
    name: "Миттєва генерація",
    desc: "Отримай інтер’єр вже за кілька секунд після запиту — швидко, без очікувань",
    img: "https://cdn.lordicon.com/warimioc.json",
  },
  {
    name: "Індивідуальний стиль",
    desc: "ШІ адаптує дизайн під твій простір, стиль і побажання — без банальних шаблонів",
    img: "https://cdn.lordicon.com/skpqewwt.json",
  },
  {
    name: "Персональний дизайн",
    desc: "Завантаж фото своєї кімнати і отримай варіант оновлення саме для неї",
    img: "https://cdn.lordicon.com/rszslpey.json",
  },
  {
    name: "Простий prompt",
    desc: "Тобі не потрібно вигадувати складні промпти, просто опиши, що ти хочеш",
    img: "https://cdn.lordicon.com/fjvfsqea.json",
  },
  {
    name: "Збереження в папки",
    desc: "Зберігай згенеровані результати в папках і швидко знаходь потрібне",
    img: "https://cdn.lordicon.com/tsrgicte.json",
  },
  {
    name: "Універсальний доступ",
    desc: "Користуйся з комп’ютера, телефону або планшета, інтерфейс адаптований під усі пристрої",
    img: "https://cdn.lordicon.com/ogjpwrxe.json",
  },
];

export const design_list = [
  {
    name: "classic",
    desc: "classic_desc",
    img: classic,
  },
  {
    name: "loft",
    desc: "loft_desc",
    img: loft,
  },
  {
    name: "provence",
    desc: "provence_desc",
    img: provans,
  },
  {
    name: "minimalism",
    desc: "minimalism_desc",
    img: minimalism,
  },
  {
    name: "contemporary",
    desc: "contemporary_desc",
    img: contemporary,
  },
  {
    name: "modern",
    desc: "modern_desc",
    img: modern,
  },
  {
    name: "japanese",
    desc: "japanese_desc",
    img: japan,
  },
  {
    name: "art_deco",
    desc: "art_deco_desc",
    img: ar_deko,
  },
  {
    name: "mediterranean",
    desc: "mediterranean_desc",
    img: mediterranean,
  },
  {
    name: "eco_style",
    desc: "eco_style_desc",
    img: eco_style,
  },
  {
    name: "high_tech",
    desc: "high_tech_desc",
    img: hay_tek,
  },
  {
    name: "scandinavian",
    desc: "scandinavian_desc",
    img: scandinavian,
  },
];

export const steps = [
  {
    title: "Завантаж фото",
    desc: "Додай фото кімнати для створення персонального дизайну.",
  },
  {
    title: "Налаштуй параметри",
    desc: "Обери з переліку тип кімнати, стиль, напиши простий промпт та натисни кнопку “Згенерувати”.",
  },
  {
    title: "Генерація інтер’єру",
    desc: "Зачекай декілька секунд та отримай картинку згенерованого простору відповідно до твого запиту.",
  },
  {
    title: "Збереження картинки",
    desc: "Завантажуй собі на телефон чи комп’ютер або зберігай готовий інтер’єр на сайті в окремі папки. За бажанням ділись з друзями.",
  },
];

export const gallery = [
  {
    id: 0,
    image: photo1,
    prompt: "gallery.first",
    style: "gallery.style.first",
    room: "gallery.room.first",
    modalImage: bigPhoto1,
  },
  {
    id: 1,
    image: photo2,
    prompt: "gallery.second",
    style: "gallery.style.second",
    room: "gallery.room.second",
    modalImage: bigPhoto2,
  },
  {
    id: 2,
    image: photo3,
    prompt: "gallery.third",
    style: "gallery.style.third",
    room: "gallery.room.third",
    modalImage: bigPhoto3,
  },
  {
    id: 3,
    image: photo4,
    prompt: "gallery.fourth",
    style: "gallery.style.fourth",
    room: "gallery.room.fourth",
    modalImage: bigPhoto4,
  },
  {
    id: 4,
    image: photo5,
    prompt: "gallery.fifth",
    style: "gallery.style.fifth",
    room: "gallery.room.fifth",
    modalImage: bigPhoto5,
  },
  {
    id: 5,
    image: photo6,
    prompt: "gallery.sixth",
    style: "gallery.style.sixth",
    room: "gallery.room.sixth",
    modalImage: bigPhoto6,
  },
  {
    id: 6,
    image: photo7,
    prompt: "gallery.seventh",
    style: "gallery.style.seventh",
    room: "gallery.room.seventh",
    modalImage: bigPhoto7,
  },
  {
    id: 7,
    image: photo8,
    prompt: "gallery.eighth",
    style: "gallery.style.eighth",
    room: "gallery.room.eighth",
    modalImage: bigPhoto8,
  },
  {
    id: 8,
    image: photo9,
    prompt: "gallery.ninth",
    style: "gallery.style.ninth",
    room: "gallery.room.ninth",
    modalImage: bigPhoto9,
  },
  {
    id: 9,
    image: photo10,
    prompt: "gallery.tenth",
    style: "gallery.style.tenth",
    room: "gallery.room.tenth",
    modalImage: bigPhoto10,
  },
  {
    id: 10,
    image: photo11,
    prompt: "gallery.eleventh",
    style: "gallery.style.eleventh",
    room: "gallery.room.eleventh",
    modalImage: bigPhoto11,
  },
  {
    id: 11,
    image: photo12,
    prompt: "gallery.twelfth",
    style: "gallery.style.twelfth",
    room: "gallery.room.twelfth",
    modalImage: bigPhoto12,
  },
];

export const comment = [
  {
    name: "title_item_comment_0",
    date: "24.05.2025",
    desc: "desc_item_comment_0",
  },
  {
    name: "title_item_comment_1",
    date: "20.05.2025",
    desc: "desc_item_comment_1",
  },
  {
    name: "title_item_comment_2",
    date: "19.05.2025",
    desc: "desc_item_comment_2",
  },
];
