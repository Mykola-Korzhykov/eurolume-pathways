"use client";

import Metadata from "@components/layout/Metadata";
import GalleryC from "@components/sections/Gallery/Gallery";
import InspirationsC from "@components/sections/Gallery/Inspirations";
import ProjectsC from "@components/sections/Gallery/Projects";
import { FC } from "react";

const GalleryPage: FC = () => {
    return (
        <>
            <Metadata seoTitle="Inspirations | EuroLume" seoDescription="Inspirations Page" />
            <div className="next-page"><InspirationsC /></div>
        </>
    );
};

export default GalleryPage;