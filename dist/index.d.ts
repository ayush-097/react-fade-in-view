import * as react_jsx_runtime from 'react/jsx-runtime';
import { ElementType, ReactNode, ComponentPropsWithoutRef } from 'react';

type Direction = "left" | "right" | "up" | "down";
type FadeInProps<T extends ElementType> = {
    as?: T;
    direction?: Direction;
    className?: string;
    immediate?: boolean;
    children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;
declare const FadeIn: <T extends ElementType = "div">({ as, direction, className, immediate, children, ...rest }: FadeInProps<T>) => react_jsx_runtime.JSX.Element;

export { FadeIn };
