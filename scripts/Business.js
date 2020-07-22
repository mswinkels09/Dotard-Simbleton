export const Business = (businessObject) => {
    return `
    <section class="business">
        <h3 class="business__name"><strong>${businessObject.companyName}<strong></h3>
        <div class="business__streetAddress">${businessObject.addressFullStreet}</div>
        <div class="business__cityAddress">${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</div>
    </section>`

}