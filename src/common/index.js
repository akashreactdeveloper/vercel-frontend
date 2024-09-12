const backendDomin = "http://localhost:8080"

const SummaryApi = {
    signUP : {
        url : `${backendDomin}/api/signup`,
        method : "post"
    },
    signIN : {
        url : `${backendDomin}/api/`,
        method : "post"

    },
    current_user : {
        url : `${backendDomin}/api/user-details`,
        method : "get"
        
    },
    Logout_user : {
        url : `${backendDomin}/api/userLogout`,
        method : 'get'
    },
    allUser : {
        url : `${backendDomin}/api/all-users`,
        method : 'get'
    },
    updateUser : {
        url : `${backendDomin}/api/update-user`,
        method : "post"
    },
    AwlformData : {
        url : `${backendDomin}/api/Awl-formdata`,
        method : "post"
    },
    AllAwlGatepass : {
        url : `${backendDomin}/api/get-AwlGatepass`,
        method : 'get'
    },
    GatepassType : {
        url : `${backendDomin}/api/gatepass-type`,
        method : 'get'
    },
    UpdateGatepass : {
        url : `${backendDomin}/api/update-gatepass`,
        method : 'post'
    },


}

export default SummaryApi