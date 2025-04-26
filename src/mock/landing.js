import photo1 from "@/assets/gallery/0.png"
import photo2 from "@/assets/gallery/1.png"
import photo3 from "@/assets/gallery/2.png"
import photo4 from "@/assets/gallery/3.png"
import photo5 from "@/assets/gallery/4.png"
import photo6 from "@/assets/gallery/5.png"
import photo7 from "@/assets/gallery/6.png"
import photo8 from "@/assets/gallery/7.png"
import photo9 from "@/assets/gallery/8.png"
import photo10 from "@/assets/gallery/9.png"
import photo11 from "@/assets/gallery/10.png"
import photo12 from "@/assets/gallery/11.png"

import classic from "@/assets/design_panel/classic.png"
import provans from "@/assets/design_panel/provans.png"
import minimalism from "@/assets/design_panel/minimalism.png"
import contemporary from "@/assets/design_panel/contemporary.png"
import modern from "@/assets/design_panel/modern.png"
import japan from "@/assets/design_panel/japan.png"
import ar_deko from "@/assets/design_panel/ar_deko.png"
import mediterranean from "@/assets/design_panel/mediterranean.png"
import eco_style from "@/assets/design_panel/eco_style.png"
import hay_tek from "@/assets/design_panel/hay_tek.png"
import scandinavian from "@/assets/design_panel/scandinavian.png"
import loft from "@/assets/design_panel/loft.png"

export const why_me = [
    {
        name: "Миттєва генерація",
        desc: "Отримай інтер’єр вже за кілька секунд після запиту — швидко, без очікувань",
        img: "https://cdn.lordicon.com/warimioc.json",
    },
    {
        name: "Індивіальний стиль",
        desc: "ШІ адаптує дизайн під твій простір, стиль і побажання — без банальних шаблонів",
        img: "https://cdn.lordicon.com/skpqewwt.json",
    },
    {
        name: "Персональний дизайн",
        desc: "Завантаж фото своєї кімнати і отримай варіант оновлення саме для неї",
        img: "https://cdn.lordicon.com/rszslpey.json"
    },
    {
        name: "Простий prompt",
        desc: "Тобі не потрібно вигадувати складні промпти, просто опиши, що ти хочеш",
        img: "https://cdn.lordicon.com/fjvfsqea.json"
    },
    {
        name: "Збереження в папки",
        desc: "Зберігай згенеровані результати в папках і швидко знаходь потрібне",
        img: "https://cdn.lordicon.com/tsrgicte.json"
    },
    {
        name: "Універсальний доступ",
        desc: "Користуйся з комп’ютера, телефону або планшета, інтерфейс адаптований під усі пристрої",
        img: "https://cdn.lordicon.com/ogjpwrxe.json"
    },
]

export const design_list = [
    {
        name: "Класичний",
        desc: "Вишукані форми, симетрія, дорогі матеріали, стримана палітра кольорів. Атмосфера елегантності та вічної гармонії.",
        img: classic
    },
    {
        name: "Лофт",
        desc: "Cтиль з характером: відкриті простори, високі стелі, цегляні стіни та металеві акценти. Відчуття свободи і міського духу.",
        img: loft
    },
    {
        name: "Прованс",
        desc: "Ніжні пастельні тони, легкі тканини, квіткові мотиви, дерев’яні меблі. Атмосфера затишку, романтики та сільського шарму.",
        img: provans
    },
    {
        name: "Мінімалізм ",
        desc: "Простір без зайвого, лаконічні форми, нейтральні кольори, функціональність. Атмосфера спокою, чистоти та гармонії.",
        img: minimalism
    },
    {
        name: "Контемпорарі",
        desc: "Сучасні форми, прості лінії, комфортні рішення, нейтральна палітра. Атмосфера легкості, стилю та функціональної естетики.",
        img: contemporary
    },
    {
        name: "Модерн",
        desc: "Плавні лінії, природні форми, скло, метал і дерево. Атмосфера елегантності, стилю та витонченого затишку.",
        img: modern
    },
    {
        name: "Японський",
        desc: "Природні матеріали, чисті лінії, простір і світло. Атмосфера спокою, простоти та гармонії природи.",
        img: japan
    },
    {
        name: "Ар-деко",
        desc: "Геометричні візерунки, глянцеві поверхні, розкішні матеріали та блиск. Атмосфера гламуру, елегантності та впевненого стилю.",
        img: ar_deko
    },
    {
        name: "Середземноморський",
        desc: "Теплі кольори, натуральні матеріали, відкриті простори та зелень. Атмосфера свіжості, сонячного світла та морського вітру.",
        img: mediterranean
    },
    {
        name: "Еко-стиль",
        desc: "Натуральні матеріали, зелень, мінімалізм. Простота, екологічність і гармонія з природою. Атмосфера чистоти та відновлення.",
        img: eco_style
    },
    {
        name: "Хай-тек",
        desc: "Інноваційні матеріали, технологічні рішення, мінімалізм та чіткі лінії. Атмосфера майбутнього, функціональності та сучасного комфорту.",
        img: hay_tek
    },
    {
        name: "Скандинавський",
        desc: "Природні матеріали, світлі кольори, простота та функціональність. Атмосфера тепла, затишку та гармонії з природою.",
        img: scandinavian
    },
]

export const steps = [
    {
      title: "Завантаж фото",
      desc: "Додай фото кімнати для створення персонального дизайну."
    },
    {
      title: "Налаштуй параметри",
      desc: "Обери з переліку тип кімнати, стиль, напиши простий промпт та натисни кнопку “Згенерувати”."
    },
    {
      title: "Генерація інтер’єру",
      desc: "Зачекай декілька секунд та отримай картинку згенерованого простору відповідно до твого запиту."
    },
    {
      title: "Збереження картинки",
      desc: "Завантажуй собі на телефон чи комп’ютер або зберігай готовий інтер’єр на сайті в окремі папки. За бажанням ділись з друзями."
    }
];

export const gallery = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
]

export const comment = [
    {
        name: "Андрій Мельник",
        date: "24.05.2025",
        desc: "Я не є професіоналом у дизайні, але завдяки цій платформі я зміг створити інтер'єр для своєї квартири, який справді відображає мої вподобання. Це неймовірно просто — я просто вказав свої побажання, а результат був точно таким, як я уявляв. Велика подяка за такий зручний і інтуїтивно зрозумілий інструмент!",
    },
    {
        name: "Олена Ковальчук",
        date: "20.05.2025",
        desc: "Ця платформа значно спростила процес створення дизайну. Завдяки різноманітним шаблонам і можливості налаштувати кожен елемент, я змогла легко візуалізувати свій ідеальний інтер’єр. Дійсно зручний інструмент для всіх, хто хоче швидко отримати результат!",
    },
    {
        name: "Софія Литвин",
        date: "19.05.2025",
        desc: "Я була вражена тим, наскільки просто працювати з платформою! Вона дозволяє експериментувати з різними стилями і кольорами, не витрачаючи багато часу. Це справжній помічник для створення неповторного інтер'єру без професійних навичок",
    },
]