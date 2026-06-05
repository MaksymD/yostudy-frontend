const TELEGRAM_USERNAME = "solomchakju";

export function getTelegramUrl(message: string) {
    return `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(message)}`;
}

export function openTelegram(message: string) {
    window.open(
        getTelegramUrl(message),
        "_blank",
        "noopener,noreferrer"
    );
}