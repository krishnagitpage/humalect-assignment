"use client";

import { Hydrate as HydrateClient, HydrateProps } from "react-query";

function Hydrate(props: HydrateProps) {
    return <HydrateClient {...props}></HydrateClient>
}

export default Hydrate;