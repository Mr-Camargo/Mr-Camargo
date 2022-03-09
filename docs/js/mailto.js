const style = `#mailtoLink:hover {
    text-decoration: underline;
    cursor: pointer;
}`;

const styleSheet = document.createElement("style");
styleSheet.innerText = style;
document.head.appendChild(styleSheet);

// Start of code to encode the address
var emailLink = document.getElementById('mailtoLink'); //or grab it by tagname etc
emailLink.href = "javascript:decryptEmail('Y2FtYXJnb0B0dXRhbWFpbC5jb20')"

function decryptEmail(encoded) {

    const address = atob(encoded);

    window.location.href = `mailto:${address}`;

}