import {
  House,
  Calendar,
  GraduationCap,
  PencilLine,
  BanknoteArrowDown,
  Map,
} from "lucide-react";

const Category = {
  "/": [House, "Kokpit"],
  "/classes": [Calendar, "Zajęcia"],
  "/grades": [GraduationCap, "Oceny i ECTS"],
  "/registration": [PencilLine, "Rejestracja"],
  "/payments": [BanknoteArrowDown, "Płatności"],
  "/campusMap": [Map, "Mapa Kampusu"],
};
export default Category;
