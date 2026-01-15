const hash = window.location.hash;

if (
    hash.includes("confirmation_token") ||
    hash.includes("access_token") ||
    hash.includes("invite_token")
) {
    window.location.replace("/admin/" + hash);
}
