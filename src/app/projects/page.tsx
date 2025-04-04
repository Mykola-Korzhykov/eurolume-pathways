"use client";

import Metadata from "@components/layout/Metadata";
import GalleryC from "@components/sections/Gallery/Gallery";
import ProjectsC from "@components/sections/Gallery/Projects";
import { FC } from "react";

const GalleryPage: FC = () => {
    return (
        <>
            <Metadata seoTitle="Projects | EuroLume" seoDescription="Project Page" />
            <div className="next-page"><ProjectsC /></div>
        </>
    );
};

export default GalleryPage;