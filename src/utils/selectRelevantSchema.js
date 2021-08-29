import * as yup from 'yup';

const selectRelevantSchema = (finalObject, item) => {
  switch (item.type) {
    case 'text':
    case 'select': {
      finalObject[item.fieldName] = yup
        .string()
        .typeError(`${item.title} must contain no numbers or symbols`)
        .required(`${item.title} is required`);
      return finalObject;
    }

    case 'date': {
      finalObject[item.fieldName] = yup
        .date()
        .required(`${item.title} is required`);
      return finalObject;
    }

    case 'number': {
      finalObject[item.fieldName] = yup
        .number()
        .typeError(`${item.title} is required and must be a number`)
        .positive(`${item.title} must be greater than zero`)
        .integer()
        .required(`${item.title} is required`);
      return finalObject;
    }

    default: {
      throw new Error(`Unsupported input type: ${item.type}`);
    }
  }
};

export default selectRelevantSchema;
