import { Context as LanguageContext } from "contexts/LanguageContext";
import React, { useContext } from "react";

const FoobarButton = () => {
   const { language, pickLanguage } = useContext(LanguageContext )
}
