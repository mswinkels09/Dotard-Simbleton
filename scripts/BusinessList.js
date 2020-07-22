import { Business } from "./Business.js";
import { useBusinesses } from "./BusinessProvider.js";
import { newYorkBusinesses } from "./BusinessProvider.js";
import { manufacturingBusinesses } from "./BusinessProvider.js";
import { agentNames } from "./BusinessProvider.js";

const contentTarget = document.querySelector(".businesses")
const contentTargetNY = document.querySelector(".businessList--newYork")
const contentTargetManufacturing = document.querySelector(".businessList--manufacturing")
const contentTargetAgent = document.querySelector(".agents")

export const BusinessList = () => {
    const businessArray = useBusinesses()
    contentTarget.innerHTML = "<h1><strong>Active Businnesses</strong></h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
}

export const BusinessListNY = () => {
    const businessArray = newYorkBusinesses()
    contentTargetNY.innerHTML = "<h1><strong>New York Businnesses</strong></h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTargetNY.innerHTML += Business(businessObject)
        }
    );
}

export const BusinessListManufacturing = () => {
    const businessArray = manufacturingBusinesses()
    contentTargetManufacturing.innerHTML = "<h1><strong>Manufacturing Businnesses</strong></h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTargetManufacturing.innerHTML += Business(businessObject)
        }
    );
}
export const BusinessListPurchasingAgents = () => {
    const agents = agentNames()
    contentTargetAgent.innerHTML = "<h1><strong>Purchasing Agents</strong></h1>"

    agents.forEach((businessObject) => {
        contentTargetAgent.innerHTML += `<h2>${businessObject.agentFirstName} ${businessObject.agentLastName}</h2>`;
        contentTargetAgent.innerHTML += `<h3>${businessObject.agentCompanyName}</h3>`;
        contentTargetAgent.innerHTML += `<section>${businessObject.agentPhone}</section>`;
        });
}

const businesses = useBusinesses()
let companySearchResultArticle = document.querySelector(".foundBusiness")



document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */

           // implement .find() method here
           const foundBusiness = businesses.find(businessObject => businessObject.companyName.includes(keyPressEvent.target.value) )
            
           companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }

    });

    let agentSearchResultArticle = document.querySelector(".foundAgent")
    const agentInfo = agentNames()
document
    .querySelector("#agentSearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            
            const foundAgent = agentInfo.find(agentObject => agentObject.agentFirstName.includes(keyPressEvent.target.value) )
            agentSearchResultArticle.innerHTML = `
                <h2>
                ${foundAgent.agentFirstName} ${foundAgent.agentLastName}
                </h2>
                <section>
                ${foundAgent.agentCompanyName}

                </section>
                <section>
                ${foundAgent.agentPhone}
                </section>
            `;
            
        }
    });