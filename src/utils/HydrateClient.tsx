"use client";

import { Hydrate as HydrateClient, HydrateProps } from "react-query";

export default function Hydrate (props: HydrateProps) {
    return <HydrateClient {...props} />
}