

async function renderCategories() {
  const {document} = window;
  const criteriaSection = document.getElementById('criteria');

  if (!criteriaSection) {
    console.warn('No criteria section found');
    return;
  }

  const response = await fetch('../rubric/rubric.json');
  const rubric = await response.json();
  console.log('Rubric:', rubric);

  let categoriesHtml = rubric.categories.map(category => {
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
    
    let criteriaIdFragment = criteria.id.split('#')[1];
    // TODO: Add ID to this html element so you can link to it.
    return `
    <section class="criteria">
       <h4 id="${criteriaIdFragment}">${criteria.name}</h4>
       <a href="#${criteriaIdFragment}">${criteria.id}</a>
       <span>${criteria.version}</span>

        ${(criteria.source && criteria.source.sourceRef) ? `
            <div class="source">
                <p>Source: <a href="${criteria.source.sourceRef}">${criteria.source.sourceRef}</a></p>
            </div>
        ` : ''}


        <section>
            <h5>Question</h4>
            <p>${criteria.question.question}</p>
            ${criteria.question.instruction ? 
                `<p><span>Instruction:</span>${criteria.question.instruction}</p>`
            : ``}
        </section>

        <section>
            <h5>Responses</h4>
            <ol type="A">
                ${criteria.response.possibleResponses.map(response => `
                    <li>${response.meaning}</li>
                `).join('')}
            </ol>


        </section>

        <section>
            <h5>Relevance</h4>
            <p>${criteria.relevance}</p>
        </section>

        <section>
            <h5>Examples</h4>
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
        </section>

    </section>
    `

}

window.renderCategories = renderCategories;