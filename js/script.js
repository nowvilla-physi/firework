$(document).ready(function () {
    const remainingDays = new RemainingDays(
        new Date(2021, 7, 29)
    );

    const now = new Date();
    remainingDays.calcRemainingDays(now)

    const element = document.getElementById('day');
    element.innerHTML = remainingDays.getRemainingDays();
});

class RemainingDays {
    constructor(eventDate) {
        this.eventDate = eventDate;
    };

    remainingDays = null;

    calcRemainingDays(now) {
        this.remainingDays = Math.floor(
            (this.eventDate.getTime() - now.getTime()) / (24 * 60 * 60 * 1000) + 1
        );
    };

    getRemainingDays() {
        return this.remainingDays;
    };
}

$('.reserve-btn').on('click', function () {
    alert('予約ページは準備中です。(≧∀≦)')
});
