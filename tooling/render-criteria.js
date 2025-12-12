

async function renderCategories() {
  const {document} = window;
  const criteriaSection = document.getElementById('criteria');

  if (!criteriaSection) {
    console.warn('No criteria section found');
    return;
  }

  const response = await fetch('../criteria/index.json');
  const criteriaIndex = await response.json();
  console.log('Criteria Index:', criteriaIndex);

  let categoriesHtml = criteriaIndex.categories.map(category => {
    console.log('Rendering category:', category);
    return `<section class="category-section">
                <h3>${category.name}</h3>
                <p>${category.description}</p>
                ${(category.criteria || []).map(criteria => renderCriteria(criteria, true)).join('')}
            </section>`
  }).join('');

  criteriaSection.innerHTML = `<h2>The criteria</h2>` + categoriesHtml;

}




function renderCriteria(criteria, isEvaluation = false) {
    console.log("Render Criteria", criteria);
    // TODO: Add ID to this html element so you can link to it.
    return `
    <section class="criteria">
       <h3>${criteria.name}</h1>

        ${(criteria.source && criteria.source.sourceRef) ? `
            <div class="source">
                <p>Source: ${criteria.source.sourceRef}</p>
            </div>
        ` : ''}

        </div>
        <div class="question section">
            <h4>QUESTION</h4>
            <h1>${criteria.question.question}</p>
            <p>${criteria.question.instruction ? criteria.question.instruction : ''}</p>
        </div>

        <div class="responses section">
            <h4>RESPONSES</h4>
            <div class="responses-list">
                ${criteria.response && criteria.response.possibleResponses && criteria.response.possibleResponses.map(response => `
                    <div class="response-item">
                        <span class="response-label">${response.label}.</span>
                        <span class="response-meaning">${response.meaning}</span>
                    </div>
                `).join('')}
            </div>

        </div>

        <div class="relevance section">
            <h4>RELEVANCE</h4>
            <p>${criteria.relevance}</p>
        </div>

        <div class="assessments section">
            <h4>${isEvaluation ? 'ASSESSMENTS' : 'EXAMPLE ASSESSMENTS'}</h4>
            <table>
            <thead>
                <tr>
                    <!-- <th>ID</th> -->
                    ${criteria.assessmentTemplate && criteria.assessmentTemplate.columns && criteria.assessmentTemplate.columns.map(column => `<th>${column.heading}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                ${isEvaluation ? criteria.exampleAssessments.map(assessment => `
                    <tr>
                        <!-- <td>${assessment.id}</td> -->
                        ${criteria.assessmentTemplate.columns.map(column => `<td>${assessment[column.propertyRef]}</td>`).join('')}
                    </tr>
                `).join('') : criteria.exampleAssessments.map(assessment => `
                    <tr>
                        <!-- <td>${assessment.id}</td> -->
                        ${criteria.assessmentTemplate.columns.map(column => `<td>${assessment[column.propertyRef]}</td>`).join('')}
                    </tr>
                `).join('')}
            </tbody>
            </table>
        </div>

    </div>
    </section>
    `

}

window.renderCategories = renderCategories;