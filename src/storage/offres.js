const STORAGE_KEY = "offres";

export function getOffres() {
    return JSON.parse(
        localStorage.getItem(STORAGE_KEY)
    ) || [];
}

export function saveOffres(offres) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(offres)
    );
}