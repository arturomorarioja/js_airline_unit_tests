// Calculation of the discount offered on the normal airfare:
// - Passengers older than 18 with destinations in India are offered a discount of 20%, as long as the departure is not on a Monday or Friday
// - For destinations outside of India, passengers are offered a discount of 25%, if the departure is not on a Monday or Friday
// - Passengers who stay at least 6 days at their destination receive an additional discount of 10%
// - Passengers older than 2 but younger than 18 years are offered a discount of 40% for all destinations
// - Children 2 and under travel for free

export const Weekday = {
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
    THURSDAY: 3,
    FRIDAY: 4,
    SATURDAY: 5,
    SUNDAY: 6    
};

export const calculateDiscount = (destination, passengerAge, departureWeekday, stayDays) => {
    if (passengerAge <= 2) {
        return 1;
    }

    let discount = 0;
    if (stayDays >= 6) {
        discount += 0.1;
    }
    if (passengerAge > 2 && passengerAge < 18) {
        discount += 0.4;
    }
    if (passengerAge > 18 && destination === 'I' && ![Weekday.MONDAY, Weekday.FRIDAY].includes(departureWeekday)) {
        discount += 0.2;
    }
    if (destination !== 'I' && ![Weekday.MONDAY, Weekday.FRIDAY].includes(departureWeekday)) {
        discount += 0.25;
    }
    return discount;
};