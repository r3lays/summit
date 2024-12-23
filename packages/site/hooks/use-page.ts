import React from "react";

interface PageMetadata {
    title: string;
    favicon: string;
    url: string;
    appTitle: string;
}

export default function usePage(): PageMetadata {
    const [metadata, setMetadata] = React.useState<PageMetadata>({
        title: "",
        favicon: "",
        url: "",
        appTitle: "",
    });

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            const title = document.title || "";
            const faviconElement = document.querySelector('link[rel="icon"]');
            const favicon = faviconElement ? faviconElement.getAttribute("href") || "" : "";
            const url = window.location.href;
            const appTitle = window.location.hostname || "";

            setMetadata({ title, favicon, url, appTitle });
        }
    }, []);

    return metadata;
}
