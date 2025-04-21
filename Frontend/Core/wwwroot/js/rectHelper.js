window.getBoundingClientRect = function (element) {
    if (element instanceof HTMLElement) {
        var rect = element.getBoundingClientRect();
        return {
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height
        };
    }
    return null;
};
