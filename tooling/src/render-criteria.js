

async function renderCategories() {
  const {document} = window;
  const criteriaSection = document.getElementById('criteria');

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
    return `<section class="category-section">
                <h3>${category.name}</h3>
                <p>${category.description}</p>
                ${(category.criteria || []).map(criteria => renderCriteria(criteria)).join('')}
            </section>`
  }).join('');

  criteriaSection.innerHTML = `<h2>The criteria</h2>` + categoriesHtml;

}




function renderCriteria(criteria) {

    let criteriaIdFragment = criteria.id.split('#')[1];
    // TODO: Add ID to this html element so you can link to it.
    return `
    <section class="criteria">
       <h4 id="${criteriaIdFragment}">${criteria.name}</h4>
       <a href="#${criteriaIdFragment}">${criteria.id}</a>
       <span>v${criteria.version}</span>

        ${(criteria.source && criteria.source !== ".") ? `
            <div class="source">
                <p>Source: <a href="${criteria.source}">${criteria.source}</a></p>
            </div>
        ` : ''}


        <section>
            <h5>Question</h4>
            <p>${criteria.question.question}</p>
            ${criteria.question.instruction ?
                `<p><span>Instruction:</span>${criteria.question.instruction}</p>`
            : ``}
        </section>

        ${criteria.response && criteria.response.possibleResponses ?
            `<section>
                <h5>Responses</h5>
                <ol type="A">
                    ${criteria.response.possibleResponses.map(response => `
                        <li>${response.meaning}</li>
                    `).join('')}
                </ol>


            </section>` : ''}

        ${criteria.relevance &&
            `<section>
                <h5>Relevance</h5>
                <p>${criteria.relevance}</p>
            </section>`}

        ${criteria.exampleAssessments && criteria.exampleAssessments.length > 0 ? `<section>
            <h5>Examples</h5>
            <table>
            <thead>
                <tr>
                    <!-- <th>ID</th> -->
                    ${criteria.assessmentTemplate && criteria.assessmentTemplate.columns && criteria.assessmentTemplate.columns.map(column => `<th>${column.heading}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                ${criteria.exampleAssessments && criteria.exampleAssessments.map(assessment => `
                    <tr>
                        <!-- <td>${assessment.id}</td> -->
                        ${criteria.assessmentTemplate.columns && criteria.assessmentTemplate.columns.map(column => {
                            let contents = assessment[column.propertyRef];
                            if (column.propertyRef === 'note') {
                                let evalCitation = `[<a href="${assessment.evaluationCitation}">${assessment.evaluationCitation.slice(1)}</a>]`

                                contents += ` ${evalCitation}`;
                            }

                            return `<td>${contents}</td>`;
                        }).join('')}
                    </tr>
                `).join('')}
            </tbody>
            </table>

        </section>` : ''}

    </section>
    `

}

window.renderCategories = renderCategories;