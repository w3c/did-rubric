

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
  console.log(`rendering ${criteriaIdFragment}`);
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
  return `<h4 class="hide-heading">${criteria.name}</h4>`;
}
function nameRow(criteria) {

  return `
<h4 class="name-row" >${criteria.name}</h4> 
    `;
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
    criteria.source === ".") {
    return ``;
  } else
    return `
    <div class="source-row">
        <span class="label">Source:</span>
        <a href="${criteria.source}">${criteria.source}</a>
    </div>
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
    criteria.question.instruction === "") {
    return ``;
  } else return `
    <div class="instructions-row">
        <span class="label">Instructions</span>
        <span class="instruction">${criteria.question.instruction}</span>
      
    </div>
    `;
}

function responsesRow(criteria) {

  var retval;

  if ((typeof criteria.response === "undefined") ||
    (typeof criteria.response.possibleResponses === "undefined")) {
    return '';
  } else {
    retval = `<div class="responses-row">
    <div class="response-title">Responses</div>
    <table class="responses">`;

    retval += criteria.response.possibleResponses.map(
      (possibleResponse, index) => criteriaResponse(possibleResponse, index)).join('');
  }

  retval += `</table></div>`;

  return retval;
}

function criteriaResponse(possibleResponse, index) {
  console.log("index", index);
  return `
  <tr class="possibleResponse">
    <td class="label ${index ? '' : 'first'}">${possibleResponse.label}:</td> 
    <td class="meaning  ${index ? '' : 'first'}">${possibleResponse.meaning || ''}</td>
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
    (criteria.exampleAssessments.length === 0)) {
    return '';
  } else {
    var retval = `
  <div class="assessments-row">
    Example Assessments
  </div>
  <div>
    ${assessmentsTable(criteria)}
  </div>
  `;
    return retval;
  }
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
  var retval = `
  <tr>
    ${columns.map(function (column) {
      return makeColumn(assessment, column);
    }).join('')}
  </tr>
  `
  return retval;

}



function makeColumn(assessment, column) {
  return `
  <td>
    ${assessment[column.propertyRef]}
  </td>
  `;
}
//       let contents = assessment[column.propertyRef] || '';
//       if (column.propertyRef === 'note' && assessment.evaluationCitation) {
//         let evalCitation = `[<a href="${assessment.evaluationCitation}">${assessment.evaluationCitation.slice(1)}</a>]`

//         contents += ` ${evalCitation}`;
//       }

//       return `<td>${contents}</td>`;
//     }).join('') : ''}
//                 </tr>
//                 `).join('')}
//             </tbody>
//             </table>

//             </section>` : ''}

//         </section>
//         `

// }

window.renderCategories = renderCategories;