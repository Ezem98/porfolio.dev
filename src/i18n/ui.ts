import ArgentinaFlag from "@/components/flags/Argentina.astro";
import UnitedStatesFlag from "@/components/flags/UnitedStates.astro";

export interface ILanguage {
  code: string;
  name: string;
  flag: typeof ArgentinaFlag;
}

export const LANGUAGES: ILanguage[] = [
  {
    code: "en",
    name: "English",
    flag: UnitedStatesFlag,
  },
  {
    code: "es",
    name: "Español",
    flag: ArgentinaFlag,
  },
];

export const defaultLang = "es";
export const showDefaultLang = false;
