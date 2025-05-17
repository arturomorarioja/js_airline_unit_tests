import { Weekday, calculateDiscount } from '../airline/airline.js';

describe('Airline tests', () => {

    /**
     * Decision table-based testing.
     * Each test case is based on a business rule from the reduced decision table
     */

    const airlinePassesProvider = [
        {'destination': 'I', 'passengerAge': 1, 'departureWeekday': Weekday.WEDNESDAY, 'stayDays': 5, 'discount': 1},       // R1
        {'destination': 'I', 'passengerAge': 15, 'departureWeekday': Weekday.WEDNESDAY, 'stayDays': 8, 'discount': 0.5},    // R2
        {'destination': 'I', 'passengerAge': 15, 'departureWeekday': Weekday.WEDNESDAY, 'stayDays': 5, 'discount': 0.4},    // R3
        {'destination': 'X', 'passengerAge': 45, 'departureWeekday': Weekday.MONDAY, 'stayDays': 5, 'discount': 0},         // R4
        {'destination': 'X', 'passengerAge': 45, 'departureWeekday': Weekday.MONDAY, 'stayDays': 8, 'discount': 0.1},       // R5
        {'destination': 'I', 'passengerAge': 45, 'departureWeekday': Weekday.WEDNESDAY, 'stayDays': 8, 'discount': 0.3},    // R6
        {'destination': 'I', 'passengerAge': 45, 'departureWeekday': Weekday.WEDNESDAY, 'stayDays': 5, 'discount': 0.2},    // R7
        {'destination': 'A', 'passengerAge': 15, 'departureWeekday': Weekday.MONDAY, 'stayDays': 8, 'discount': 0.5},       // R8
        {'destination': 'A', 'passengerAge': 15, 'departureWeekday': Weekday.MONDAY, 'stayDays': 5, 'discount': 0.4},       // R9
        {'destination': 'A', 'passengerAge': 15, 'departureWeekday': Weekday.WEDNESDAY, 'stayDays': 8, 'discount': 0.75},   // R10
        {'destination': 'A', 'passengerAge': 15, 'departureWeekday': Weekday.WEDNESDAY, 'stayDays': 5, 'discount': 0.65},   // R11
        {'destination': 'A', 'passengerAge': 45, 'departureWeekday': Weekday.WEDNESDAY, 'stayDays': 8, 'discount': 0.35},   // R12
        {'destination': 'A', 'passengerAge': 45, 'departureWeekday': Weekday.WEDNESDAY, 'stayDays': 5, 'discount': 0.25},   // R13        
    ];
    describe.each(airlinePassesProvider)('Airline passes', (params) => {
        it(`
            Destination: ${params.destination}, 
            passenger age: ${params.passengerAge}, 
            departure weekday: ${params.departureWeekday}, 
            stay days: ${params.stayDays} passes
        `, () => {
            
            expect(calculateDiscount(
                params.destination, 
                params.passengerAge, 
                params.departureWeekday, 
                params.stayDays
            )).toBeCloseTo(params.discount);
        });
    });
});