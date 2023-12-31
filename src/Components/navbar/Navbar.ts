import { Box } from "../../lib";
import { navbarProps } from "./type";

export const navbar = (props: navbarProps) => {
  return Box({
    element: "Div",
    attr: props.attr,
    children: [
      Box({
        element: "a",
        attr: {
          href: "/",
        },
        children: "Home",
      }),
      Box({
        element: "Div",
        attr: {
          class: "flex items-center justify-between gap-3",
        },
        children: [
          Box({
            element: "a",
            attr: {
              href: "/authlayout/signin",
            },
            children: "Sign in",
          }),
          Box({
            element: "a",
            attr: {
              href: "/authlayout/signup",
            },
            children: "Sign up",
          }),
        ],
      }),
    ],
  });
};
// <Div class=""
