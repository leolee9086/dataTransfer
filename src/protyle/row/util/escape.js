export const escapeHtml = (html) => {
    return html.replace(/&/g, "&amp;").replace(/</g, "&lt;");
};
