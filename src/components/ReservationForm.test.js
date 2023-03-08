import { render, screen } from "@testing-library/react";
import ReservationForm, {initializeTimes, updateTimes} from "./ReservationForm";

test('Renders the booking form heading', () => {
    render(<ReservationForm />);

    const labelElement = screen.getByText('First Name');
    expect(labelElement).toBeInTheDocument();
});

test('updateTimes returns correct times', () => {
    const today = new Date(2023, 3, 8);
    const expected = [ "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:30", "21:30", "22:00", "22:30", "23:00" ]

    const result = updateTimes({}, {type: 'date_changed', date: today});

    expect(result).toEqual(expected);
});

test('updateTimes returns correc times', () => {
    const today = new Date(2023, 3, 8);
    const expected = [ "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:30", "21:30", "22:00", "22:30", "23:00" ]

    const result = initializeTimes(today);

    expect(result).toEqual(expected);
});