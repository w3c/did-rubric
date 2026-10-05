
async function renderCategories() {
  const { document } = window;
  const criteriaSection = document.getElementById('criteria');
  // this section must already exist in the document,
  // inside  a <section> element.


  if (!criteriaSection) {
    console.warn('No criteria section found');
    return;
  }

  if (!rubricJson) {
    console.error('No rubricJSON variable found, have you run npm run generate-rubric?');
    return;
  }
  const rubric = rubricJson;

  let categoriesHtml = rubric.categories.map(category => {
    return `<section class="category">
                <h3>${category.name}</h3>
                <p class="description">${category.description}</p>
                ${(category.criteria || []).map(criteria => renderCriteria(criteria)).join('')}
            </section>`
  }).join('');

  criteriaSection.innerHTML = `<h2>The Criteria</h2>` + categoriesHtml;

}

function renderCriteria(criteria) {
  let criteriaIdFragment = criteria.id.split('#')[1];

  return `
      <section id="${criteriaIdFragment}" class="criterion">
      ${nameRow(criteria)}
      ${idRow(criteria)}
      ${versionRow(criteria)}
      ${questionRow(criteria)}
      ${instructionRow(criteria)}
      ${responsesRow(criteria)}
      ${relevanceRow(criteria)}
      ${assessmentsRow(criteria)}
      ${sourceRow(criteria)}
      </section>

  `;
}

function nameHeading(criteria) {
  return `
  <h4 class="hide-heading">${criteria.name}</h4>`;
}
function nameRow(criteria) {
  return `
  <h4 class="name-row" >${criteria.name}</h4>`;
}

function idRow(criteria) {
  let criteriaIdFragment = criteria.id.split('#')[1];
  return `
    <div class="id-row">
        <span class="label">ID:</span>
        <a class="id" href="#${criteriaIdFragment}">${criteria.id}</a>
    </div>
    `;
}

function versionRow(criteria) {
  return `
    <div class="version-row">
        <span class="label">Version:</span>
        <span class="version">v${criteria.version}</span>
    </div>`;

}

function sourceRow(criteria) {
  if ((typeof criteria.source === "undefined") ||
    criteria.source === ".")
    return ``;
  return `
  <div class="source-row">
    <span class="label">Source:</span>
    <a href="${criteria.source}">${criteria.source}</a></div>
`;
}

function questionRow(criteria) {
  return `
  <div class="question-row">
    ${criteria.question.question}</a>
  </div>
  `;
}

function instructionRow(criteria) {
  if ((typeof criteria.question.instruction === 'undefined') ||
    criteria.question.instruction === "")
    return ``;

  return `
    <div class="instructions-row">
        <span class="label">Instructions</span>
        <span class="instruction">${criteria.question.instruction}</span>

    </div>
    `;
}

function responsesRow(criteria) {

  if (criteria.response?.possibleResponses === undefined)
    return '';

  var returnValue = `<div class="responses-row">
    <div class="response-title">Responses</div>
    <table class="responses">`;

  returnValue += criteria.response.possibleResponses.map(
      (possibleResponse, index) => criteriaResponse(possibleResponse, index)).join('');

  returnValue += `</table></div>`; // end the .responses table

  return returnValue;
}

function criteriaResponse(possibleResponse, index) {
  return `
  <tr class="possibleResponse">
    <td class="label ${index ? '' : 'first'}">${possibleResponse.label}:</td>
    <td class="meaning  ${index ? '' : 'first'}">${possibleResponse.meaning || ''}

    </td>
  </tr>
  `;
}


function relevanceRow(criteria) {
  return `
  <div class="relevance-heading-row">
    Relevance
  </div>
  <div class="relevance-row">
    ${criteria.relevance}
  </div>
  `;
}

function assessmentsRow(criteria) {
  if ((typeof criteria.exampleAssessments === "undefined") ||
    (criteria.exampleAssessments.length === 0))
    return '';

  return `
<div class="assessments-row">
  Example Assessments
</div>
<div>
  ${assessmentsTable(criteria)}
</div>
`;
}

function assessmentsTable(criteria) {
  return `
  <table class="assessments">
    <thead>
      <tr>
        ${criteria.assessmentTemplate.columns.map(column => `<th>${column.heading}</th>`).join('')}
      </tr>
    </thead>
    <tbody>
      ${criteria.exampleAssessments.map(
    function (assessment, index) { return assessmentRow(assessment, index, criteria.assessmentTemplate.columns) }).join('')}
    </tbody >
  </table >
  `
}

function assessmentRow(assessment, index, columns) {
  return `
  <tr>
    ${columns.map(function (column) {
    return makeColumn(assessment, column);
  }).join('')}
  </tr>
  `;
}

function makeColumn(assessment, column) {
  const colValue = assessment[column.propertyRef];
  if (column.propertyRef == 'method') {
    return `
    <td>
      <a href="#${colValue}">${colValue}</a>
    </td>
    `;
  } else {
    return `
    <td>
      ${colValue}
      ${citeEvaluation(assessment, column)}
    </td>
    `;
  }
}

// citeEvaluation only returns something if column = notes
function citeEvaluation(assessment, column) {
  if (column.propertyRef != 'note')
    return '';

  return `[<a href="${assessment.evaluationCitation}">${assessment.evaluationCitation.slice(1)}</a>]`;

}

window.renderCategories = renderCategories;
