"use client";

import Metadata from "@components/layout/Metadata";
import GalleryC from "@components/sections/Gallery/Gallery";
import { FC } from "react";

const GalleryPage: FC = () => {
    return (
        <>
            <Metadata seoTitle="Gallery | EuroLume Pathways" seoDescription="Gallery Page" />
            <div className="next-page"><GalleryC /></div>
        </>
    );
};

export default GalleryPage;