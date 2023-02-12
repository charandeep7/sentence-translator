import { useContext } from "react";
import { TranslationContext } from "../context/Translation";

export const useTranslation = () => useContext(TranslationContext)