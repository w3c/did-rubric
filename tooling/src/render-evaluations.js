
async function renderEvaluations() {
  const { document } = window;
  const evaluationsSection = document.getElementById('evaluations-cited');

  if (!evaluationsSection) {
    console.warn('No evaluations-cited section found');
    return;
  }

  if (!evaluationsJson) {
    console.error('No evaluationsJson variable found, have you run npm run generate-rubric?');
    return;
  }

  const evaluations = evaluationsJson;

  let html = `
  <table class="simple">
    <thead>
      <tr>
        <th>Relative ID</th>
        <th>Title</th>
        <th>Evaluator(s)</th>
        <th>Date</th>
        <th>URL</th>
      </tr>
    </thead>
    <tbody>
      ${evaluations.map(evaluation => renderEvaluation(evaluation)).join('')}
    </tbody>
  </table>`;

  evaluationsSection.innerHTML = html;
}

function renderEvaluation(evaluation) {
  const evaluators = evaluation.evaluators.join(', ');

  return `
  <tr id="${evaluation.id}">
    <td>${evaluation.id}</td>
    <td>${evaluation.title}</td>
    <td>${evaluators}</td>
    <td>${evaluation.date}</td>
    <td><a href="${evaluation.url}">${evaluation.url}</a></td>
  </tr>`;
}

window.renderEvaluations = renderEvaluations;
