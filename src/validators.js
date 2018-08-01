export const required = value => (value ? undefined : 'Required');
export const notEmpty = value => (value.trim() !== '' ? undefined : 'Must not be empty');
export const minLength = value => (value.length === 5 ? undefined : 'Tracking number must be 5 characters long');
export const isNumber = value => (typeof(value) === 'number' ? undefined : 'Each character must be a number');