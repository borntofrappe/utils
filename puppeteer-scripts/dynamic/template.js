export default (posts) => {
  const colors = {
    morning: { foreground: "#838ac5", background: "#9cb2ce" },
    day: { foreground: "#639aef", background: "#73d2e6" },
    night: { foreground: "#7369b5", background: "#838ace" },
  };

  const positions = {
    morning: { x: 30, y: 35 },
    day: { x: 60, y: 30 },
    night: { x: 90, y: 35 },
  };

  const underlays = {
    morning: `<g fill="none" stroke="#a4bace" stroke-linecap="round" stroke-linejoin="round" >
                    <g transform="translate(60 85)">
                      <g stroke-dasharray="15 30" stroke-width="2.5">
                        <path d="M -46 0 a 46 46 0 0 1 92 0" />
                        <path transform="rotate(-3)" d="M -45 0 a 45.5 45.5 0 0 1 91 0" />
                        <path transform="rotate(-4)" d="M -46.5 0 a 46.5 46.5 0 0 1 93 0" />
                      </g>
                      <g stroke-dasharray="20 26.5" stroke-width="2">
                        <path d="M -64 0 a 64 64 0 0 1 128 0" />
                        <path transform="rotate(-2)" d="M -65 0 a 65 65 0 0 1 130 0" />
                        <path transform="rotate(-4)" d="M -66 0 a 66 66 0 0 1 132 0" />
                      </g>
                    </g>
                </g>`,
    day: `<g fill="#8cdbef" stroke="#8cdbef">
                <g transform="translate(60 85)">
                  <g transform="translate(0 -52.5)">
                    <circle r="4" />
                    <circle cx="3.8" r="3" />
                    <circle cx="-3.8" r="3" />
                  </g>
                  <g transform="rotate(45) translate(0 -55)">
                    <circle r="4" />
                    <circle cx="3.8" r="3" />
                    <circle cx="-3.8" r="3" />
                  </g>
                  <g transform="rotate(-45) translate(0 -55)">
                    <circle r="4" />
                    <circle cx="3.8" r="3" />
                    <circle cx="-3.8" r="3" />
                  </g>
                  <g transform="rotate(-22.5) translate(0 -70)">
                    <circle r="4" />
                    <circle cx="3.8" r="3" />
                    <circle cx="-3.8" r="3" />
                  </g>
                  <g transform="rotate(22.5) translate(0 -70)">
                    <circle r="4" />
                    <circle cx="3.8" r="3" />
                    <circle cx="-3.8" r="3" />
                  </g>
                </g>
              </g>`,
    night: `<g fill="#adc2d6">
                  <path d="M 30 52 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
                  <path d="M 43 42 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
                  <path d="M 63 42.5 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
                  <path d="M 81 42 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
                  <path d="M 90 54 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
                  <path d="M 98 44 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
                  <path d="M 74 27.5 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
                  <path d="M 52 26 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
                  <path d="M 32 32 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
                  <path d="M 14 46 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
                  <path d="M 14 46 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
                  <path d="M 13 26.5 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
                  <path d="M 33.5 14.5 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
                  <path d="M 61.5 10 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
                  <path d="M 89 18.5 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
                  <path d="M 102.5 26 a 1 1 0 0 0 1 -1 1 1 0 0 0 1 1 1 1 0 0 0 -1 1 1 1 0 0 0 -1 -1" />
              </g>`,
  };

  const overlays = {
    morning: `<circle r="3" />`,
    day: `<circle r="3" />
              <path transform="rotate(0) translate(0 -3.5)" d="M 0 0 h -1 l 1 -1 1 1z" />
              <path transform="rotate(45) translate(0 -3.5)" d="M 0 0 h -1 l 1 -1 1 1z" />
              <path transform="rotate(90) translate(0 -3.5)" d="M 0 0 h -1 l 1 -1 1 1z" />
              <path transform="rotate(135) translate(0 -3.5)" d="M 0 0 h -1 l 1 -1 1 1z" />
              <path transform="rotate(180) translate(0 -3.5)" d="M 0 0 h -1 l 1 -1 1 1z" />
              <path transform="rotate(225) translate(0 -3.5)" d="M 0 0 h -1 l 1 -1 1 1z" />
              <path transform="rotate(270) translate(0 -3.5)" d="M 0 0 h -1 l 1 -1 1 1z" />
              <path transform="rotate(315) translate(0 -3.5)" d="M 0 0 h -1 l 1 -1 1 1z" />
              `,
    night: `<path transform="rotate(-45)" d="M 0 -3 a 3 3 0 1 1 -3 3 2 2 0 0 0 3 -3"/>`,
  };

  const headers = posts.map(({ title, datetime }) => {
    let timeOfDay;

    const date = datetime
      ? new Date(
          ...datetime
            .split(/[-T:]/)
            .map((d, i) => (i === 1 ? parseInt(d, 10) - 1 : parseInt(d, 10)))
        )
      : new Date();

    const hours = date.getHours();

    if (hours > 2 && hours < 10) {
      timeOfDay = "morning";
    } else if (hours < 18) {
      timeOfDay = "day";
    } else {
      timeOfDay = "night";
    }

    const { foreground, background } = colors[timeOfDay];
    const position = positions[timeOfDay];

    return {
      title,
      timeOfDay,
      foreground,
      background,
      position,
    };
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>dynamic</title>
    
        <style>
          *,
          *::before,
          *::after {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }

          header {
            width: 1000px;
            height: 500px;
            position: relative;
          }
    
          header > h1 {
            position: absolute;
            top: 20%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 4rem;
            color: hsl(0, 0%, 97%);
            font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
              segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial,
              sans-serif;
          }
    
          header > svg {
            display: block;
          }
        </style>
      </head>
      <body>

      <svg style="position: absolute; width: 0; height: 0;" aria-hidden="true">
        <defs>
            ${Object.entries(colors)
              .map(
                ([timeOfDay, colors]) => `
            <filter id="filter-outline-${timeOfDay}">
            <feFlood flood-color="${colors.foreground}" result="ccolor"/>
            <feFlood flood-color="#63616b" result="ocolor"/>
            <feMorphology in="SourceAlpha" operator="dilate" radius="6" result="coutline" />
            <feMorphology in="SourceAlpha" operator="dilate" radius="3" result="ooutline" />
            <feComposite in="ccolor" in2="coutline" operator="in" result="ccolor-outline" />
            <feComposite in="ocolor" in2="ooutline" operator="in" result="ocolor-outline" />
            
            <feMerge>
                <feMergeNode in="ccolor-outline" />
                <feMergeNode in="ocolor-outline" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
            </filter>
            `
              )
              .join("")}

            ${Object.entries(underlays)
              .map(
                ([timeOfDay, underlay]) => `
            <g id="underlay-${timeOfDay}">
            ${underlay}
            </g>
            `
              )
              .join("")}

            ${Object.entries(overlays)
              .map(
                ([timeOfDay, overlay]) => `
            <g id="overlay-${timeOfDay}">
            ${overlay}
            </g>
            `
              )
              .join("")}
        </defs>
    </svg>

    ${headers
      .map(
        ({ title, timeOfDay, foreground, background, position }) => `
    <header>
          <h1 style="filter: url(#filter-outline-${timeOfDay})">${title}</h1>
          <svg style="background: ${background}" viewBox="0 0 120 60">
              <circle fill=${background} r="60" cx="60" cy="60" />
          
              <use href="#underlay-${timeOfDay}" />
          
              <g transform="translate(${position.x} ${position.y})">
                <g>
                  <circle r="7" fill=${foreground} />
                  <circle r="6" fill="#f7f7f7" stroke="#63616b" stroke-width="0.75" />
                  <g fill="#f7f752" stroke="#e6ca31" stroke-width="0.3">
                    <use href="#overlay-${timeOfDay}" />
                  </g>
                </g>
              </g>
          
              <g transform="translate(60 85)">
                <circle fill=${foreground} r="36" />
              </g>
            </svg>
    </header>
    
    `
      )
      .join("")}
      </body>
    </html>
    `;
};
