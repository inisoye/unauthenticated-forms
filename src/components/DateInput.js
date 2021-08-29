import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';

function DateInput({ labelName, placeholder, fieldName, control }) {
  return (
    <label onClick={(e) => e.preventDefault()}>
      {labelName}

      <Controller
        control={control}
        name={fieldName}
        render={({ field }) => (
          <DatePicker
            placeholderText="Select date"
            onChange={(date) => field.onChange(date)}
            selected={field.value}
            dateFormat="dd/MM/yyyy"
            withPortal
            fixedHeight
            shouldCloseOnSelect={true}
            todayButton="Select today"
          />
        )}
      />
    </label>
  );
}

export default DateInput;
