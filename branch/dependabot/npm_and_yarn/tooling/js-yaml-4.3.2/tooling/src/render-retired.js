

function renderRetired() {
    const { document } = window;
    const retiredSection = document.getElementById('retired');
    // this section must already exist in the document,
    // inside  a <section> element.

    if (!retiredSection) {
        console.warn('No retired section found');
        return;
    }

    if (!retiredCriteria) {
        console.error('No retiredCriteria variable found, have you run npm run generate-rubric?');
        return;
    }



    let retiredHtml = `<table>
        <thead><tr><th>Permalink</th></tr>
        ${retiredCriteria.map(criteria => renderRetiredRow(criteria)).join('')}
    </table>`;

    retiredSection.innerHTML += retiredHtml;

}

function renderRetiredRow(criteria) {
    let criteriaIdFragment = criteria.id.split('#')[1];
    return `<tr id="${criteriaIdFragment}">
        <td><a href="${criteria.permalink}">${criteria.permalink}</a></td>
    </tr>`;
}

window.renderRetired = renderRetired;