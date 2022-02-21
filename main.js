function raiseDisconnect(request) {
    //console.log("Roll detected");
    const event = new CustomEvent("Beyond20_disconnect", { "detail": null });
    document.dispatchEvent(event);
}

Hooks.once('ready', () => {
    const event = ["Beyond20_Roll", (evt) => {
        const detail = evt.detail || [];
        callback(...detail)
    }, false];

    document.addEventListener(...event);

    if (!game.user.isGM) {
        if (game.beyond20) {
            raiseDisconnect();
        }
    }
});

