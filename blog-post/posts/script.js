const posts = [
  {
    title: "Up and running",
    brief:
      "After a rather tumoltuous week I am finally able to add a blog to my personal website.",
    datetime: "2022-07-12T8:57",
    slug: "up-and-running",
  },
  {
    title: "Tangram",
    brief:
      "What better way to show this blog's possibilities than with a tangram puzzle?",
    datetime: "2022-07-14T14",
    slug: "tangram-pieces",
  },
  {
    title: "Snake",
    brief:
      "It might be a bit dated, but snake remains a rather enjoyable game. Have a try.",
    datetime: "2022-07-16T20:22",
    slug: "snake",
  },
  {
    title: "Word search",
    brief:
      "This week I learned a few words. Here's a search puzzle to rehearse them.",
    datetime: "2022-07-16T22:39",
    slug: "mots-cachee",
  },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formatDate = (date) => {
  if (Intl.DateTimeFormat) {
    console.log("format");
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

document.body.innerHTML = `
      <main>
          ${posts
            .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))
            .map((post) => {
              const { title, datetime, brief, slug } = post;

              const date = new Date(
                ...datetime
                  .split(/[-T:]/)
                  .map((d, i) =>
                    i === 1 ? parseInt(d, 10) - 1 : parseInt(d, 10)
                  )
              );

              return `
              <article>
                <h2>
                  <a href="/blog/${slug}">
                    ${title}
                  </a>
                </h2>
          
                <time datetime="${datetime}">
                  ${formatDate(date)}
                </time>
          
                <p>
                  ${brief}
                </p>
              </article>
            `;
            })
            .join("")}
      </main>
  `;
