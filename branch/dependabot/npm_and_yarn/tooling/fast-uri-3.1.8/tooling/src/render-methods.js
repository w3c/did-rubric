
async function renderMethods() {
  const { document } = window;
  const methodsSection = document.getElementById('methods-considered-table');

  if (!methodsSection) {
    console.warn('No methods-considered-table section found');
    return;
  }

  if (!methodsJson) {
    console.error('No methodsJson variable found, have you run npm run generate-rubric?');
    return;
  }

  const methods = methodsJson;

  let html = `
  <table class="simple">
    <thead>
      <tr>
        <th>Method</th>
        <th>Specification</th>
        <th>Network</th>
        <th>Registry</th>
      </tr>
    </thead>
    <tbody>
      ${methods.map(method => renderMethod(method)).join('')}
    </tbody>
  </table>`;

  methodsSection.innerHTML = html;
}

function renderMethod(method) {
  return `
  <tr id="${method.method}">
    <td>${method.method}</td>
    <td>${renderCell(method.specification)}</td>
    <td>${renderCell(method.network)}</td>
    <td>${renderCell(method.registry)}</td>
  </tr>`;
}

function renderCell(value) {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  const { name, url, note } = value;
  const link = url ? `<a href="${url}">${name}</a>` : (name ?? '');
  return note ? `${link} ${note}` : link;
}

window.renderMethods = renderMethods;
