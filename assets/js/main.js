document.addEventListener("DOMContentLoaded", () => {
  // build nav items from section headings (h1, h2, h3)
  const navUl = document.querySelector("nav ul");
  if (navUl) {
    const headings = document.querySelectorAll(
      "section h1, section h2, section h3",
    );

    headings.forEach((heading, i) => {
      const text = (heading.textContent || "").trim();
      let id = text
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
      if (!id) id = `heading-${i}`;

      heading.id = id;

      const li = document.createElement("li");
      li.className = `tag-${heading.nodeName.toLowerCase()}`;
      const a = document.createElement("a");
      a.href = `#${id}`;
      a.textContent = text;
      li.appendChild(a);
      navUl.appendChild(li);
    });

    if (headings.length) {
      // remove .drop from body when any nav link is clicked (delegated)
      navUl.addEventListener("click", (e) => {
        const target = e.target;
        if (target.tagName && target.tagName.toLowerCase() === "a") {
          document.body.classList.remove("drop");
        }
      });
    }
  }

  // toggle .drop on body when clicking the dropdown menu item
  document.querySelectorAll("#menu ul li.dropdown").forEach((el) =>
    el.addEventListener("click", (e) => {
      document.body.classList.toggle("drop");
      e.preventDefault();
    }),
  );
});
