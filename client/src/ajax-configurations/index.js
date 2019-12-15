export const GET_CONFIG = () => {
    return {
        method:"GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "admin"
        }
    }
};

export const POST_CONFIG = reqBody => {
    return {
        method: "POST",
        body: JSON.stringify(reqBody),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "admin"
        }
    }
};

export const PUT_CONFIG = reqBody => {
    return {
        method: "PUT",
        body: JSON.stringify(reqBody),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "admin"
        }
    }
};

export const DELETE_CONFIG = reqBody => {
    return {
        method: "DELETE",
        body: JSON.stringify(reqBody),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "admin"
        }
    }
};