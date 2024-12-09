"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "height",
      type: "string",
    },
    {
      name: "width",
      type: "string",
    },

    {
      name: "poster",
      type: "string",
    },
    {
      name: "videoLink",
      type: "string",
    },
    {
      name: "objectPosition",
      type: "string",
    },
  ],
});
