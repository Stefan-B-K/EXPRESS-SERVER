export const layout = (title: string, content: string) => {
    return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link href="/css/main.css" rel="stylesheet">
      </head>

      <body>
            <div class="container">
                  ${content}
            </div>
      </body>
    </html>
  `;
};
