

/*<template>
<button class="expansion-panel">View PDF</button>

<div id="pdf-container"></div>
</template>*/

/*<script>
const button = document.querySelector('.expansion-panel');
const container = document.querySelector('#pdf-container');

button.addEventListener('click', () => {
  const url = 'http://oatpfe.es/docs/repositorio/es_ES/manuales/formacion_y_orientacion_laboral.pdf';

  // Load PDF file using PDF.js
  PDFJS.getDocument(url).then(pdf => {
    // Display PDF in container element
    for (let i = 1; i <= pdf.numPages; i++) {
      pdf.getPage(i).then(page => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const viewport = page.getViewport({ scale: 1 });
        const scale = container.offsetWidth / viewport.width;
        canvas.width = container.offsetWidth;
        canvas.height = viewport.height * scale;
        const renderContext = {
          canvasContext: context,
          viewport: page.getViewport({ scale })
        };
        page.render(renderContext).then(() => {
          container.appendChild(canvas);
        });
      });
    }
  });
});
</script>

*/