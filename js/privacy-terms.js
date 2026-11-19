
/* ========================================
   PAH/NA - WEBSITE JAVASCRIPT
   Privacy Policy & Terms of Use
   ======================================== */


/* AUTOMATIC COPYRIGHT YEAR */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* ========================================
   PAH/NA - PRIVACY & TERMS AGREEMENT
   ======================================== */

/* PRIVACY POLICY BUTTONS */

const privacyAgree = document.getElementById("privacyAgree");
const privacyDisagree = document.getElementById("privacyDisagree");
const privacyMessage = document.getElementById("privacyMessage");
const privacyAgreement = document.getElementById("privacyAgreement");

if (privacyAgree && privacyDisagree && privacyAgreement) {

    privacyAgree.addEventListener("click", function () {
        localStorage.setItem("privacyChoice", "agreed");

        privacyMessage.textContent = "Thank you! You have acknowledged our Privacy Policy.";
        privacyAgreement.style.display = "none";   
    });
    
    privacyDisagree.addEventListener("click", function () {
        localStorage.setItem("privacyChoice", "disagreed");

        privacyMessage.textContent = "You have not acknowledged our Privacy Policy.";
        privacyAgreement.style.display = "none";
    });
}

/* TERMS OF USE BUTTONS */

const termsAgree = document.getElementById("termsAgree");
const termsDisagree = document.getElementById("termsDisagree");
const termsMessage = document.getElementById("termsMessage");
const termsAgreement = document.getElementById("termsAgreement");

if (termsAgree && termsDisagree && termsAgreement) {

    termsAgree.addEventListener("click", function () {
        localStorage.setItem("termsChoice", "agreed");

        termsMessage.textContent = "Thank you! You have acknowledge our Terms of Use.";
        termsAgreement.style.display = "none";   
    });
    
    termsDisagree.addEventListener("click", function () {
        localStorage.setItem("termsChoice", "disagreed");

        termsMessage.textContent = "You have not acknowledged our Terms of Use.";
        termsAgreement.style.display = "none";
    });
}
