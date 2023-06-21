  /* An IP address is a numerical label assigned to each device (e.g., computer,
printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules */
// Split the input string by the '.' character to get an array of strings
function isIPv4Address(inputString) {
let parts = inputString.split('.');

// Check if the length of the array is exactly 4
if (parts.length !== 4) {
    return false;
}

// Iterate over each part of the array
for (let i = 0; i < parts.length; i++) {
    let part = parts[i];

    // Check if the part is a string of digits using a regular expression
    if (!part.match(/^\d+$/)) {
        return false;
    }

    // Convert the string to an integer
    let num = parseInt(part);

    // Check if the integer is in the range [0, 255]
    if (num < 0 || num > 255) {
        return false;
    }
}

// If all checks pass, return true
return true;
    }

    console.log(isIPv4Address ("172.124.254.1"))