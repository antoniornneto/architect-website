import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ProjectsProps = {
  id: string;
  title: string;
  subtitle: string;
  image: {
    path: string;
    width: number;
    height: number;
  };
  description: string;
};

export type GaleryProps = {
  id: string;
  path: string;
};
