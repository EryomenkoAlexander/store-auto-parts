import {MenuItemInterface} from "../interfaces/menu-item.interface";
import {CategoryEnum} from "../enums/category.enum";

export const MenuItems: MenuItemInterface[] = [
  {
    title: 'Насосы',
    category: CategoryEnum.pumps
  },
  {
    title: 'Домкраты',
    category: CategoryEnum.jacks
  },
  {
    title: 'Моторные масла',
    category: CategoryEnum.motorOils
  },
  {
    title: 'Антифризы',
    category: CategoryEnum.antifreeze
  },
  {
    title: 'Шины',
    category: CategoryEnum.tires
  },
  {
    title: 'Диски',
    category: CategoryEnum.discs
  },
  {
    title: 'Рули',
    category: CategoryEnum.steeringWheel
  },
  {
    title: 'Аккумуляторы',
    category: CategoryEnum.batteries
  },
  {
    title: 'Дворники',
    category: CategoryEnum.wipers
  },
  {
    title: 'Двигатели',
    category: CategoryEnum.engines
  },
  {
    title: 'Редуктор',
    category: CategoryEnum.gearbox
  },
  {
    title: 'Амортизаторы',
    category: CategoryEnum.shockAbsorbers
  }
]
