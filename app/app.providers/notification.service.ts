import { Injectable } from "@angular/core";
declare var UIkit: any;

@Injectable()
export class Notify {
    private NOTIFICATION_POSITION: string = "bottom-center";
    private NOTIFICATION_TIMEOUT: number = 3000;

    constructor() {}

    success(message: string) {
        UIkit.notification({
            message: `<span uk-icon='icon: check'></span> <span class="notify-message">${message}</span>`,
            status: "success",
            pos: this.NOTIFICATION_POSITION,
            timeout: this.NOTIFICATION_TIMEOUT
        });
    }

    error(message: string) {
        UIkit.notification({
            message: `<span uk-icon='icon: ban'></span> <span class="notify-message">${message}</span>`,
            status: "danger",
            pos: this.NOTIFICATION_POSITION,
            timeout: this.NOTIFICATION_TIMEOUT
        });
    }

    info(message: string) {
        UIkit.notification({
            message: `<span uk-icon='icon: info'></span> <span class="notify-message">${message}</span>`,
            status: "primary",
            pos: this.NOTIFICATION_POSITION,
            timeout: this.NOTIFICATION_TIMEOUT
        });
    }

    warn(message: string) {
        UIkit.notification({
            message: `<span uk-icon='icon: warning'></span> <span class="notify-message">${message}</span>`,
            status: "warning",
            pos: this.NOTIFICATION_POSITION,
            timeout: this.NOTIFICATION_TIMEOUT
        });
    }
}