export const observeState = (node) => {
  if (!IntersectionObserver) return;

  const callback = (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    const { target } = entry;
    target.setAttribute("data-state", "visible");
    observer.unobserve(target);
  };

  const observer = new IntersectionObserver(callback);
  node.setAttribute("data-state", "hidden");
  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    },
  };
};
