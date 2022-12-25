getUserData ();
submitNomination ();

function getUserData () {
    fetch ("https://x8ki-letl-twmt.n7.xano.io/api:FpGBKQoI/auth/iam", {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : localStorage.getItem ('authToken')
        }
    })

    .then (res => res.json())

    .then (json => {
        const response = json;
        console.log (response);
        document.getElementById ('user-uuid-2').value = response.id;
        document.getElementById ('pro_title').value = response.title;
        document.getElementById ('pro_name').value = response.name;
        document.getElementById ('pro_title').value = response.title;
        document.getElementById ('pro_pam_registration').value = response.pam_membership_no;
        document.getElementById ('pro_lam_registration').value = response.lam_registration_no;
        document.getElementById ('pro_firm_name').value = response.pro_firm_name;
        document.getElementById ('pro_firm_lam_registration').value = response.firm_lam_registration_no;
        document.getElementById ('pro_firm_address_1').value = response.firm_address_line_1;
        document.getElementById ('pro_firm_address_2').value = response.firm_address_line_2;
        document.getElementById ('pro_firm_postcode').value = response.firm_address_postcode;
        document.getElementById ('firm_address_city').value = response.firm_address_city;
        document.getElementById ('pro_firm_state').value = response.firm_address_state;
        document.getElementById ('pro_firm_country').value = response.firm_address_country;
        document.getElementById ('pro_firm_phone').value = response.phone_number;
        document.getElementById ('pro_firm_mobile').value = response.mobile_number;
    })
}

function submitNomination () {
$("#submit-nomination-button").click(function (event) {
    event.preventDefault();
    const nomination_data = {
        nomination_type: getNominationType(),
        project_title: document.getElementById('project_title').value,
        project_address: document.getElementById('project_address').value,
        dateofCompletion: document.getElementById('date_completion').value,
        category: getCategory(),
        arch_title: document.getElementById ('pro_title').value,
        arch_full_name: document.getElementById('pro_name').value,
        arch_pam_reg_no: document.getElementById('pro_pam_registration').value,
        arch_lam_reg_no: document.getElementById('pro_lam_registration').value,
        arch_pam_cert: document.getElementById('pro_pam_certificate').value,
        arch_lam_cert: document.getElementById('pro_lam_certificate').value,
        arch_firm_name: document.getElementById('pro_firm_name').value,
        arch_firm_lam_reg: document.getElementById('pro_firm_lam_registration').value,
        arch_firm_addr_l1: document.getElementById('pro_firm_address_1').value,
        arch_firm_addr_l2: document.getElementById('pro_firm_address_2').value,
        arch_postcode: document.getElementById('pro_firm_postcode').value,
        arch_city: document.getElementById('firm_address_city').value,
        arch_state: document.getElementById('pro_firm_state').value,
        arch_country: document.getElementById('pro_firm_country').value,
        arch_phone_no: document.getElementById('pro_firm_phone').value,
        arch_mobile_no: document.getElementById('pro_firm_mobile').value,
        collaborator_type: getCollaboratorType(),
        collaborator_title: document.getElementById('collab_title').value,
        collaborator_name: document.getElementById('collab_name').value,
        collaborator_pam_reg_no: document.getElementById('collab_pam_registration').value,
        collaborator_lam_reg_no: document.getElementById('collab_lam_registration').value,
        collab_lam_cert: document.getElementById('collab_pam_certificate').value,
        collab_pam_cert: document.getElementById('collab_lam_certificate').value,
        collaborator_firm_name: document.getElementById('collab_firm_name').value,
        collaborator_firm_reg_no: document.getElementById('collab_firm_registration').value,
        collaborator_firm_address_l1: document.getElementById('collab_firm_address_1').value,
        collaborator_firm_address_l2: document.getElementById('collab_firm_address_2').value,
        collaborator_postcode: document.getElementById('collab_firm_postcode').value,
        collaborator_city: document.getElementById('collab_firm_city').value,
        collaborator_state: document.getElementById('collab_firm_state').value,
        collaborator_country: document.getElementById('collab_firm_country').value,
        collaborator_phone_no: document.getElementById('collab_firm_phone').value,
        collaborator_mobile_number: document.getElementById('collab_firm_mobile').value,
        collaborator_email: document.getElementById('collab_firm_email').value,
    }
    })


    function getNominationType() {
        if (document.getElementById('individual').checked === true) {
            return "individual"
        }
        else if (document.getElementById('collaboration').checked === true) {
            return "collaboration"
        }
        else {
            return null;
        }
    }

    function getCategory () {
        if (document.getElementById('Single-Residential').checked === true) {
            return "SR"
        }
        else if (document.getElementById('commerical_low_rise').checked === true) {
            return "CLR"
        }
        else if (document.getElementById('multiple_residential_low_rise').checked === true) {
            return "MRLR"
        }
        else if (document.getElementById('Commercial-High-Rise-2').checked === true) {
            return "CHR"
        }
        else if (document.getElementById('multiple_residential_high_rise').checked === true) {
            return "MRHR"
        }
        else if (document.getElementById('showroom').checked === true) {
            return "Showroom"
        }
        else if (document.getElementById('public_and_Institutional').checked === true) {
            return "P&I"
        }
        else if (document.getElementById('sports_and_recreation').checked === true) {
            return "S&R"
        }
        else if (document.getElementById('alteration_addition').checked === true) {
            return "A&A"
        }
        else if (document.getElementById('planning_master_planning').checked === true) {
            return "P&MP"
        }
        else if (document.getElementById('conservation').checked === true) {
            return "Conservation"
        }
        else if (document.getElementById('hospitality').checked === true) {
            return "Hospitality"
        }
        else if (document.getElementById('overseas').checked === true) {
            return "Overseas"
        }
        else if (document.getElementById('sdg_3').checked === true) {
            return "SDG: G3"
        }
        else {
            return null;
        }
    }

    function getCollaboratorType() {
        if (document.getElementById('collab_local').checked === true) {
            return "Local"
        }
        else if (document.getElementById('collab_foreign').checked === true) {
            return "Foreign"
        }
        else {
            return null
        }
    }

    function getSOS () {
        
    }
}
