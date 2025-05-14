
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

// Категории товаров
const categories = [
  { id: 1, name: "Лампы", icon: "Lightbulb" },
  { id: 2, name: "Стулья", icon: "Armchair" },
  { id: 3, name: "Столы", icon: "AlignJustify" },
  { id: 4, name: "Диваны", icon: "Sofa" },
  { id: 5, name: "Шкафы", icon: "LayoutGrid" },
];

// Избранные товары
const featuredProducts = [
  {
    id: 1,
    name: "Волнистая лампа Аврора",
    category: "Лампы",
    price: 12500,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Стул Геометрия",
    category: "Стулья",
    price: 8900,
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=2565&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Подвесная лампа Орбита",
    category: "Лампы",
    price: 15800,
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Стол Минимал",
    category: "Столы",
    price: 24900,
    image:
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=2574&auto=format&fit=crop",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Навигация */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-montserrat font-bold text-black">
                МОДЕРН
              </h1>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-red-600 transition-colors font-sourcesans"
                  >
                    Каталог
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-red-600 transition-colors font-sourcesans"
                  >
                    О нас
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-red-600 transition-colors font-sourcesans"
                  >
                    Доставка
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-red-600 transition-colors font-sourcesans"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-black hover:text-red-600">
                <Icon name="Search" size={20} />
              </button>
              <button className="text-black hover:text-red-600">
                <Icon name="ShoppingCart" size={20} />
              </button>
              <button className="md:hidden text-black">
                <Icon name="Menu" size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Главный баннер */}
      <section className="relative overflow-hidden bg-black h-[70vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&w=2670&auto=format&fit=crop"
            alt="Дизайнерская лампа"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-white mb-6">
              Безупречный <span className="text-red-600">дизайн</span> для
              вашего дома
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-8 font-sourcesans">
              Уникальные предметы интерьера для тех, кто ценит индивидуальность
            </p>
            <div>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Смотреть каталог
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Категории */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-montserrat font-bold text-black">
              Категории
            </h2>
            <Separator className="mt-4 bg-red-600 w-20 h-1" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group flex flex-col items-center justify-center p-6 bg-gray-50 hover:bg-red-600 rounded-md transition-colors cursor-pointer"
              >
                <Icon
                  name={category.icon}
                  size={36}
                  className="text-black group-hover:text-white transition-colors"
                />
                <p className="mt-4 text-lg font-sourcesans font-medium text-black group-hover:text-white transition-colors">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Акцент на лампах */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-montserrat font-bold text-white">
              Лампы необычной формы
            </h2>
            <Separator className="mt-4 bg-red-600 w-20 h-1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-md aspect-[3/4] group">
              <img
                src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=2574&auto=format&fit=crop"
                alt="Лампа Аврора"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <h3 className="text-xl font-montserrat font-bold text-white">
                    Лампа Аврора
                  </h3>
                  <p className="text-white/80 mt-2 font-sourcesans">
                    Волнистая форма создает уникальные световые узоры
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-md aspect-[3/4] group">
              <img
                src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2670&auto=format&fit=crop"
                alt="Подвесная лампа Орбита"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <h3 className="text-xl font-montserrat font-bold text-white">
                    Лампа Орбита
                  </h3>
                  <p className="text-white/80 mt-2 font-sourcesans">
                    Подвесной дизайн с геометрическими элементами
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-md aspect-[3/4] group">
              <img
                src="https://images.unsplash.com/photo-1606170033648-5d55a3edf314?q=80&w=2670&auto=format&fit=crop"
                alt="Настольная лампа Спираль"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <h3 className="text-xl font-montserrat font-bold text-white">
                    Лампа Спираль
                  </h3>
                  <p className="text-white/80 mt-2 font-sourcesans">
                    Минималистичный дизайн в стиле модерн
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Смотреть все лампы
            </Button>
          </div>
        </div>
      </section>

      {/* Популярные товары */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-montserrat font-bold text-black">
              Избранные товары
            </h2>
            <Separator className="mt-4 bg-red-600 w-20 h-1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="bg-white rounded-full p-2 hover:bg-red-600 hover:text-white transition-colors">
                      <Icon name="Heart" size={16} />
                    </button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm font-medium text-red-600 mb-2 font-sourcesans">
                    {product.category}
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2 font-montserrat">
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-lg font-bold text-black font-sourcesans">
                      {product.price.toLocaleString()} ₽
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-black text-black hover:bg-black hover:text-white"
                    >
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white"
            >
              Смотреть все товары
            </Button>
          </div>
        </div>
      </section>

      {/* О нас */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-black mb-6">
                О нашем магазине
              </h2>
              <Separator className="mb-6 bg-red-600 w-20 h-1" />
              <p className="text-lg text-black/80 mb-6 font-sourcesans">
                Магазин "МОДЕРН" предлагает уникальную мебель и предметы
                интерьера для ценителей современного дизайна. Мы тщательно
                отбираем каждую модель, чтобы предложить вам только лучшее.
              </p>
              <p className="text-lg text-black/80 mb-6 font-sourcesans">
                Наша философия — создавать пространства, которые вдохновляют и
                радуют глаз. Каждый предмет в нашей коллекции создан с учетом
                последних тенденций в мире дизайна интерьера.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Узнать больше
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2558&auto=format&fit=crop"
                  alt="Интерьер 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2670&auto=format&fit=crop"
                  alt="Интерьер 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2680&auto=format&fit=crop"
                  alt="Интерьер 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2532&auto=format&fit=crop"
                  alt="Интерьер 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-black py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h2 className="text-2xl font-montserrat font-bold text-white mb-6">
                МОДЕРН
              </h2>
              <p className="text-white/70 font-sourcesans">
                Мебельный магазин современного дизайна, где каждый предмет
                интерьера — произведение искусства.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-montserrat font-bold text-white mb-6">
                Контакты
              </h3>
              <ul className="space-y-4 text-white/70 font-sourcesans">
                <li className="flex items-center">
                  <Icon name="MapPin" className="mr-2" size={18} />
                  Москва, ул. Дизайнеров, 42
                </li>
                <li className="flex items-center">
                  <Icon name="Phone" className="mr-2" size={18} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" className="mr-2" size={18} />
                  info@modern-furniture.ru
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-montserrat font-bold text-white mb-6">
                Навигация
              </h3>
              <ul className="space-y-3 text-white/70 font-sourcesans">
                <li>
                  <a href="#" className="hover:text-red-600 transition-colors">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition-colors">
                    Каталог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition-colors">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-montserrat font-bold text-white mb-6">
                Подписка
              </h3>
              <p className="text-white/70 mb-4 font-sourcesans">
                Подпишитесь на нашу рассылку, чтобы получать новости о новинках
                и акциях
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-2 border-0 outline-none"
                />
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Icon name="Send" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-10 bg-white/20" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm font-sourcesans">
              © 2025 МОДЕРН. Все права защищены.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-red-600 transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-red-600 transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-red-600 transition-colors"
              >
                <Icon name="Twitter" size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-red-600 transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
